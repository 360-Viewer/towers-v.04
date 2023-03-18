import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import { panos } from '../assets/constants';
import styles from './BDirectionMenu.module.css';
import { loadPanorama } from './Panorama';
import background from '../assets/backgrounds/b_block_bg.svg';
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
				<Tooltip title='South East' placement='bottom' arrow>
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
								setPanoChanged,
								true
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
								setPanoChanged,
								true
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
								setPanoChanged,
								true
							);
						}}
						className={[styles.button]}
						style={{
							backgroundColor: activeDirection === 'SOUTHWEST' && '#F2F2F2',
						}}
					></button>
				</Tooltip>
			</div>
			<div className={styles.midButtons}>
				<Tooltip title='East' placement='bottom' arrow>
					<button
						value='EAST'
						onClick={() => {
							setCurrentPanoProps({
								...currentPanoProps,
								direction: 'EAST',
							});
							loadPanorama(
								psvRef,
								panos[currentPanoProps.block][currentPanoProps.level]['EAST'][
									currentPanoProps.time
								],
								panos[currentPanoProps.block][currentPanoProps.level]['EAST'][
									'panoData'
								],
								setPanoChanged,
								true
							);
						}}
						className={[styles.button]}
						style={{
							backgroundColor: activeDirection === 'EAST' && '#F2F2F2',
						}}
					></button>
				</Tooltip>
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
								setPanoChanged,
								true
							);
						}}
						className={[styles.button]}
						style={{
							backgroundColor: activeDirection === '360' && '#F2F2F2',
						}}
					></button>
				</Tooltip>
				<Tooltip title='West' placement='bottom' arrow>
					<button
						value='WEST'
						onClick={() => {
							setCurrentPanoProps({
								...currentPanoProps,
								direction: 'WEST',
							});
							loadPanorama(
								psvRef,
								panos[currentPanoProps.block][currentPanoProps.level]['WEST'][
									currentPanoProps.time
								],
								panos[currentPanoProps.block][currentPanoProps.level]['WEST'][
									'panoData'
								],
								setPanoChanged,
								true
							);
						}}
						className={[styles.button]}
						style={{
							backgroundColor: activeDirection === 'WEST' && '#F2F2F2',
						}}
					></button>
				</Tooltip>
			</div>
			<div className={styles.bottomButtons}>
				<Tooltip title='North & North East' placement='bottom' arrow>
					<button
						value='NORTHEAST'
						onClick={() => {
							setCurrentPanoProps({
								...currentPanoProps,
								direction: 'NORTHEAST',
							});
							loadPanorama(
								psvRef,
								panos[currentPanoProps.block][currentPanoProps.level][
									'NORTHEAST'
								][currentPanoProps.time],
								panos[currentPanoProps.block][currentPanoProps.level][
									'NORTHEAST'
								]['panoData'],
								setPanoChanged,
								true
							);
						}}
						className={[styles.button]}
						style={{
							backgroundColor: activeDirection === 'NORTHEAST' && '#F2F2F2',
						}}
					></button>
				</Tooltip>
				<Tooltip title='North & North West' placement='bottom' arrow>
					<button
						value='NORTHWEST'
						onClick={() => {
							setCurrentPanoProps({
								...currentPanoProps,
								direction: 'NORTHWEST',
							});
							loadPanorama(
								psvRef,
								panos[currentPanoProps.block][currentPanoProps.level][
									'NORTHWEST'
								][currentPanoProps.time],
								panos[currentPanoProps.block][currentPanoProps.level][
									'NORTHWEST'
								]['panoData'],
								setPanoChanged,
								true
							);
						}}
						className={[styles.button]}
						style={{
							backgroundColor: activeDirection === 'NORTHWEST' && '#F2F2F2',
						}}
					></button>
				</Tooltip>
			</div>
			<img src={background} className={styles.background} alt='background' />
		</div>
	);
}

export default withOpacityTransition(DirectionsMenu);
// export default DirectionsMenu;
