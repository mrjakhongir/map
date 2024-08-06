import React from 'react';
import { Marker } from 'react-map-gl';
import Popup from '../Popup';
import { Place } from '../../lib/definitions';
import { useState } from 'react';

type MarkerItemProps = {
	place: Place;
};

function MarkerItem({ place }: MarkerItemProps) {
	const [showPopup, setShowPopup] = useState(false);

	return (
		<Marker
			className='max-w-8 cursor-pointer z-0'
			longitude={place.coordinates.longitude}
			latitude={place.coordinates.latitude}
			scale={1}
			anchor='bottom'>
			<div
				className='w-10 flex items-center justify-center bg-white p-2 border-2 border-red-500 rounded-full shadow-lg relative z-0'
				onClick={() => {
					setShowPopup((prevState) => !prevState);
				}}>
				<img
					className='w-full h-full object-cover relative z-10'
					src={place.img}
					alt='cart'
					width={40}
					height={32}
				/>
			</div>
			{showPopup && <Popup setShowPopup={setShowPopup} place={place} />}
		</Marker>
	);
}

export default MarkerItem;
