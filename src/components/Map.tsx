import { Map, Marker } from "pigeon-maps";
import React, { FC } from "react";
import { ILocationDetails } from "../types";

/**
 * The @Map component renders the map view with the passed in @see ILocationDetails. We extract both the latitude and longtitude values to pinpoint the exact
 * location.
 * 
 * @param param0 
 * @returns 
 * @author jlee
 */
const MapChart: FC<{ location: ILocationDetails }> = ({ location }) => {
    return (
        <Map height={600} width={800} defaultCenter={[location.latitude, location.longitude]} defaultZoom={7}>
            <Marker width={50} anchor={[location.latitude, location.longitude]} />
        </Map>
    );
}

export default MapChart;