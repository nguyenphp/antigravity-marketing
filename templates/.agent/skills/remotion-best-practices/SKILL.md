---
name: remotion-best-practices
description: Comprehensive Remotion best practices covering animations, 3D, audio, video, captions, charts, transitions, and more.
allowed-tools: Read, RunCommand, Write
---

# Remotion Best Practices

> Official Remotion development best practices integrated into the Antigravity Marketing Kit. Use this skill whenever you are dealing with Remotion code to obtain domain-specific knowledge.

---

## How to use

Read individual rule files for detailed explanations and code examples:

| Rule | Description |
|------|-------------|
| [3d.md](rules/3d.md) | 3D content using Three.js and React Three Fiber |
| [animations.md](rules/animations.md) | Fundamental animation skills |
| [audio.md](rules/audio.md) | Audio/sound - importing, trimming, volume, speed, pitch |
| [calculate-metadata.md](rules/calculate-metadata.md) | Dynamically set duration, dimensions, and props |
| [charts.md](rules/charts.md) | Chart and data visualization patterns |
| [compositions.md](rules/compositions.md) | Compositions, stills, folders, default props |
| [display-captions.md](rules/display-captions.md) | TikTok-style captions with word highlighting |
| [fonts.md](rules/fonts.md) | Loading Google Fonts and local fonts |
| [gifs.md](rules/gifs.md) | Displaying GIFs synchronized with timeline |
| [images.md](rules/images.md) | Embedding images using `<Img>` component |
| [lottie.md](rules/lottie.md) | Embedding Lottie animations |
| [sequencing.md](rules/sequencing.md) | Sequence patterns - delay, trim, duration |
| [text-animations.md](rules/text-animations.md) | Typography and text animation patterns |
| [timing.md](rules/timing.md) | Interpolation curves - linear, easing, spring |
| [transitions.md](rules/transitions.md) | Fullscreen scene transitions |
| [videos.md](rules/videos.md) | Embedding videos - trimming, volume, speed, looping |

---

## Core Rules (CRITICAL)

### 1. All animations MUST be driven by `useCurrentFrame()`

```tsx
const frame = useCurrentFrame();
const { fps } = useVideoConfig();

const opacity = interpolate(frame, [0, 2 * fps], [0, 1], {
  extrapolateRight: 'clamp',
});
```

### 2. CSS animations/transitions are FORBIDDEN

- ❌ CSS `transition` or `animation`
- ❌ Tailwind animation classes
- ❌ Third-party animation libraries with internal timing
- ✅ Only `interpolate()` and `spring()` from Remotion

### 3. Always use Remotion media components

```tsx
// ✅ Correct
import { Img, staticFile } from "remotion";
import { Video, Audio } from "@remotion/media";

<Img src={staticFile("photo.png")} />
<Video src={staticFile("video.mp4")} />
<Audio src={staticFile("audio.mp3")} />

// ❌ Wrong
<img src="photo.png" />
<video src="video.mp4" />
```

### 4. Always premount Sequences

```tsx
const { fps } = useVideoConfig();

<Sequence from={60} durationInFrames={90} premountFor={1 * fps}>
  <MyScene />
</Sequence>
```

### 5. Use seconds × fps for timing

```tsx
const { fps } = useVideoConfig();

// ✅ Easy to understand: 2 seconds
const startFrame = 2 * fps;

// ❌ Hard to understand
const startFrame = 60;
```

---

## Quick Reference

### Spring Configurations

```tsx
const smooth = { damping: 200 };              // No bounce
const snappy = { damping: 20, stiffness: 200 }; // Minimal bounce
const bouncy = { damping: 8 };                // Playful
const heavy  = { damping: 15, stiffness: 80, mass: 2 }; // Slow, heavy
```

### Package Installation

```bash
# Core packages
npx remotion add @remotion/media        # Video & Audio
npx remotion add @remotion/transitions  # Scene transitions
npx remotion add @remotion/captions     # TikTok-style captions
npx remotion add @remotion/three        # 3D with Three.js
npx remotion add @remotion/lottie       # Lottie animations
npx remotion add @remotion/gif          # GIF support
npx remotion add @remotion/google-fonts # Google Fonts
```

---

## Credits

Based on [remotion-dev/skills](https://github.com/remotion-dev/skills) - official Remotion best practices.
Integrated into Antigravity Marketing Kit for AI-assisted video production.
