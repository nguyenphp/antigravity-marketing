import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill } from 'remotion';

const PrimaryColor = '#8B5CF6';
const SecondaryColor = '#EC4899';
const AccentColor = '#06B6D4';
const BgDark = '#0F0F1A';
const BgDarker = '#0A0A12';

export const AntigravityPromo916: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps, width, height } = useVideoConfig();

    const scene = Math.floor(frame / (3.5 * fps));
    const sceneFrame = frame % (3.5 * fps);

    const logoOpacity = interpolate(frame, [0, 20], [0, 1]);
    const logoScale = interpolate(frame, [0, 20], [0.8, 1]);

    return (
        <AbsoluteFill style={{ 
            backgroundColor: BgDark, 
            color: '#F8FAFC', 
            fontFamily: 'Inter, sans-serif',
            overflow: 'hidden'
        }}>
            {/* Background Blobs (Mobile Optimized) */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: `
                    radial-gradient(ellipse at 30% 30%, rgba(139, 92, 246, 0.25) 0%, transparent 60%),
                    radial-gradient(ellipse at 70% 70%, rgba(236, 72, 153, 0.2) 0%, transparent 60%),
                    radial-gradient(ellipse at 50% 10%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)
                `,
                filter: 'blur(80px)',
            }} />

            {/* Content Container */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10,
                padding: '0 40px',
                textAlign: 'center'
            }}>
                
                {scene === 0 && (
                    <div style={{ opacity: logoOpacity, transform: `scale(${logoScale})` }}>
                        <div style={{ fontSize: 180, marginBottom: 40 }}>🚀</div>
                        <h1 style={{
                            fontSize: 100,
                            lineHeight: 1.1,
                            fontWeight: 900,
                            margin: 0,
                            background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #06B6D4 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '-2px'
                        }}>ANTIGRAVITY</h1>
                        <p style={{ fontSize: 40, opacity: 0.6, fontWeight: 500, letterSpacing: '4px', marginTop: 20 }}>MARKETING KIT 2026</p>
                    </div>
                )}

                {scene === 1 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, width: '100%' }}>
                        {[
                            { val: '25', label: 'Marketing Skills', color: PrimaryColor },
                            { val: '4', label: 'AI Agents', color: SecondaryColor },
                            { val: '4', label: 'Workflows', color: AccentColor }
                        ].map((item, i) => (
                            <div key={i} style={{
                                background: 'rgba(26, 26, 46, 0.7)',
                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                backdropFilter: 'blur(20px)',
                                padding: '40px 20px',
                                borderRadius: 32,
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}>
                                <div style={{ fontSize: 120, fontWeight: 900, color: item.color, lineHeight: 1 }}>{item.val}</div>
                                <div style={{ fontSize: 32, opacity: 0.7, fontWeight: 600 }}>{item.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                {scene === 2 && (
                    <div style={{ width: '100%' }}>
                        <h2 style={{ fontSize: 80, fontWeight: 900, marginBottom: 30, lineHeight: 1.1 }}>Video Automation</h2>
                        <div style={{
                            fontSize: 40,
                            fontWeight: 700,
                            color: AccentColor,
                            marginBottom: 50,
                            padding: '15px 25px',
                            background: 'rgba(6, 182, 212, 0.1)',
                            borderRadius: 20,
                            display: 'inline-block'
                        }}>
                            ✨ Remotion Enabled
                        </div>
                        <p style={{ fontSize: 36, opacity: 0.8, lineHeight: 1.6 }}>Inherits from powerful Remotion Skills for automated ads production.</p>
                    </div>
                )}

                {scene === 3 && (
                    <div style={{ width: '100%' }}>
                        <h2 style={{ fontSize: 70, fontWeight: 800, marginBottom: 50 }}>Cài đặt 1 lệnh</h2>
                        <div style={{
                            backgroundColor: BgDarker,
                            padding: '40px 30px',
                            borderRadius: 24,
                            border: `1px solid ${PrimaryColor}`,
                            boxShadow: `0 0 60px rgba(139, 92, 246, 0.4)`,
                        }}>
                            <code style={{ fontSize: 32, color: AccentColor, fontFamily: 'JetBrains Mono', wordBreak: 'break-all' }}>
                                <span style={{ color: PrimaryColor }}>$</span> npx @nguyenphp/antigravity-marketing init
                            </code>
                        </div>
                    </div>
                )}

                {scene >= 4 && (
                    <div style={{ width: '100%', opacity: logoOpacity }}>
                        <h2 style={{ fontSize: 100, fontWeight: 900, marginBottom: 60, lineHeight: 1.1 }}>Ready to Launch?</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                            <div style={{
                                padding: '30px 48px',
                                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                                borderRadius: 20,
                                fontSize: 48,
                                fontWeight: 800,
                                boxShadow: '0 10px 40px rgba(139, 92, 246, 0.6)'
                            }}>
                                Get Started 🚀
                            </div>
                            <div style={{
                                padding: '30px 48px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 20,
                                fontSize: 40,
                                fontWeight: 700
                            }}>
                                GitHub
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Vertically Aligned Footer */}
            <div style={{
                position: 'absolute',
                bottom: 80,
                width: '100%',
                textAlign: 'center',
                fontSize: 24,
                opacity: 0.3,
                fontWeight: 700,
                letterSpacing: 4
            }}>
                ANTIGRAVITY.IO
            </div>
        </AbsoluteFill>
    );
};
