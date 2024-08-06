import React from 'react';

function SearchCategory() {
	return (
		<div className='bg-[#9e6828] pl-4 pr-4 p-2 flex items-center justify-between gap-5'>
			<div className='w-full bg-[rgba(200,200,200,0.2)] flex items-center rounded-md px-3 py-1'>
				<input className='w-full bg-transparent outline-none py-[2px] text-white' />
				<img className='w-3 h-3' src='/images/search.svg' alt='search' />
			</div>
			<img
				className='w-5 h-5 cursor-pointer'
				src='/images/share.svg'
				alt='share'
			/>
		</div>
	);
}

export default SearchCategory;
