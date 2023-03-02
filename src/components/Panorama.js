import React, { useState, useEffect, useContext } from "react";
import { ReactPhotoSphereViewer, VisibleRangePlugin } from "react-photo-sphere-viewer";
import { AppContext } from "../App";
import styles from "./Panorama.module.css"
import Controls from "./Controls";

export function loadPanorama(psvRef, pano, panoData, setPanoChanged, direction) {
  setPanoChanged(true);
  psvRef.current.setPanorama(pano, {
    showLoader: false,
    panoData: panoData,
  }).then(() => {
    setPanoChanged(false);
    if (!direction) {
      psvRef.current.animate({
        yaw: psvRef.current.getPosition().yaw + 0.1,
        pitch: psvRef.current.getPosition().pitch,
        speed: '0.5rpm'
      })
    }
    // Directions = s9, ww, s1, ss, sc, nn, s6, ee, s4
    // range is between 0 and 2pi
    psvRef.current.setOption('defaultYaw', 0);
    const visibleRange = psvRef.current.getPlugin(VisibleRangePlugin);
    switch (direction) {
      case "s9":
        visibleRange.setHorizontalRange([0, 0.5 * Math.PI]);
        break;
      case "ww":
        visibleRange.setHorizontalRange([0.5 * Math.PI, Math.PI]);
        break;
      case "s1":
        visibleRange.setHorizontalRange([Math.PI, 1.5 * Math.PI]);
        break;
      case "ss":
        visibleRange.setHorizontalRange([1.5 * Math.PI, 2 * Math.PI]);
        break;
      case "sc":
        visibleRange.setHorizontalRange(null);
        break;
      case "nn":
        visibleRange.setHorizontalRange([0, 2 * Math.PI]);
        break;
      case "s6":
        visibleRange.setHorizontalRange([0, 2 * Math.PI]);
        break;
      case "ee":
        visibleRange.setHorizontalRange([0, 2 * Math.PI]);
        break;
      case "s4":
        visibleRange.setHorizontalRange([0, 2 * Math.PI]);
        break;
      default:
        break;
    }
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