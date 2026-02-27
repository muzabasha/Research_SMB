# Deployment Fix - generateStaticParams Issue

## Problem
Vercel deployment was failing with error:
```
Next.js can't recognize the exported `generateStaticParams` field in route. 
App pages cannot use both "use client" and export function "generateStaticParams()".
```

## Root Cause
In Next.js 16 with App Router:
- `generateStaticParams()` can only be exported from **Server Components**
- Files with `"use client"` directive are **Client Components**
- The `page.tsx` file had `"use client"` because it uses React hooks (useState, useParams)

## Solution Applied
Moved `generateStaticParams()` from `page.tsx` to `layout.tsx`:

### Before (WRONG):
```tsx
// app/journey/[stageId]/page.tsx
'use client'

export function generateStaticParams() {
    return JOURNEY_STAGES.map((stage) => ({
        stageId: stage.id.toString(),
    }))
}

export default function StageDetailPage() {
    // ... component code
}
```

### After (CORRECT):
```tsx
// app/journey/[stageId]/layout.tsx
import { JOURNEY_STAGES } from '@/lib/journey-data'

export function generateStaticParams() {
    return JOURNEY_STAGES.map((stage) => ({
        stageId: stage.id.toString(),
    }))
}

export default function StageLayout({ children }) {
    return <>{children}</>
}
```

```tsx
// app/journey/[stageId]/page.tsx
'use client'

// No generateStaticParams here!
export default function StageDetailPage() {
    // ... component code with hooks
}
```

## Why This Works
1. **layout.tsx** is a Server Component (no "use client")
2. Server Components can export `generateStaticParams()`
3. The layout wraps the page, so params are still generated
4. The page can remain a Client Component and use hooks

## Files Modified
- ✅ `app/journey/[stageId]/layout.tsx` - Added generateStaticParams
- ✅ `app/journey/[stageId]/page.tsx` - Removed generateStaticParams, kept "use client"

## Verification Steps
1. ✅ No TypeScript errors
2. ✅ generateStaticParams only in layout.tsx
3. ✅ page.tsx remains a Client Component
4. ✅ All 15 stage routes will be pre-generated

## Next Steps
1. Commit and push changes to GitHub
2. Vercel will auto-deploy
3. Build should succeed
4. All 15 stage pages will be statically generated

## Technical Details
- **Next.js Version**: 16.1.6
- **Build Mode**: Static Export (`output: 'export'`)
- **Routes Generated**: /journey/1 through /journey/15
- **Component Type**: Layout (Server) + Page (Client)

## References
- [Next.js generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
- [Next.js Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
