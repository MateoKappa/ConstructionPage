import * as React from "react";
import Map from "react-map-gl";
import styles from "./Map.module.scss";

export default function Maps({prop}) {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiZGVzdGluY29mZmVlIiwiYSI6ImNsNmkyZXZ2MzA3cjMza3MydzlvNzQ1N28ifQ.DvzoxROTAMSUGAYEwH_egg";
  const [viewState, setViewState] = React.useState({
    longitude: 22.939332,
    latitude: 39.360669,
    zoom: prop,
  });
  return (
    <div className={styles.mapstyle}>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      />
    </div>
  );
}
