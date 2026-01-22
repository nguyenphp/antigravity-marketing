import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill } from 'remotion';

const PrimaryColor = '#8B5CF6';
const SecondaryColor = '#EC4899';
const AccentColor = '#06B6D4';
const BgColor = '#030014';

export const AntigravityPromo: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames, width, height } = useVideoConfig();

    const logoOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
    const logoScale = interpolate(frame, [0, 20], [0.5, 1], { extrapolateRight: 'clamp' });

    const scene = Math.floor(frame / (3 * fps));

    return (
        <AbsoluteFill style={{ backgroundColor: BgColor, color: 'white', fontFamily: 'Inter, sans-serif' }}>
            {/* Background Blobs */}
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                filter: 'blur(100px)',
                opacity: 0.5
            }}>
                <div style={{
                    position: 'absolute',
                    width: 600,
                    height: 600,
                    borderRadius: '50%',
                    backgroundColor: PrimaryColor,
                    top: -100,
                    left: -100,
                    transform: `translate(${Math.sin(frame / 50) * 50}px, ${Math.cos(frame / 50) * 50}px)`
                }} />
                <div style={{
                    position: 'absolute',
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    backgroundColor: SecondaryColor,
                    bottom: -100,
                    right: -100,
                    transform: `translate(${Math.cos(frame / 60) * 60}px, ${Math.sin(frame / 60) * 60}px)`
                }} />
            </div>

            {/* Logo Section */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: logoOpacity,
                transform: `scale(${logoScale})`,
                zIndex: 10
            }}>
                {scene === 0 && (
                    <>
                        <div style={{ fontSize: 120 }}>🚀</div>
                        <h1 style={{
                            fontSize: 80,
                            fontWeight: 900,
                            textAlign: 'center',
                            background: `linear-gradient(135deg, #fff, ${PrimaryColor}, ${SecondaryColor})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            margin: 0
                        }}>ANTIGRAVITY</h1>
                        <p style={{ fontSize: 32, opacity: 0.8 }}>MARKETING KIT 2026</p>
                    </>
                )}

                {scene === 1 && (
                    <>
                        <h2 style={{ fontSize: 60, fontWeight: 800 }}>Đừng viết prompt từ đầu nữa...</h2>
                        <div style={{
                            backgroundColor: '#000',
                            padding: '20px 40px',
                            borderRadius: 16,
                            border: `1px solid ${PrimaryColor}`,
                            marginTop: 20
                        }}>
                            <code style={{ fontSize: 32, color: AccentColor, fontFamily: 'JetBrains Mono' }}>
                                $ npx @nguyenphp/antigravity-marketing init
                            </code>
                        </div>
                    </>
                )}

                {scene >= 2 && scene <= 4 && (
                    <div style={{ display: 'flex', gap: 40 }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 100, fontWeight: 900, color: PrimaryColor }}>25</div>
                            <div style={{ fontSize: 32, opacity: 0.7 }}>Marketing Skills</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 100, fontWeight: 900, color: SecondaryColor }}>4</div>
                            <div style={{ fontSize: 32, opacity: 0.7 }}>AI Agents</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 100, fontWeight: 900, color: AccentColor }}>4</div>
                            <div style={{ fontSize: 32, opacity: 0.7 }}>Workflows</div>
                        </div>
                    </div>
                )}

                {scene === 5 && (
                    <>
                        <h2 style={{ fontSize: 70, fontWeight: 900 }}>Sẵn sàng cất cánh?</h2>
                        <div style={{
                            marginTop: 40,
                            padding: '20px 60px',
                            background: `linear-gradient(to right, ${PrimaryColor}, ${SecondaryColor})`,
                            borderRadius: 100,
                            fontSize: 32,
                            fontWeight: 'bold'
                        }}>
                            View on GitHub 🚀
                        </div>
                    </>
                )}
            </div>
        </AbsoluteFill>
    );
};
