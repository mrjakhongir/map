import { useState } from 'react';

function LocationBanner() {
	const [showBanner, setShowBanner] = useState(false);
	return (
		<div>
			<div
				className={`h-0 overflow-hidden transition-all duration-500 ${
					showBanner && 'h-[240px] border border-b-slate-500'
				}`}>
				<div className='p-4'>
					<img
						className='mb-5'
						src='/images/banner.png'
						alt='location banner'
					/>
					<h1 className='text-2xl text-slate-800 font-bold text-center'>
						Explore our attractions, restaurants, shop, and more!
					</h1>
				</div>
			</div>
			<div
				className='w-9 h-9 mx-auto flex items-center justify-center cursor-pointer hover:bg-slate-100'
				onClick={() => setShowBanner((prevState) => !prevState)}>
				<img
					className={`w-4 h-4 rotate-180 ${showBanner && 'rotate-0'}`}
					src='/images/angle.svg'
					alt='angle up'
				/>
			</div>
		</div>
	);
}

export default LocationBanner;
