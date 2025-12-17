import React from 'react';
import { NavSection } from '../types';
import { Gamepad2, Rocket, User } from 'lucide-react';

interface NavProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

const Nav: React.FC<NavProps> = ({ currentSection, onNavigate }) => {
  const navItems: { id: NavSection; label: string; icon: React.ReactNode; color: string }[] = [
    { id: 'home', label: '开始', icon: <Gamepad2 className="w-4 h-4 md:w-5 md:h-5" />, color: 'bg-red-500' },
    { id: 'warp-zone', label: '传送门', icon: <Rocket className="w-4 h-4 md:w-5 md:h-5" />, color: 'bg-green-500' },
    { id: 'about', label: '状态', icon: <User className="w-4 h-4 md:w-5 md:h-5" />, color: 'bg-yellow-400' },
  ];

  return (
    <nav className="w-full max-w-4xl mx-auto z-30 relative px-2 mb-4">
      {/* 使用 Grid 布局强制一行显示 3 个按钮 */}
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`
              nes-btn 
              w-full 
              py-2 md:py-3 px-1 
              font-bold uppercase 
              flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3
              text-[10px] md:text-sm 
              shadow-[2px_2px_0_0_rgba(0,0,0,0.5)] md:shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]
              transition-all
              ${currentSection === item.id ? 'translate-y-1 shadow-none brightness-110' : 'hover:-translate-y-1 hover:brightness-110'}
              ${item.color}
              ${item.id === 'about' ? 'text-black' : 'text-white'}
            `}
          >
            {item.icon}
            <span className="whitespace-nowrap scale-90 md:scale-100">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
