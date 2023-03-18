import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import { panos } from '../assets/constants';
import styles from './ACDirectionMenu.module.css';
import { loadPanorama } from './Panorama';
import background from '../assets/backgrounds/a_block_bg.svg';
import { Tooltip } from '@mui/material';
import { withOpacityTransition } from './Menu';

function DirectionsMenu({ psvRef, currentPanoProps, setCurrentPanoProps }) {
	const appContext = useContext(AppContext);
	const { setPanoChanged } = appContext;
	const [activeDirection, setActiveDirection] = useState('');

	useEffect(() => {
		setActiveDirection(currentPanoProps.direction);
	}, [currentPanoProps.direction]);

	return (
		<div className={styles.directionsMenu}>
			<div className={styles.upperButtons}>
				<Tooltip title='South East & East' placement='bottom' arrow>
					<button
						value='SOUTHEAST'
						onClick={() => {
							setCurrentPanoProps({
								...currentPanoProps,
								direction: 'SOUTHEAST',
							});
							loadPanorama(
								psvRef,
								panos[currentPanoProps.block][currentPanoProps.level][
									'SOUTHEAST'
								][currentPanoProps.time],
								panos[currentPanoProps.block][currentPanoProps.level][
									'SOUTHEAST'
								]['panoData'],
								setPanoChanged
							);
						}}
						className={[styles.button]}
						style={{
							backgroundColor: activeDirection === 'SOUTHEAST' && '#F2F2F2',
						}}
					></button>
				</Tooltip>
				<Tooltip title='South' placement='bottom' arrow>
					<button
						value='SOUTH'
						onClick={() => {
							setCurrentPanoProps({
								...currentPanoProps,
								direction: 'SOUTH',
							});
							loadPanorama(
								psvRef,
								panos[currentPanoProps.block][currentPanoProps.level]['SOUTH'][
									currentPanoProps.time
								],
								panos[currentPanoProps.block][currentPanoProps.level]['SOUTH'][
									'panoData'
								],
								setPanoChanged
							);
						}}
						className={[styles.button]}
						style={{
							backgroundColor: activeDirection === 'SOUTH' && '#F2F2F2',
						}}
					></button>
				</Tooltip>
				<Tooltip title='South West' placement='bottom' arrow>
					<button
						value='SOUTHWEST'
						onClick={() => {
							setCurrentPanoProps({
								...currentPanoProps,
								direction: 'SOUTHWEST',
							});
							loadPanorama(
								psvRef,
								panos[currentPanoProps.block][currentPanoProps.level][
									'SOUTHWEST'
								][currentPanoProps.time],
								panos[currentPanoProps.block][currentPanoProps.level][
									'SOUTHWEST'
								]['panoData'],
								setPanoChanged
							);
						}}
						className={[styles.button]}
						style={{
							backgroundColor: activeDirection === 'SOUTHWEST' && '#F2F2F2',
						}}
					></button>
				</Tooltip>
			</div>
			<Tooltip title='360' placement='bottom' arrow>
				<button
					value='360'
					onClick={() => {
						setCurrentPanoProps({
							...currentPanoProps,
							direction: '360',
						});
						loadPanorama(
							psvRef,
							panos[currentPanoProps.block][currentPanoProps.level]['360'][
								currentPanoProps.time
							],
							panos[currentPanoProps.block][currentPanoProps.level]['360'][
								'panoData'
							],
							setPanoChanged
						);
					}}
					className={[styles.button]}
					style={{
						backgroundColor: activeDirection === '360' && '#F2F2F2',
					}}
				></button>
			</Tooltip>
			<img src={background} className={styles.background} alt='background' />
		</div>
	);
}

export default withOpacityTransition(DirectionsMenu);
// export default DirectionsMenu;
