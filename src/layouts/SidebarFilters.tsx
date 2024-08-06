import { Dispatch, SetStateAction, useEffect } from 'react';
import LocationBanner from '../components/LocationBanner';
import SearchCategory from '../components/SearchCategory';
import SidebarFiltersItem from '../components/SidebarFiltersItem';
import { getData } from '../lib/utils';

const sidebarFilters = [
	{
		id: 1,
		label: 'Attractions',
		img: '/images/flag.svg',
		params: 'attractions',
	},
	{
		id: 2,
		label: 'Dining',
		img: '/images/dining.svg',
		params: 'dining',
	},
	{
		id: 3,
		label: 'Shopping & Merchants',
		img: '/images/cart.svg',
		params: 'shoppingAndMerchants',
	},
	{
		id: 4,
		label: 'Parks',
		img: '/images/tree.svg',
		params: 'parks',
	},
	{
		id: 5,
		label: 'Parking',
		img: '/images/parking.svg',
		params: 'parking',
	},
	{
		id: 6,
		label: 'Services',
		img: '/images/gear.svg',
		params: 'services',
	},
	{
		id: 7,
		label: 'Events',
		img: '/images/calendar.svg',
		params: 'events',
	},
];

type SidebarFiltersProps = {
	setShowSidebar: Dispatch<SetStateAction<boolean>>;
	showSidebar: boolean;
};

function SidebarFilters({ setShowSidebar, showSidebar }: SidebarFiltersProps) {
	useEffect(() => {
		getPlaces();
	}, []);

	async function getPlaces() {
		const data = await getData();
		return data;
	}
	return (
		<>
			<SearchCategory />
			<LocationBanner />
			<ul className='px-3'>
				{sidebarFilters.map((item) => (
					<SidebarFiltersItem key={item.id} item={item} />
				))}
			</ul>
			<div
				className='absolute top-[52px] -right-8 py-6 px-2 rounded-tr-md rounded-br-md cursor-pointer bg-white hover:bg-slate-100'
				onClick={() => setShowSidebar((prevState) => !prevState)}>
				<img
					className={`w-4 h-4 ${showSidebar ? 'rotate-[-90deg]' : 'rotate-90'}`}
					src='/images/angle.svg'
					alt='angle'
				/>
			</div>
		</>
	);
}

export default SidebarFilters;
