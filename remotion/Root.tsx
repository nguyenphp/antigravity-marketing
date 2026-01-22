import { Composition } from 'remotion';
import { JupViecVideo } from './JupViecVideo';
import { JupViecTetVideo } from './JupViecTetVideo';
import { JupViecTetVideo916 } from './JupViecTetVideo916';
import { AntigravityPromo } from './AntigravityPromo';
import { AntigravityPromo916 } from './AntigravityPromo916';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="JupViecTetAd"
				component={JupViecTetVideo}
				durationInFrames={600} // 20 seconds * 30 fps
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="JupViecTetAd916"
				component={JupViecTetVideo916}
				durationInFrames={20 * 30}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="AntigravityPromo"
				component={AntigravityPromo}
				durationInFrames={20 * 30}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="AntigravityPromo916"
				component={AntigravityPromo916}
				durationInFrames={20 * 30}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="JupViecTikTokAd"
				component={JupViecVideo}
				durationInFrames={450} // 15 seconds * 30 fps
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
