import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { links } from '../assets/constants';
import Panorama, { loadPanorama } from '../components/Panorama';
import styles from '../styles/Tour.module.css';
import moon from '../assets/icons/moon.svg';
import sun from '../assets/icons/sun.svg';
import { AppContext } from '../App';

function TourDetailed() {
	const { key } = useParams();
	const psvRef = useRef(null);
	const navigate = useNavigate();
	const [_, setIsLoaded] = useState(false);
	const [time, setTime] = useState('Day');
	const { setPanoChanged } = useContext(AppContext);

	useEffect(() => {
		if (!links[key]) {
			navigate('/404');
		}
	}, [key, navigate]);

	const handleClick = () => {
		const newTime = time === 'Day' ? 'Night' : 'Day';
		loadPanorama(
			psvRef,
			newTime === 'Day' ? links[key].Day : links[key].Night,
			links[key].panoData,
			setPanoChanged
		);
		setTime(newTime);
	};

	return (
		<div className={styles.tour}>
			{links[key] && (
				<>
					<div className={styles.viewButtonContainer}>
						<button className={styles.viewButton} onClick={handleClick}>
							<img
								src={time === 'Day' ? moon : sun}
								className={styles.icon}
								alt='time'
							/>
						</button>
					</div>
					<Panorama
						psvRef={psvRef}
						pano={links[key].Day}
						panoData={links[key].panoData}
						setIsLoaded={setIsLoaded}
					/>
				</>
			)}
		</div>
	);
}

export default TourDetailed;
