import { useEffect, useState } from 'react';

import Map, {
	NavigationControl,
	FullscreenControl,
	GeolocateControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { getData } from '../lib/utils';
import { Place } from '../lib/definitions';
import MarkerItem from '../components/marker/MarkerItem';

function MapView() {
	const accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

	const [places, setPlaces] = useState<Place[]>([]);

	useEffect(() => {
		getPlaces();
	}, []);

	async function getPlaces() {
		const data = await getData();
		const {
			attractions,
			dining,
			events,
			services,
			shoppingAndMerchants,
			parking,
			parks,
		} = data;

		setPlaces([
			...attractions,
			...dining,
			...events,
			...services,
			...shoppingAndMerchants,
			...parking,
			...parks,
		]);
	}

	return (
		<Map
			mapboxAccessToken={accessToken}
			initialViewState={{ longitude: 8.682054, latitude: 50.110248, zoom: 12 }}
			mapStyle='mapbox://styles/mapbox/streets-v9'
			terrain={{ source: 'mapbox-dem', exaggeration: 1.5 }}>
			<NavigationControl position='top-right' />
			<FullscreenControl />
			<GeolocateControl />
			{places.map((place) => (
				<MarkerItem key={place.id} place={place} />
			))}
		</Map>
	);
}

export default MapView;
