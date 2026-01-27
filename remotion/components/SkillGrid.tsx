import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLOR_PRIMARY, COLOR_GLASS, FONT_FAMILY_INTER } from '../Constants';

const SKILLS = [
  { icon: '✍️', name: 'content-marketing' },
  { icon: '🎨', name: 'branding-expert' },
  { icon: '🎬', name: 'video-marketing' },
  { icon: '🎞️', name: 'video-automation' },
  { icon: '🚀', name: 'growth-hacking' },
  { icon: '🔍', name: 'seo-fundamentals' },
  { icon: '📱', name: 'social-media-expert' },
  { icon: '🎯', name: 'conversion-optimization' },
];

export const SkillGrid = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { width: videoWidth } = useVideoConfig();
  const isVertical = videoWidth < 1200;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${isVertical ? 2 : 4}, 1fr)`,
        gap: isVertical ? 20 : 30,
        width: '100%',
        maxWidth: isVertical ? 800 : 1400,
        margin: '0 auto',
        fontFamily: FONT_FAMILY_INTER,
      }}
    >
      {SKILLS.map((skill, i) => {
        const delay = i * 3;
        const scale = spring({
          frame: frame - delay,
          fps,
          config: {
            damping: 12,
          },
        });

        const opacity = interpolate(frame - delay, [0, 5], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });

        return (
          <div
            key={skill.name}
            style={{
              backgroundColor: COLOR_GLASS,
              backdropFilter: 'blur(10px)',
              padding: '24px',
              borderRadius: 16,
              border: `1px solid ${COLOR_PRIMARY}33`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              transform: `scale(${scale})`,
              opacity,
              color: '#fff',
            }}
          >
            <div style={{ fontSize: 48 }}>{skill.icon}</div>
            <div style={{ fontSize: 20, fontWeight: 600 }}>{skill.name}</div>
          </div>
        );
      })}
    </div>
  );
};
