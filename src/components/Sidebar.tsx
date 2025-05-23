import React from 'react';
import SidebarItem from './SidebarItem';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  return (
    <div className="w-full h-full bg-black text-white border-r border-gray-800 flex flex-col">
      <div className="overflow-y-auto flex-1 pt-4 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        <div className="px-2 space-y-1">
          <SidebarItem icon="home" label="For You" active={location.pathname === '/'} />
          <SidebarItem icon="suggestions" label="Suggestions" active={location.pathname === '/suggestions'} />
          <SidebarItem icon="leaderboard" label="Leaderboard" active={location.pathname === '/leaderboard'} />
          <SidebarItem icon="shop" label="Shop" active={location.pathname.startsWith('/shop')} />
          <SidebarItem icon="users" label="Following" active={location.pathname === '/following'} />
          <SidebarItem icon="heart" label="Social" active={location.pathname === '/social'} />
          <SidebarItem icon="gamepad" label="H5 Games" active={location.pathname === '/games'} />
          <SidebarItem icon="globe" label="Website" active={location.pathname === '/website'} />
          <SidebarItem icon="apps" label="Apps" count={3} active={location.pathname === '/apps'} />
          <SidebarItem icon="headphones" label="Audio" active={location.pathname === '/audio'} />
          <SidebarItem icon="live" label="LIVE" active={location.pathname === '/live'} />
          <SidebarItem icon="profile" label="Profile" active={location.pathname === '/profile'} />
          <SidebarItem icon="creator" label="Creator" active={location.pathname === '/creator'} />
          <SidebarItem icon="creating" label="Creating" active={location.pathname === '/creating'} />
        </div>
      </div>
      
      <div className="mt-auto p-4 border-t border-gray-800">
        <button
          onClick={() => navigate('/business/dashboard')}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Business Center
        </button>
        <div className="text-xs text-gray-500 mt-4">
          <p className="mb-2">© 2025 TikTok Clone</p>
          <p>For demo purposes only</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;