import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_TEXT, FONT_FAMILY_MONO } from '../Constants';

export const Terminal = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const command = 'npx @nguyenphp/antigravity-marketing init';
  const charsShown = Math.floor(interpolate(frame, [10, 50], [0, command.length], {
    extrapolateRight: 'clamp',
  }));

  const text = command.slice(0, charsShown);
  const showCursor = Math.floor(frame / 10) % 2 === 0;

  return (
    <div
      style={{
        width: 1000,
        margin: '0 auto',
        backgroundColor: '#1a1a1e',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: `0 0 30px ${COLOR_PRIMARY}33`,
        border: `1px solid ${COLOR_PRIMARY}66`,
        fontFamily: FONT_FAMILY_MONO,
        fontSize: 32,
        color: COLOR_TEXT,
      }}
    >
      <div
        style={{
          height: 40,
          backgroundColor: '#2a2a2e',
          display: 'flex',
          alignItems: 'center',
          padding: '0 15px',
          gap: 8,
        }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27c93f' }} />
        <span style={{ marginLeft: 'auto', fontSize: 16, opacity: 0.5 }}>bash</span>
      </div>
      <div style={{ padding: 30 }}>
        <span style={{ color: COLOR_SECONDARY }}>$ </span>
        {text}
        {showCursor && <span style={{ backgroundColor: COLOR_PRIMARY, marginLeft: 2 }}>&nbsp;</span>}
      </div>
    </div>
  );
};
