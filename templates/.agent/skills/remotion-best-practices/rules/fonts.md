---
name: fonts
description: Loading Google Fonts and local fonts in Remotion
metadata:
  tags: fonts, google-fonts, typography, local-fonts
---

# Using fonts in Remotion

## Google Fonts

First, install the `@remotion/google-fonts` package:

```bash
npx remotion add @remotion/google-fonts # If project uses npm
bunx remotion add @remotion/google-fonts # If project uses bun
yarn remotion add @remotion/google-fonts # If project uses yarn
pnpm exec remotion add @remotion/google-fonts # If project uses pnpm
```

Import and load the font at the top of your composition:

```tsx
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont();

export const MyComposition = () => {
  return (
    <div style={{ fontFamily }}>
      Hello World
    </div>
  );
};
```

### Loading specific font weights

```tsx
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700"],
});
```

### Loading multiple fonts

```tsx
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadRoboto } from "@remotion/google-fonts/Roboto";

const { fontFamily: inter } = loadInter();
const { fontFamily: roboto } = loadRoboto();
```

## Local Fonts

Place font files in the `public/` folder and use CSS `@font-face`:

```tsx
import { staticFile } from "remotion";

const fontFace = `
@font-face {
  font-family: 'BeVietnamPro';
  src: url('${staticFile("fonts/BeVietnamPro-Regular.ttf")}') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'BeVietnamPro';
  src: url('${staticFile("fonts/BeVietnamPro-Bold.ttf")}') format('truetype');
  font-weight: 700;
  font-style: normal;
}
`;

export const MyComposition = () => {
  return (
    <>
      <style>{fontFace}</style>
      <div style={{ fontFamily: "BeVietnamPro" }}>
        Xin chào Việt Nam
      </div>
    </>
  );
};
```

## Vietnamese Font Recommendations

For Vietnamese text support, use these Google Fonts:

```tsx
// Option 1: Be Vietnam Pro (modern, professional)
import { loadFont } from "@remotion/google-fonts/BeVietnamPro";

// Option 2: Montserrat (geometric, clean)
import { loadFont } from "@remotion/google-fonts/Montserrat";

// Option 3: Inter (neutral, works well with Vietnamese diacritics)
import { loadFont } from "@remotion/google-fonts/Inter";
```

## Important notes

- Always use `loadFont()` before rendering - fonts must be loaded synchronously
- Google Fonts are automatically subsetted for performance
- For custom fonts, ensure all font weights and styles are loaded
