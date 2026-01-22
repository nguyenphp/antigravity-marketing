---
name: text-animations
description: Typography and text animation patterns for Remotion.
metadata:
  tags: typography, text, typewriter, highlighter
---

## Text animations

Based on `useCurrentFrame()`, reduce the string character by character to create a typewriter effect.

## Typewriter Effect

Always use string slicing for typewriter effects. Never use per-character opacity.

```tsx
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";

export const Typewriter = ({ text }: { text: string }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Characters per second
  const CHARS_PER_SECOND = 20;
  const charsToShow = Math.floor((frame / fps) * CHARS_PER_SECOND);

  const displayText = text.slice(0, charsToShow);

  return (
    <div style={{ fontFamily: "monospace", fontSize: 48 }}>
      {displayText}
      <span style={{ opacity: frame % 30 < 15 ? 1 : 0 }}>|</span>
    </div>
  );
};
```

### With cursor blink

```tsx
const cursorOpacity = Math.sin(frame * 0.3) > 0 ? 1 : 0;

<span style={{ opacity: cursorOpacity }}>|</span>
```

## Word-by-word reveal

```tsx
const words = text.split(" ");
const frame = useCurrentFrame();
const { fps } = useVideoConfig();

const WORDS_PER_SECOND = 3;
const wordsToShow = Math.floor((frame / fps) * WORDS_PER_SECOND);

const displayWords = words.slice(0, wordsToShow).join(" ");
```

## Word Highlighting

Animate a highlighter effect on specific words:

```tsx
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

export const HighlightedWord = ({ text }: { text: string }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const highlightWidth = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const width = interpolate(highlightWidth, [0, 1], [0, 100]);

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: `${width}%`,
          height: "30%",
          backgroundColor: "#ffff00",
          zIndex: -1,
        }}
      />
      {text}
    </span>
  );
};
```

## Staggered text entrance

```tsx
const words = text.split(" ");

return (
  <div>
    {words.map((word, i) => {
      const delay = i * 5; // 5 frames delay per word
      const opacity = interpolate(frame - delay, [0, 10], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      const y = interpolate(frame - delay, [0, 10], [20, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

      return (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity,
            transform: `translateY(${y}px)`,
            marginRight: 8,
          }}
        >
          {word}
        </span>
      );
    })}
  </div>
);
```
