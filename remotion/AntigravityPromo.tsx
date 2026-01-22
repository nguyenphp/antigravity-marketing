import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill, Spring } from 'remotion';

const PrimaryColor = '#8B5CF6';
const SecondaryColor = '#EC4899';
const AccentColor = '#06B6D4';
const BgDark = '#0F0F1A';
const BgDarker = '#0A0A12';

export const AntigravityPromo: React.FC = () => {
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
            {/* Background Blobs (Matched to Portal) */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: `
                    radial-gradient(ellipse at 20% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
                    radial-gradient(ellipse at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
                    radial-gradient(ellipse at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
                `,
                filter: 'blur(120px)',
            }} />

            {/* Content Container */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10,
                padding: '0 60px',
                textAlign: 'center'
            }}>
                
                {scene === 0 && (
                    <div style={{ opacity: logoOpacity, transform: `scale(${logoScale})` }}>
                        <div style={{ fontSize: 130, marginBottom: 20 }}>🚀</div>
                        <h1 style={{
                            fontSize: 100,
                            fontWeight: 900,
                            margin: 0,
                            background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #06B6D4 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '-2px'
                        }}>ANTIGRAVITY</h1>
                        <p style={{ fontSize: 32, opacity: 0.6, fontWeight: 500, letterSpacing: '4px' }}>MARKETING KIT 2026</p>
                    </div>
                )}

                {scene === 1 && (
                    <div style={{ display: 'flex', gap: 60 }}>
                        {[
                            { val: '25', label: 'Marketing Skills', color: PrimaryColor },
                            { val: '4', label: 'AI Agents', color: SecondaryColor },
                            { val: '4', label: 'Workflows', color: AccentColor }
                        ].map((item, i) => (
                            <div key={i} style={{
                                background: 'rgba(26, 26, 46, 0.6)',
                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                backdropFilter: 'blur(20px)',
                                padding: '40px 60px',
                                borderRadius: 32,
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}>
                                <div style={{ fontSize: 120, fontWeight: 900, color: item.color }}>{item.val}</div>
                                <div style={{ fontSize: 24, opacity: 0.7, fontWeight: 600 }}>{item.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                {scene === 2 && (
                    <div style={{ maxWidth: 800 }}>
                        <h2 style={{ fontSize: 80, fontWeight: 900, marginBottom: 20 }}>Video Automation</h2>
                        <div style={{
                            fontSize: 40,
                            fontWeight: 600,
                            color: AccentColor,
                            marginBottom: 40,
                            padding: '10px 30px',
                            background: 'rgba(6, 182, 212, 0.1)',
                            borderRadius: 16,
                            display: 'inline-block'
                        }}>
                            ✨ Thừa hưởng sức mạnh từ Remotion Skills
                        </div>
                        <p style={{ fontSize: 28, opacity: 0.8 }}>Tự động hóa sản xuất video quảng cáo ngay từ landing page của bạn.</p>
                    </div>
                )}

                {scene === 3 && (
                    <div style={{ width: '100%', maxWidth: 900 }}>
                        <h2 style={{ fontSize: 60, fontWeight: 800, marginBottom: 40 }}>Bắt đầu chỉ với 1 lệnh</h2>
                        <div style={{
                            backgroundColor: BgDarker,
                            padding: '30px 50px',
                            borderRadius: 24,
                            border: `1px solid ${PrimaryColor}`,
                            boxShadow: `0 0 60px rgba(139, 92, 246, 0.3)`,
                            textAlign: 'left'
                        }}>
                            <code style={{ fontSize: 32, color: AccentColor, fontFamily: 'JetBrains Mono' }}>
                                <span style={{ color: PrimaryColor }}>$</span> npx @nguyenphp/antigravity-marketing init
                            </code>
                        </div>
                    </div>
                )}

                {scene >= 4 && (
                    <div style={{ opacity: logoOpacity }}>
                        <h2 style={{ fontSize: 80, fontWeight: 900, marginBottom: 40 }}>Nâng cấp Marketing ngay!</h2>
                        <div style={{ display: 'flex', gap: 30, justifyContent: 'center' }}>
                            <div style={{
                                padding: '24px 48px',
                                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                                borderRadius: 16,
                                fontSize: 32,
                                fontWeight: 800,
                                boxShadow: '0 8px 30px rgba(139, 92, 246, 0.5)'
                            }}>
                                Get Started
                            </div>
                            <div style={{
                                padding: '24px 48px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 16,
                                fontSize: 32,
                                fontWeight: 700
                            }}>
                                View on GitHub
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Tag */}
            <div style={{
                position: 'absolute',
                bottom: 40,
                width: '100%',
                textAlign: 'center',
                fontSize: 24,
                opacity: 0.4,
                fontWeight: 600,
                letterSpacing: 2
            }}>
                POWERED BY REMOTION. ANTIGRAVITY.IO
            </div>
        </AbsoluteFill>
    );
};
