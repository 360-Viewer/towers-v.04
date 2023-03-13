import React, { useState, useEffect, useContext } from 'react';
import {
	ReactPhotoSphereViewer,
	VisibleRangePlugin,
} from 'react-photo-sphere-viewer';
import { AppContext } from '../App';
import styles from './Panorama.module.css';
import Controls from './Controls';

export function loadPanorama(
	psvRef,
	pano,
	panoData,
	setPanoChanged,
	direction
) {
	setPanoChanged(true);
	psvRef.current
		.setPanorama(pano, {
			showLoader: false,
			panoData: {
				fullWidth: 14366,
				fullHeight: 7183,
				croppedWidth: 9607,
				croppedHeight: 7183,
				croppedX: 2380,
				croppedY: 0,
				poseHeading: 0, // 0 to 360
				posePitch: 0, // -90 to 90
				poseRoll: 0, // -180 to 180
			},
		})
		.then(() => {
			setPanoChanged(false);
			if (!direction) {
				psvRef.current.animate({
					yaw: psvRef.current.getPosition().yaw + 0.1,
					pitch: psvRef.current.getPosition().pitch,
					speed: '1rpm',
				});
			}
			psvRef.current.setOption('defaultYaw', 0);
			const visibleRange = psvRef.current.getPlugin(VisibleRangePlugin);
			visibleRange.setRangesFromPanoData();
			visibleRange.setVerticalRange([0, 0]);
		});
}

function Panorama({ psvRef, pano, panoData, setIsLoaded }) {
	const { panoChanged } = useContext(AppContext);

	// 0 to 3.2 		c block, red dot
	// 5.42  to 0.62	c block, yellow dot
	// 3.88 to 6.4 		c block, green dot

	const handleClick = () => {
		const visibleRange = psvRef.current.getPlugin(VisibleRangePlugin);
		visibleRange.setRangesFromPanoData();
	};
	return (
		<>
			<div
				className={`${styles.container} ${panoChanged ? styles.blurred : ''}`}
			>
				<ReactPhotoSphereViewer
					ref={psvRef}
					loadingImg={null}
					loadingTxt={null}
					width={'100%'}
					height={'100%'}
					src={pano}
					defaultZoomLvl={10}
					navbar={false}
					onReady={() => {
						setIsLoaded(true);
						const visibleRange = psvRef.current.getPlugin(VisibleRangePlugin);
						visibleRange.setRangesFromPanoData();
						visibleRange.setVerticalRange([0, 0]);
					}}
					panoData={{
						fullWidth: 14366,
						fullHeight: 7183,
						croppedWidth: 9607,
						croppedHeight: 7183,
						croppedX: 2380,
						croppedY: 0,
						poseHeading: 0, // 0 to 360
						posePitch: 0, // -90 to 90
						poseRoll: 0, // -180 to 180
					}}
					plugins={[
						[
							VisibleRangePlugin,
							{
								usePanoData: true,
							},
						],
					]}
				/>
			</div>
			<Controls psvRef={psvRef} />
		</>
	);
}

export default Panorama;
