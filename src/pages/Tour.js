import React, { useRef, useState } from 'react';
import { home } from '../assets/constants';
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
				pano={home.pano}
				panoData={home.panoData}
				setIsLoaded={setIsLoaded}
			/>
			{isLoaded && <Menu psvRef={psvRef} />}
		</div>
	);
}

export default Tour;
