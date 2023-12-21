import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';


/**
 * Represents the state of a geolocation.
 * @interface
 */
interface GeolocationState {
    latitude: number | null,
    longitude: number | null,
    map: JSX.Element | null,
}

/**
 * Custom hook to retrieve and display user's geolocation information.
 *
 * @returns {GeolocationState} The current geolocation information.
 */
export const useGeolocation = () => {
    const [location, setLocation] = useState<GeolocationState>({latitude: null, longitude: null, map: null });
    const mapStyles = {
        height: "50vh",
        width: "100%",
    };

    useEffect(() => {
        const geo = navigator.geolocation;

        if (!geo) {
            console.log('Geolocation is not supported');
            return;
        }

        let watcher = geo.watchPosition(position => {
                const mapContent =
                    <MapContainer style={mapStyles} center={[position.coords.latitude, position.coords.longitude]} zoom={13}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
                        <Marker position={[position.coords.latitude, position.coords.longitude]} />
                    </MapContainer>;

                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    map: mapContent
                });
            },
            () => {
                console.log('Position retrieval failed');
            });

        return () => geo.clearWatch(watcher);
    }, []);

    return location;
}