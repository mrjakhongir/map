import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { Place } from '../lib/definitions';

type PopupProps = {
	setShowPopup: Dispatch<SetStateAction<boolean>>;
	place: Place;
};

function Popup({ setShowPopup, place }: PopupProps) {
	return (
		<div className='fixed z-90 bottom-[110%] bg-white shadow-2xl p-1 pb-2 pl-3 rounded-md flex flex-col w-40 text-sm'>
			<span
				className='self-end py-1 px-2.5 border rounded-full font-semibold cursor-pointer transition-all hover:border-slate-800'
				onClick={() => setShowPopup(false)}>
				X
			</span>
			<h2 className='text-md font-semibold'>{place.title}</h2>
		</div>
	);
}

export default Popup;
