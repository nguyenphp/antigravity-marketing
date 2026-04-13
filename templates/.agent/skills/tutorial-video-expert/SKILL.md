---
name: tutorial-video-expert
description: Specialized in creating high-converting instructional videos and software tutorials using structured scripts and automated production.
allowed-tools: Read, RunCommand, Write
---

# Tutorial Video Expert - Mastering Instructional Design

> Build videos that don't just "show," but **teach**. This skill focuses on the educational psychology and technical automation required for world-class tutorials.

---

## 1. Instructional Frameworks (The "How-to" Science)

Follow the **PAS-T (Problem-Agitation-Solution-Tutorial)** framework for maximum retention:

| Phase | Purpose | Remotion Tip |
|-------|---------|--------------|
| **1. Hook/Problem** | Identify the specific pain point. | Fast-paced, high-contrast text. |
| **2. Solution** | Briefly show the intended result. | Final result montage (30fps+). |
| **3. Steps** | Break the process into 3-5 logical chunks. | Use `<Series>` for sequential steps. |
| **4. Deep Dive** | Specific details/pitfalls. | Zoom-in on UI elements (`interpolate`). |
| **5. CTA** | Next steps (Download, Subscribe, Try). | Glossy brand-colored buttons. |

---

## 2. Visual Visual Vocabulary (The Look)

Tutorials require specific visual cues to guide the viewer's eye:

| Element | Best Practice | Technical Detail |
|---------|---------------|------------------|
| **Focus Highlight** | Dim everything except the target area. | Overlay black with 50% opacity + `clipPath`. |
| **Callouts** | Rounded boxes with brand neon borders. | Glassmorphism (`backdropFilter`). |
| **Progress Bar** | Show stage progress at the bottom. | Map `frame` to width % in a full-width div. |
| **Keystroke Overlays** | Show shortcuts as they are mentioned. | Neon keys in the bottom-left corner. |

---

## 3. Remotion Implementation (The Code)

Use these specialized tutorial components:

### Screen Recording Wrapper
```tsx
const TutorialFrame = ({ children, title }) => (
  <div style={{ padding: 40, background: '#0a0a0c' }}>
    <div style={{ borderRadius: 20, overflow: 'hidden', border: '2px solid #48B69A' }}>
       {children}
    </div>
    <div className="label">{title}</div>
  </div>
);
```

### Dynamic Zoom Component
```tsx
const ZoomArea = ({ frame, start, duration, factor }) => {
  const scale = interpolate(frame, [start, start + duration], [1, factor], {
    extrapolateRight: 'clamp',
  });
  return <div style={{ transform: `scale(${scale})` }}>...</div>;
};
```

---

## 4. Voiceover & Scripting (The Voice)

- **Clarity > Speed**: Maintain a pace of 130-150 words per minute.
- **Micro-Pauses**: Insert 0.5s silence after a complex instruction.
- **Action Verbs**: Use "Click," "Navigate," "Select," "Type" - avoid "Maybe go here."

---

## 5. Usage Command

To generate a tutorial structure:
```bash
ag-marketing-kit tutorial "Set up a Stripe Payment Link" --platform="reels"
```

---

## Credits
- **Instructional Design**: Gagne's Nine Events of Instruction
- **Code Engine**: Official Remotion Best Practices
- **Aesthetics**: Antigravity Marketing Kit (Teal-Coral palette)
