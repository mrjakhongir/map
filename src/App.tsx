import { useState } from 'react';
import MapView from './layouts/MapView';
import SidebarFilters from './layouts/SidebarFilters';

function App() {
	const [showSidebar, setShowSidebar] = useState(true);
	return (
		<div className='flex h-[100vh]'>
			<aside
				className={`fixed z-10 h-full max-w-sm bg-white -translate-x-full transition-all duration-300 ${
					showSidebar && 'translate-x-0'
				}`}>
				<SidebarFilters
					showSidebar={showSidebar}
					setShowSidebar={setShowSidebar}
				/>
			</aside>
			<section className={`w-full bg-slate-400 h-full`}>
				<MapView />
			</section>
		</div>
	);
}

export default App;
