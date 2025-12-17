import React, { useState } from 'react';
import Layout from './components/Layout';
import Nav from './components/Nav';
import DigitalClock from './components/DigitalClock';
import { NavSection, LinkItem } from './types';
import { ExternalLink, Github, Twitter, Mail, Code, Zap } from 'lucide-react';

/* 
  ===========================================
  在此处修改网站内容数据 (无需修改逻辑代码)
  ===========================================
*/

// 1. 传送门链接 (支持颜色: red, green, blue, yellow)
const warpLinks: LinkItem[] = [
  { id: 1, title: "GITHUB", url: "https://github.com", color: "blue" },
  { id: 2, title: "BILIBILI", url: "https://bilibili.com", color: "red" },
  { id: 3, title: "BLOG", url: "#", color: "green" },
  { id: 4, title: "TWITTER", url: "https://twitter.com", color: "yellow" },
  { id: 5, title: "EMPTY", url: "#", color: "blue" },
  { id: 6, title: "EMPTY", url: "#", color: "red" },
];

// 2. 玩家个人信息
const playerProfile = {
  name: "KKZDQ",
  job: "摸鱼大王", // 手机端如果不换行，建议保持在 8 个字以内
  world: "Vercel / GitHub",
  avatarLetter: "M", // 头像中间的字母
  skills: [
    { name: "React", icon: <Code size={12} /> },
    { name: "Node.js", icon: <Zap size={12} /> },
    { name: "Next.js", icon: <ExternalLink size={12} /> },
    { name: "Tailwind", icon: <Code size={12} /> },
  ]
};

const App: React.FC = () => {
  const [section, setSection] = useState<NavSection>('home');
  const [coins, setCoins] = useState(0);

  const handleCoinClick = () => {
    setCoins(prev => prev + 1);
  };

  const renderContent = () => {
    switch (section) {
      case 'home':
        return (
          <div className="flex flex-col items-center justify-center min-h-[50vh] animate-bounce-in pt-4">
            {/* 标题 Logo */}
            <div className="bg-[#B0260E] border-4 border-black p-4 md:p-10 mb-6 shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] md:shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] relative max-w-[90%]">
               <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-3 h-3 md:w-4 md:h-4 bg-white border-2 border-black"></div>
               <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-3 h-3 md:w-4 md:h-4 bg-white border-2 border-black"></div>
               <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-3 h-3 md:w-4 md:h-4 bg-white border-2 border-black"></div>
               <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-3 h-3 md:w-4 md:h-4 bg-white border-2 border-black"></div>
               
               <h1 className="text-xl md:text-5xl text-white font-bold drop-shadow-[2px_2px_0_#000] md:drop-shadow-[4px_4px_0_#000] text-center leading-relaxed font-[Press Start 2P]">
                 SUPER<br/>PORTFOLIO<br/>BROS.
               </h1>
            </div>

            <div className="nes-container p-4 md:p-6 text-center max-w-2xl bg-white mx-2">
              <p className="mb-4 leading-relaxed text-xs md:text-base break-words">
                你好，冒险家！<br/>欢迎来到我的 8-bit 世界。<br/>请按上方按钮开始游戏。
              </p>
              
              <button 
                onClick={handleCoinClick}
                className="mt-2 bg-[#FBD000] border-2 md:border-4 border-black p-3 md:p-4 active:scale-95 transition-transform flex flex-col items-center mx-auto"
              >
                 <div className="text-2xl md:text-4xl font-bold text-black drop-shadow-sm mb-1">?</div>
              </button>
            </div>
          </div>
        );

      case 'warp-zone':
        return (
          <div className="flex flex-col gap-6 md:gap-10">
            <div className="bg-black text-white p-3 md:p-4 border-2 md:border-4 border-white text-center shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]">
               <h2 className="text-sm md:text-2xl">WARP ZONE</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 md:gap-10 px-6 md:px-0">
              {warpLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block w-full"
                >
                  <div className={`
                    h-28 md:h-32 border-2 md:border-4 border-black flex items-center justify-center relative
                    transition-all duration-200 group-hover:-translate-y-2
                    ${link.color === 'green' ? 'bg-[#00AA00]' : 
                      link.color === 'red' ? 'bg-[#D32F2F]' : 
                      link.color === 'blue' ? 'bg-[#0288D1]' : 'bg-[#FBC02D]'}
                  `}>
                    {/* 管道装饰 */}
                    <div className="absolute top-0 left-0 w-3 md:w-4 h-full bg-white opacity-20"></div>
                    <div className="absolute top-0 right-2 w-4 md:w-8 h-full bg-black opacity-10"></div>
                    
                    <div className="flex flex-col items-center z-10 text-white drop-shadow-[2px_2px_0_black] w-full px-1">
                       <span className="text-xs md:text-xl font-bold uppercase mb-1 truncate w-full text-center">{link.title}</span>
                       <ExternalLink size={16} className="md:w-6 md:h-6" />
                    </div>
                  </div>
                  {/* 管道口 */}
                  <div className={`
                     h-4 md:h-6 w-[104%] -ml-[2%] border-2 md:border-4 border-black absolute -top-4 md:-top-6
                     ${link.color === 'green' ? 'bg-[#00AA00]' : 
                       link.color === 'red' ? 'bg-[#D32F2F]' : 
                       link.color === 'blue' ? 'bg-[#0288D1]' : 'bg-[#FBC02D]'}
                  `}></div>
                </a>
              ))}
            </div>
          </div>
        );

      case 'about':
        return (
          // 优化布局容器：
          // - w-[85%]: 保持宽度 85%，解决贴边问题
          // - p-2: 进一步减少内边距 (紧凑模式)
          // - mt-4: 保持顶部间距
          // - max-w-2xl mx-auto md:w-full: PC端恢复正常尺寸
          <div className="nes-container p-2 md:p-8 bg-[#F8F9FA] max-w-2xl mx-auto mt-4 md:mt-12 w-[85%] md:w-full">
             <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center md:items-start">
                {/* 头像 - 移动端缩小至 w-16 (64px) 以节省高度 */}
                <div className="flex-shrink-0 flex justify-center">
                   <div className="w-16 h-16 md:w-32 md:h-32 bg-[#E52521] border-2 md:border-4 border-black relative overflow-hidden shadow-[2px_2px_0_0_rgba(0,0,0,0.2)]">
                      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-5xl font-bold">
                         {playerProfile.avatarLetter}
                      </div>
                   </div>
                </div>

                <div className="flex-grow space-y-1 md:space-y-4 w-full">
                   <h2 className="text-xs md:text-2xl font-bold border-b-2 md:border-b-4 border-black pb-1 md:pb-2 mb-1 md:mb-4 text-center md:text-left">CHARACTER STATS</h2>
                   
                   {/* 移动端文本使用 text-[10px] 且行高紧凑 */}
                   <div className="space-y-1 md:space-y-3 font-mono text-[10px] md:text-base leading-tight">
                      <div className="flex justify-between items-center border-b border-gray-300 pb-0.5 md:pb-1">
                         <span>NAME:</span>
                         <span className="font-bold">{playerProfile.name}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-300 pb-0.5 md:pb-1">
                         <span>JOB:</span>
                         <span className="bg-red-100 text-red-600 px-1 font-bold">{playerProfile.job}</span>
                      </div>
                      <div className="flex justify-between items-center">
                         <span>WORLD:</span>
                         {/* 移除 max-w 限制，允许自然显示，因为容器已经变窄 */}
                         <span className="truncate">{playerProfile.world}</span>
                      </div>
                   </div>

                   <div className="mt-2 md:mt-6">
                      <h3 className="font-bold mb-1 md:mb-2 text-[10px] md:text-base text-center md:text-left">SKILLS</h3>
                      <div className="flex flex-wrap gap-1 md:gap-2 justify-center md:justify-start">
                         {playerProfile.skills.map(skill => (
                            <span key={skill.name} className="px-1.5 py-0.5 md:px-2 md:py-1 border md:border-2 border-black text-[8px] md:text-xs font-bold bg-white shadow-[1px_1px_0_0_rgba(0,0,0,0.2)] md:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] flex items-center gap-1">
                               {skill.icon} {skill.name}
                            </span>
                         ))}
                      </div>
                   </div>
                </div>
             </div>

             <div className="mt-3 md:mt-8 border-t-2 md:border-t-4 border-dashed border-gray-300 pt-2 md:pt-4 text-center">
                <p className="mb-2 md:mb-4 font-bold text-[10px] md:text-base">CONTACT ME?</p>
                <div className="flex justify-center gap-3 md:gap-4">
                   <button className="w-8 h-8 md:w-12 md:h-12 bg-blue-500 border-2 md:border-4 border-black flex items-center justify-center text-white hover:bg-blue-600 active:translate-y-1">
                      <Twitter size={14} className="md:w-6 md:h-6" />
                   </button>
                   <button className="w-8 h-8 md:w-12 md:h-12 bg-gray-800 border-2 md:border-4 border-black flex items-center justify-center text-white hover:bg-gray-900 active:translate-y-1">
                      <Github size={14} className="md:w-6 md:h-6" />
                   </button>
                   <button className="w-8 h-8 md:w-12 md:h-12 bg-red-500 border-2 md:border-4 border-black flex items-center justify-center text-white hover:bg-red-600 active:translate-y-1">
                      <Mail size={14} className="md:w-6 md:h-6" />
                   </button>
                </div>
             </div>
          </div>
        );
    }
  };

  return (
    <Layout footerText={`(C) ${playerProfile.name} // PRESS START`}>
      {/* 
         头部 HUD (Heads Up Display) 
      */}
      <header className="grid grid-cols-2 gap-y-2 gap-x-4 md:flex md:justify-between md:items-start mb-4 px-1 md:px-2 py-2 md:py-4 relative z-50">
         
         {/* 1. 名字/分数 */}
         <div className="flex flex-col items-start">
            <div className="text-white font-bold text-xs md:text-lg drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">MARIO</div>
            <div className="text-white font-bold text-sm md:text-xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
               {coins.toString().padStart(6, '0')}
            </div>
         </div>

         {/* 2. 金币 */}
         <div className="flex flex-col items-end md:items-center">
            <div className="text-white font-bold text-xs md:text-lg drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">COINS</div>
            <div className="flex items-center gap-1 text-white font-bold text-sm md:text-xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
               <div className="w-3 h-4 md:w-4 md:h-6 bg-[#FBD000] border border-black rounded-sm inline-block mr-1"></div>
               x {coins.toString().padStart(2, '0')}
            </div>
         </div>

         {/* 3. 关卡 (手机版放在第二行) */}
         <div className="flex flex-col items-start md:items-end">
            <div className="text-white font-bold text-xs md:text-lg drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">WORLD</div>
            <div className="text-white font-bold text-sm md:text-xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">1-1</div>
         </div>

         {/* 4. 时间 (手机版放在第二行) */}
         <DigitalClock className="items-end" />
      </header>

      {/* 导航栏 */}
      <Nav currentSection={section} onNavigate={setSection} />

      {/* 主内容 */}
      <main className="flex-1 w-full max-w-4xl mx-auto min-h-[350px]">
        {renderContent()}
      </main>
    </Layout>
  );
};

export default App;
