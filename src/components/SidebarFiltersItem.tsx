interface SidebarFiltersItem {
	id: number;
	label: string;
	img: string;
	params: string;
}

type SidebarFiltersItemProps = {
	item: SidebarFiltersItem;
};

function SidebarFiltersItem({ item }: SidebarFiltersItemProps) {
	return (
		<li className='cursor-pointer flex justify-between py-1 pl-4 pr-2 rounded-md text-lg text-slate-700 transition-all hover:bg-slate-100'>
			<div className='flex items-center gap-4'>
				<img className='w-6 h-6' src={item.img} alt={item.label} />
				<span>{item.label}</span>
			</div>
			<span className='text-slate-500 text-[16px]'>5</span>
		</li>
	);
}

export default SidebarFiltersItem;
