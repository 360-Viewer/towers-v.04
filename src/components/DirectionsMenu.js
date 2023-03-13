import React, { useContext } from 'react';
import { AppContext } from '../App';
import { panos } from '../assets/constants';
import styles from './DirectionsMenu.module.css';
import { loadPanorama } from './Panorama';

function DirectionsMenu({ psvRef, currentPanoProps, setCurrentPanoProps }) {
	const appContext = useContext(AppContext);
	const { setPanoChanged } = appContext;

	const handleClick = (e) => {};

	return <div className={styles.directionsMenu}></div>;
}

export default DirectionsMenu;
