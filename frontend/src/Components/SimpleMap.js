import React from "react";
import GoogleMapReact from 'google-map-react';

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 48.81518651759964,
            lng: 2.3632801487772057
        },
        zoom: 15
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '75vw' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            />
        </div>
    );
}