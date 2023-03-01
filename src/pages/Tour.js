import React, { useRef, useState } from 'react';
import { ReactPhotoSphereViewer, VisibleRangePlugin } from "react-photo-sphere-viewer";
import { panos } from '../assets/constants';
import Panorama from '../components/Panorama';
import styles from "../styles/Tour.module.css";

function Tour() {
  const psvRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={styles.tour}>
      {/* <img src={require("../assets/panos/day/A-21.jpg")} alt="A-21" /> */}
      <Panorama
        psvRef={psvRef}
        pano={panos["A-Block"]["L21"]["Day"]}
        panoData={panos["A-Block"]["L21"]["panoData"]}
        setIsLoaded={setIsLoaded}
      />
    </div>
  )
}

export default Tour