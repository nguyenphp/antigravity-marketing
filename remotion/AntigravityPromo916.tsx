import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill } from 'remotion';

const PrimaryColor = '#8B5CF6';
const SecondaryColor = '#EC4899';
const AccentColor = '#06B6D4';
const BgColor = '#030014';

export const AntigravityPromo916: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps, width, height } = useVideoConfig();

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
                filter: 'blur(80px)',
                opacity: 0.5
            }}>
                <div style={{
                    position: 'absolute',
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    backgroundColor: PrimaryColor,
                    top: '20%',
                    left: '-20%',
                    transform: `translate(${Math.sin(frame / 40) * 30}px, ${Math.cos(frame / 40) * 30}px)`
                }} />
                <div style={{
                    position: 'absolute',
                    width: 350,
                    height: 350,
                    borderRadius: '50%',
                    backgroundColor: SecondaryColor,
                    bottom: '20%',
                    right: '-20%',
                    transform: `translate(${Math.cos(frame / 50) * 40}px, ${Math.sin(frame / 50) * 40}px)`
                }} />
            </div>

            {/* Content Container */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 40px',
                opacity: logoOpacity,
                transform: `scale(${logoScale})`,
                zIndex: 10,
                textAlign: 'center'
            }}>
                {scene === 0 && (
                    <>
                        <div style={{ fontSize: 150 }}>🚀</div>
                        <h1 style={{
                            fontSize: 80,
                            lineHeight: 1.1,
                            fontWeight: 900,
                            background: `linear-gradient(135deg, #fff, ${PrimaryColor}, ${SecondaryColor})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            margin: '20px 0'
                        }}>ANTIGRAVITY</h1>
                        <p style={{ fontSize: 40, opacity: 0.8 }}>MARKETING KIT 2026</p>
                    </>
                )}

                {scene === 1 && (
                    <>
                        <h2 style={{ fontSize: 70, fontWeight: 800, marginBottom: 40 }}>Đừng viết prompt từ đầu nữa...</h2>
                        <div style={{
                            backgroundColor: '#000',
                            padding: '30px',
                            borderRadius: 24,
                            border: `1px solid ${PrimaryColor}`,
                            width: '100%'
                        }}>
                            <code style={{ fontSize: 32, color: AccentColor, fontFamily: 'JetBrains Mono', wordBreak: 'break-all' }}>
                                $ npx @nguyenphp/antigravity-marketing init
                            </code>
                        </div>
                    </>
                )}

                {scene >= 2 && scene <= 4 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 120, fontWeight: 900, color: PrimaryColor }}>25</div>
                            <div style={{ fontSize: 40, opacity: 0.7 }}>Marketing Skills</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 120, fontWeight: 900, color: SecondaryColor }}>4</div>
                            <div style={{ fontSize: 40, opacity: 0.7 }}>AI Agents</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 120, fontWeight: 900, color: AccentColor }}>4</div>
                            <div style={{ fontSize: 40, opacity: 0.7 }}>Workflows</div>
                        </div>
                    </div>
                )}

                {scene === 5 && (
                    <>
                        <h2 style={{ fontSize: 80, fontWeight: 900 }}>Sẵn sàng cất cánh?</h2>
                        <div style={{
                            marginTop: 60,
                            padding: '30px 60px',
                            background: `linear-gradient(to right, ${PrimaryColor}, ${SecondaryColor})`,
                            borderRadius: 100,
                            fontSize: 40,
                            fontWeight: 'bold',
                            width: '100%'
                        }}>
                            Get Started 🚀
                        </div>
                    </>
                )}
            </div>
        </AbsoluteFill>
    );
};
