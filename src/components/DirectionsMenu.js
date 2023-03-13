import React, { useContext } from 'react';
import { AppContext } from '../App';
import { panos } from '../assets/constants';
import styles from './DirectionsMenu.module.css';
import { loadPanorama } from './Panorama';

function DirectionsMenu({ psvRef, currentPanoProps, setCurrentPanoProps }) {
	const appContext = useContext(AppContext);
	const { setPanoChanged } = appContext;

	const handleClick = (e) => {};

	// 0 to 3.2 		c block, red dot
	// 5.42  to 0.62	c block, yellow dot
	// 3.88 to 6.4 		c block, green dot

	return <div className={styles.directionsMenu}></div>;
}

export default DirectionsMenu;
