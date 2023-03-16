import React, { useContext, useEffect, useState } from 'react';
import { home, home_pano_props, panos } from '../assets/constants';
import styles from './Menu.module.css';
import moon from '../assets/icons/moon.svg';
import sun from '../assets/icons/sun.svg';
import { loadPanorama } from './Panorama';
import { AppContext } from '../App';
import ADirectionMenu from './ADirectionMenu';
import BDirectionMenu from './BDirectionMenu';
import CDirectionMenu from './CDirectionMenu';

export function withOpacityTransition(Component) {
	return function ComponentWithOpacityTransition(props) {
		const [hovered, setHovered] = useState(true);
		useEffect(() => {
			setTimeout(() => {
				setHovered(false);
			}, 2000);
		}, []);

		return (
			<div
				onMouseEnter={() => {
					setHovered(true);
				}}
				onMouseLeave={() => {
					setTimeout(() => {
						setHovered(false);
					}, 2000);
				}}
				style={{
					position: 'absolute',
					zIndex: 100,
					opacity: hovered ? 1 : 0.3,
					transition: hovered ? 'opacity 0.5s' : 'opacity 0.5s 2s',
				}}
			>
				<Component {...props} />
			</div>
		);
	};
}

export const TimeItem = ({ psvRef, currentPanoProps, setCurrentPanoProps }) => {
	const appContext = useContext(AppContext);
	const { setPanoChanged } = appContext;

	function handleClick() {
		const newTime = currentPanoProps.time === 'Day' ? 'Night' : 'Day';
		setCurrentPanoProps({ ...currentPanoProps, time: newTime });
		loadPanorama(
			psvRef,
			panos[currentPanoProps.block][currentPanoProps.level][
				currentPanoProps.direction
			][newTime],
			panos[currentPanoProps.block][currentPanoProps.level][
				currentPanoProps.direction
			]['panoData'],
			setPanoChanged
		);
	}
	return (
		<button className={styles.viewButton} onClick={handleClick}>
			<img
				src={currentPanoProps.time === 'Day' ? moon : sun}
				className={styles.icon}
				alt='time'
			/>
		</button>
	);
};

const LevelItem = ({
	psvRef,
	level,
	currentPanoProps,
	setCurrentPanoProps,
}) => {
	const [isActive, setIsActive] = useState(false);
	const appContext = useContext(AppContext);
	const { setPanoChanged } = appContext;

	useEffect(() => {
		setIsActive(level === currentPanoProps.level);
	}, [level, currentPanoProps.level]);

	function handleClick() {
		console.log(currentPanoProps);
		setCurrentPanoProps({ ...currentPanoProps, level: level });
		loadPanorama(
			psvRef,
			panos[currentPanoProps.block][level][currentPanoProps.direction][
				currentPanoProps.time
			],
			panos[currentPanoProps.block][level][currentPanoProps.direction][
				'panoData'
			],
			setPanoChanged
		);
	}

	return (
		<button
			className={`${styles.verticalContainerItem} ${
				isActive ? styles.verticalContainerItemActive : ''
			}`}
			onClick={handleClick}
		>
			<p className={`${styles.text} ${isActive ? styles.textActive : ''}`}>
				{level}
			</p>
		</button>
	);
};

const BlockItem = ({
	psvRef,
	block,
	currentPanoProps,
	setCurrentPanoProps,
}) => {
	const [isActive, setIsActive] = useState(false);
	const appContext = useContext(AppContext);
	const { setPanoChanged } = appContext;

	useEffect(() => {
		setIsActive(block === currentPanoProps.block);
	}, [block, currentPanoProps.block]);

	function handleClick() {
		setCurrentPanoProps({
			...currentPanoProps,
			block: block,
			level: Object.keys(panos[block])[0],
			direction: Object.keys(panos[block][Object.keys(panos[block])[0]])[0],
		});
		loadPanorama(
			psvRef,
			panos[block][Object.keys(panos[block])[0]][
				Object.keys(panos[block][Object.keys(panos[block])[0]])[0]
			][currentPanoProps.time],
			panos[block][Object.keys(panos[block])[0]]['panoData'],
			setPanoChanged
		);
	}

	return (
		<button
			className={`${styles.verticalContainerItem} ${
				isActive ? styles.verticalContainerItemActive : ''
			}`}
			onClick={handleClick}
		>
			<p className={`${styles.text} ${isActive ? styles.textActive : ''}`}>
				{block.replace(/-/g, ' ')}
			</p>
		</button>
	);
};

function Menu({ psvRef }) {
	const [currentPanoProps, setCurrentPanoProps] = useState(home.props);
	const [levelsHovered, setLevelsHovered] = useState(true);
	const [blockHovered, setBlockHovered] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLevelsHovered(false);
			setBlockHovered(false);
		}, 2000);
	}, []);

	return (
		<>
			<div
				className={styles.verticalContainer}
				style={{
					left: '12px',
					top: '12px',
					opacity: levelsHovered ? 1 : 0.3,
					transition: levelsHovered ? 'opacity 0.5s' : 'opacity 0.5s 2s',
				}}
				onMouseEnter={() => {
					setLevelsHovered(true);
				}}
				onMouseLeave={() => {
					setTimeout(() => {
						setLevelsHovered(false);
					}, 2000);
				}}
			>
				<div
					className={styles.verticalContainerItem}
					style={{ marginBottom: '5px' }}
				>
					<TimeItem
						psvRef={psvRef}
						currentPanoProps={currentPanoProps}
						setCurrentPanoProps={setCurrentPanoProps}
					/>
				</div>
				{Object.keys(panos[currentPanoProps.block]).map((level) => {
					return (
						<LevelItem
							key={level}
							psvRef={psvRef}
							level={level}
							currentPanoProps={currentPanoProps}
							setCurrentPanoProps={setCurrentPanoProps}
						/>
					);
				})}
			</div>
			{/* {currentPanoProps.block === 'A-Block' && (
				<ADirectionMenu
					psvRef={psvRef}
					currentPanoProps={currentPanoProps}
					setCurrentPanoProps={setCurrentPanoProps}
				/>
			)}
			{currentPanoProps.block === 'B-Block' && (
				<BDirectionMenu
					psvRef={psvRef}
					currentPanoProps={currentPanoProps}
					setCurrentPanoProps={setCurrentPanoProps}
				/>
			)}
			{currentPanoProps.block === 'C-Block' && (
				<CDirectionMenu
					psvRef={psvRef}
					currentPanoProps={currentPanoProps}
					setCurrentPanoProps={setCurrentPanoProps}
				/>
			)} */}
			<BDirectionMenu
				psvRef={psvRef}
				currentPanoProps={currentPanoProps}
				setCurrentPanoProps={setCurrentPanoProps}
			/>
			<div
				className={styles.verticalContainer}
				style={{
					right: '12px',
					top: '12px',
					opacity: blockHovered ? 1 : 0.3,
					transition: blockHovered ? 'opacity 0.5s' : 'opacity 0.5s 2s',
				}}
				onMouseEnter={() => setBlockHovered(true)}
				onMouseLeave={() => {
					setTimeout(() => {
						setBlockHovered(false);
					}, 2000);
				}}
			>
				{Object.keys(panos).map((block) => {
					return (
						<BlockItem
							key={block}
							psvRef={psvRef}
							block={block}
							currentPanoProps={currentPanoProps}
							setCurrentPanoProps={setCurrentPanoProps}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Menu;
