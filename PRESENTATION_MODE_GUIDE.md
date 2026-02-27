# 🎥 Presentation Mode - Complete Guide

## Overview

Full-screen presentation mode designed for projector display to audiences of 60+ people with:
- ✅ Large, readable fonts (visible from back of room)
- ✅ Light background colors (projector-friendly)
- ✅ Toggleable mind map navigation
- ✅ Smooth animations
- ✅ Auto-advance slides
- ✅ Keyboard shortcuts
- ✅ Progress tracking

---

## 🚀 How to Access

### From Journey Page
1. Go to `/journey`
2. Click "Presentation Mode" button (purple button in top right)
3. Starts at Stage 1

### Direct URL
- `/presentation/1` - Stage 1
- `/presentation/2` - Stage 2
- ... up to `/presentation/15` - Stage 15

---

## 🎨 Design Features

### Projector-Optimized
- **Font Sizes**: 
  - Titles: 7xl (72px) - 6xl (60px)
  - Headings: 4xl (36px) - 3xl (30px)
  - Body text: 3xl (30px) - 2xl (24px)
  - Small text: xl (20px) - lg (18px)

- **Colors**:
  - Light backgrounds (white, gray-50, blue-50)
  - High contrast text (gray-900, gray-700)
  - Color-coded sections (blue, green, red, purple)

- **Spacing**:
  - Large padding (p-8, p-10, p-12)
  - Generous margins (mb-8, mb-12)
  - Wide gaps between elements

### Visibility from 60-Person Venue
- Text readable from 30+ feet away
- High contrast ratios
- No small or thin fonts
- Clear visual hierarchy
- Large icons and emojis

---

## 🗺️ Mind Map Features

### Toggleable Sidebar
- **Show/Hide**: Click "Show Mind Map" button or X icon
- **Width**: 384px (24rem) when open
- **Position**: Fixed left side
- **Scroll**: Independent scrolling

### Mind Map Content
- All 5 phases displayed
- All 15 stages listed
- Current stage highlighted (blue)
- Completed stages (green with checkmark)
- Future stages (gray)
- Click any stage to jump to it

### Visual Indicators
- ✅ Completed: Green background, checkmark icon
- 🔵 Current: Blue background, filled circle, scaled up
- ⚪ Future: Gray background, empty circle

---

## 📊 Slide Structure

### Each Stage Has Multiple Slides:

1. **Title Slide**
   - Stage number and phase
   - Title and subtitle
   - Duration and activity type
   - Description

2. **Learning Objectives**
   - Numbered list (1-4 objectives)
   - Large, clear text
   - Animated entrance

3. **Transformation**
   - FROM → TO visualization
   - Color-coded (red → green)
   - Large, bold text
   - Animated arrows

4. **Do's and Don'ts**
   - Two-column layout
   - Green (do's) vs Red (don'ts)
   - Checkmarks and X marks
   - 6 items each

5. **Sub-Stages** (if available)
   - Grid layout (2 columns)
   - Numbered badges
   - Duration and deliverable
   - Animated entrance

6. **Activities** (1 slide per activity)
   - Activity title and type
   - Description
   - Steps (numbered)
   - Materials needed
   - Expected output

7. **Success Story**
   - Large quote
   - Author and role
   - Motivational message

---

## 🎮 Controls

### Top Control Bar
- **Home Button**: Return to journey page
- **Show Mind Map**: Toggle sidebar
- **Slide Counter**: Current slide / Total slides
- **Play/Pause**: Auto-advance slides
- **Fullscreen**: Toggle fullscreen mode

### Bottom Navigation Bar
- **Previous Stage**: Go to previous stage (disabled at Stage 1)
- **Previous Slide**: Go to previous slide (disabled at first slide)
- **Next Slide**: Go to next slide (disabled at last slide)
- **Next Stage**: Go to next stage (disabled at Stage 15)

### Keyboard Shortcuts
- **Arrow Left**: Previous slide
- **Arrow Right**: Next slide
- **F**: Toggle fullscreen
- **M**: Toggle mind map
- **Space**: Play/Pause auto-advance
- **Home**: First slide
- **End**: Last slide
- **Esc**: Exit fullscreen

---

## ⏱️ Auto-Advance Feature

### How It Works
- Click Play button to start
- Slides advance every 8 seconds
- Pauses at last slide of stage
- Click Pause to stop
- Manual navigation overrides auto-advance

### Use Cases
- Automated presentations
- Timed workshops
- Self-paced learning
- Demo mode

---

## 🎭 Animations

### Slide Transitions
- **fadeIn**: Smooth fade-in (0.6s)
- **slideInLeft**: Slide from left (0.6s)
- **slideInRight**: Slide from right (0.6s)
- **slideInUp**: Slide from bottom (0.6s)

### Staggered Animations
- List items animate sequentially
- Delay: 0.15s - 0.2s between items
- Creates flowing entrance effect

### Interactive Animations
- Hover effects on buttons
- Scale on current stage
- Pulse on arrows
- Smooth transitions (300ms)

---

## 📐 Layout Specifications

### Full Screen Mode
- **Width**: 100vw (full viewport width)
- **Height**: 100vh (full viewport height)
- **Content Area**: max-w-7xl (1280px) centered
- **Padding**: 3rem (48px) all sides

### With Mind Map
- **Mind Map**: 384px fixed left
- **Content**: Remaining width (calc(100vw - 384px))
- **Transition**: Smooth 300ms

### Without Mind Map
- **Content**: Full width
- **Centered**: max-w-7xl container

---

## 🎨 Color Palette

### Backgrounds
- White: `#FFFFFF`
- Gray-50: `#F9FAFB`
- Blue-50: `#EFF6FF`
- Green-50: `#F0FDF4`
- Red-50: `#FEF2F2`
- Purple-50: `#FAF5FF`

### Text
- Gray-900: `#111827` (primary)
- Gray-700: `#374151` (secondary)
- Gray-600: `#4B5563` (tertiary)

### Accents
- Blue-600: `#2563EB` (primary action)
- Green-600: `#16A34A` (success)
- Red-600: `#DC2626` (warning)
- Purple-600: `#9333EA` (special)

---

## 📱 Responsive Behavior

### Desktop (1920x1080 - Projector Standard)
- Optimal layout
- All features visible
- Large fonts readable

### Laptop (1366x768)
- Slightly smaller fonts
- Still readable
- All features work

### Tablet (1024x768)
- Mind map overlay instead of sidebar
- Adjusted font sizes
- Touch-friendly controls

---

## 🎯 Use Cases

### 1. Workshop Facilitation
- Present to 60-person audience
- Toggle mind map to show progress
- Auto-advance for timed activities
- Jump to specific stages as needed

### 2. Self-Paced Learning
- Students follow along
- Mind map shows overall journey
- Pause and review slides
- Navigate at own pace

### 3. Recorded Sessions
- Record presentation mode
- Auto-advance for consistent timing
- Professional appearance
- Easy to follow

### 4. Quick Reviews
- Jump to specific stages
- Review key points
- Check success stories
- Refresh memory

---

## 🔧 Technical Details

### Framework
- Next.js 16 App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Lucide React for icons

### Performance
- Static generation for all stages
- Smooth 60fps animations
- Optimized re-renders
- Fast navigation

### Browser Support
- Chrome/Edge (recommended)
- Firefox
- Safari
- Fullscreen API support required

---

## 📊 Slide Count by Stage

Varies by stage content:
- **Minimum**: 5 slides (no sub-stages or activities)
- **With Sub-Stages**: +1 slide
- **With Activities**: +1 slide per activity
- **Example**: Stage 1 with 4 sub-stages and 3 activities = 9 slides

---

## 🎓 Best Practices

### For Facilitators
1. **Test beforehand**: Check projector compatibility
2. **Use fullscreen**: Better immersion
3. **Show mind map initially**: Orient audience
4. **Hide mind map during content**: Less distraction
5. **Use auto-advance sparingly**: Allow time for discussion
6. **Pause for questions**: Between slides or stages

### For Presenters
1. **Arrive early**: Set up and test
2. **Check visibility**: Can back row see?
3. **Use pointer**: Highlight key points
4. **Engage audience**: Ask questions
5. **Take breaks**: Between phases
6. **Encourage participation**: Interactive activities

### For Students
1. **Follow along**: Use mind map
2. **Take notes**: During slides
3. **Ask questions**: When unclear
4. **Participate**: In activities
5. **Review later**: Revisit slides

---

## 🚀 Future Enhancements

### Planned Features
- [ ] Speaker notes view
- [ ] Timer per slide
- [ ] Audience polling
- [ ] Q&A integration
- [ ] Screen recording
- [ ] PDF export
- [ ] Custom themes
- [ ] Laser pointer cursor
- [ ] Drawing tools
- [ ] Slide bookmarks

---

## 📞 Support

### Common Issues

**Fullscreen not working?**
- Check browser permissions
- Try F11 key
- Use Chrome/Edge

**Text too small?**
- Check projector resolution
- Adjust browser zoom (Ctrl/Cmd +)
- Move closer to screen

**Animations laggy?**
- Close other applications
- Use hardware acceleration
- Update graphics drivers

**Mind map not showing?**
- Click "Show Mind Map" button
- Check browser width
- Refresh page

---

## 🎉 Summary

Presentation Mode provides:
- ✅ Professional, projector-ready design
- ✅ Large, readable fonts for 60+ audience
- ✅ Toggleable mind map for navigation
- ✅ Smooth animations and transitions
- ✅ Auto-advance capability
- ✅ Full keyboard control
- ✅ Progress tracking
- ✅ Stage-by-stage navigation

**Perfect for workshops, training sessions, and large audience presentations!** 🎓✨
