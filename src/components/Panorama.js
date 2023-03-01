import React, { useState, useEffect, useContext } from "react";
import { ReactPhotoSphereViewer, VisibleRangePlugin } from "react-photo-sphere-viewer";
import { AppContext } from "../App";
import styles from "./Panorama.module.css"
import Controls from "./Controls";

export function loadPanorama(psvRef, pano, panoData, setPanoChanged) {
  setPanoChanged(true);
  psvRef.current.setPanorama(pano, {
    showLoader: false,
    panoData: panoData,
  }).then(() => {
    setPanoChanged(false);
    psvRef.current.animate({
      yaw: psvRef.current.getPosition().yaw + 0.1,
      pitch: psvRef.current.getPosition().pitch,
      speed: '0.5rpm'
    })
  });
}

function Panorama({ psvRef, pano, panoData, setIsLoaded }) {
  const appContext = useContext(AppContext);
  const { panoChanged } = appContext;

  return (
    <>
      <div className={`${styles.container} ${panoChanged ? styles.blurred : ""}`}>
        <ReactPhotoSphereViewer
          ref={psvRef}
          loadingImg={null}
          loadingTxt={null}
          width={"100%"}
          height={"100%"}
          src={pano}
          defaultZoomLvl={10}
          navbar={false}
          onReady={() => setIsLoaded(true)}
          panoData={panoData}
          plugins={[
            [VisibleRangePlugin, {
              verticalRange: ['0deg', '0deg'],
            }],
          ]}
        />
      </div>
      <Controls psvRef={psvRef} />
    </>
  )
}

export default Panorama;