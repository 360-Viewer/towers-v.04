import React, { useContext } from 'react'
import { AppContext } from '../App';
import { panos } from '../assets/constants';
import styles from "./DirectionsMenu.module.css";
import { loadPanorama } from './Panorama';

function DirectionsMenu({ psvRef, currentPanoProps, setCurrentPanoProps }) {
  const appContext = useContext(AppContext);
  const { setPanoChanged } = appContext;

  const handleClick = (e) => {
    const newDirection = e.target.id;
    if (newDirection === currentPanoProps.direction) {
      // return;
    }
    console.log(psvRef.current.getPosition());
    setCurrentPanoProps({ ...currentPanoProps, direction: newDirection });
    loadPanorama(psvRef, panos[currentPanoProps.block][currentPanoProps.level][currentPanoProps.time], null, setPanoChanged, newDirection);
  }

  return (
    <div className={styles.directionsMenu}>
      <div className={styles.directionsMenuBackground}></div>
      <div className={styles.directionsHorizontalContainer}>
        <button
          id="s9"
          className={`${styles.directionsButton} ${styles.corner1} ${currentPanoProps.direction === 's9' ? styles.active : ""}`}
          onClick={handleClick}
        />
        <button
          id="ww"
          className={`${styles.directionsButton} ${currentPanoProps.direction === 'ww' ? styles.active : ""}`}
          onClick={handleClick}
        />
        <button
          id="s1"
          className={`${styles.directionsButton} ${styles.corner1} ${currentPanoProps.direction === 's1' ? styles.active : ""}`}
          onClick={handleClick}
        />
      </div>
      <div className={styles.directionsHorizontalContainer}>
        <button
          id="ss"
          className={`${styles.directionsButton} ${currentPanoProps.direction === 'ss' ? styles.active : ""}`}
          onClick={handleClick}
        />
        <button
          id="sc"
          className={`${styles.directionsButton} ${styles.center} ${currentPanoProps.direction === 'sc' ? styles.active : ""}`}
          onClick={handleClick}
        />
        <button
          id="nn"
          className={`${styles.directionsButton} ${currentPanoProps.direction === 'nn' ? styles.active : ""}`}
          onClick={handleClick}
        />
      </div>
      <div className={styles.directionsHorizontalContainer}>
        <button
          id="s6"
          className={`${styles.directionsButton} ${styles.corner2} ${currentPanoProps.direction === 's6' ? styles.active : ""}`}
          onClick={handleClick}
        />
        <button
          id="ee"
          className={`${styles.directionsButton} ${currentPanoProps.direction === 'ee' ? styles.active : ""}`}
        />
        <button
          id="s4"
          className={`${styles.directionsButton} ${styles.corner2} ${currentPanoProps.direction === 's4' ? styles.active : ""}`}
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default DirectionsMenu