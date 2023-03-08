import React, { useRef, useState } from 'react';
import {
	ReactPhotoSphereViewer,
	VisibleRangePlugin,
} from 'react-photo-sphere-viewer';
import { home_pano, home_panoData, panos } from '../assets/constants';
import Panorama from '../components/Panorama';
import styles from '../styles/Tour.module.css';
import Menu from '../components/Menu';

function Tour() {
	const psvRef = useRef(null);
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div className={styles.tour}>
			<Panorama
				psvRef={psvRef}
				pano={home_pano}
				panoData={home_panoData}
				setIsLoaded={setIsLoaded}
			/>
			{isLoaded && <Menu psvRef={psvRef} />}
		</div>
	);
}

export default Tour;
