import React from 'react';
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame, useVideoConfig, Audio, spring } from 'remotion';
import { COLOR_BACKGROUND, COLOR_PRIMARY, FONT_FAMILY_INTER } from './Constants';
import { Terminal } from './components/Terminal';
import { SkillGrid } from './components/SkillGrid';

export const AntigravityPromo = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const bgOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const audioUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'; // Professional sample track

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLOR_BACKGROUND,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: FONT_FAMILY_INTER,
      }}
    >
      <Audio src={audioUrl} volume={0.5} />
      
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          width: 800,
          height: 800,
          background: `radial-gradient(circle, ${COLOR_PRIMARY}22 0%, transparent 70%)`,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: bgOpacity,
        }}
      />

      <Sequence from={0} durationInFrames={90}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', padding: '0 40px' }}>
            <h1 style={{ fontSize: width > height ? 100 : 80, marginBottom: 20 }}>
              Antigravity <span style={{ color: COLOR_PRIMARY }}>Marketing</span>
            </h1>
            <p style={{ fontSize: width > height ? 40 : 30, opacity: 0.8 }}>One command to supercharge your AI agents</p>
          </div>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={90} durationInFrames={120}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ transform: `scale(${width > height ? 1 : width / 1200})` }}>
            <Terminal />
          </div>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={210} durationInFrames={150}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: width > height ? 60 : 40,
            transform: `scale(${width > height ? 1 : width / 1500})`
          }}>
            <h2 style={{ fontSize: width > height ? 60 : 45, textAlign: 'center' }}>26 Specialized Marketing Skills</h2>
            <SkillGrid />
          </div>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={360} durationInFrames={90}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', padding: '0 40px' }}>
            <h1 style={{ fontSize: width > height ? 80 : 60, marginBottom: 20 }}>Start Marketing <span style={{ color: COLOR_PRIMARY }}>Today</span></h1>
            <code style={{ 
              fontSize: width > height ? 40 : 25, 
              backgroundColor: '#1a1a1e', 
              padding: '10px 20px', 
              borderRadius: 8,
              wordBreak: 'break-all'
            }}>
              npx @nguyenphp/antigravity-marketing init
            </code>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
