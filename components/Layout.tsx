import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  footerText?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, footerText }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#6185F8] text-black overflow-x-hidden flex flex-col">
      {/* 动态云朵层 */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="pixel-cloud" style={{ top: '10%', animationDuration: '25s' }}></div>
        <div className="pixel-cloud" style={{ top: '30%', animationDuration: '35s', transform: 'scale(1.5)' }}></div>
        <div className="pixel-cloud" style={{ top: '60%', animationDuration: '45s', transform: 'scale(0.8)' }}></div>
      </div>

      {/* 主要内容区域 - 增加底部 padding (pb-32) 以防止页脚被地面遮挡 */}
      <div className="relative z-10 flex-1 flex flex-col max-w-5xl mx-auto w-full p-2 md:p-4 pb-32 md:pb-40">
        {children}
      </div>

      {/* 底部地面装饰 + 版权文字 */}
      <div className="fixed bottom-0 left-0 w-full h-12 md:h-16 z-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjRTE1QTEwIiBkPSJNMCAwaDMydjMyaC0zMnoiLz48cGF0aCBmaWxsPSIjRkZCQUIwIiBkPSJNMCAwaDMwdjJIMHptMCA0aDI4djJIMHoiLz48cGF0aCBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIgZD0iTTMwIDB2MzJoMnYtMzJ6Ii8+PC9zdmc+')] border-t-2 md:border-t-4 border-black">
         
         {/* 装饰元素 */}
         <div className="absolute -top-5 md:-top-6 left-6 md:left-10 w-8 md:w-12 h-6 bg-[#00AA00] border-2 md:border-4 border-black border-b-0"></div> 
         <div className="absolute -top-8 md:-top-10 right-10 md:right-20 w-6 md:w-8 h-8 md:h-10 bg-[#E75A10] border-2 md:border-4 border-black flex items-center justify-center text-white text-[10px] md:text-xs font-bold">?</div>
         
         {/* 版权文字 - 居中显示在地面上 */}
         {footerText && (
           <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none w-full">
             {/* 
                移动端终极修复方案：
                - 使用 transform: scale(0.75) + text-xs (12px):
                  12px * 0.75 = 9px。
                  这绕过了浏览器设置中 "最小字体限制 (通常为12px)" 导致布局被撑开的问题。
                - w-full + text-center: 确保文字在屏幕正中间。
                - md:scale-100 md:text-xl: PC端恢复大字体，不缩放。
             */}
             <span className="text-xs md:text-xl text-white font-bold drop-shadow-[1px_1px_0_#000] md:drop-shadow-[2px_2px_0_#000] font-['Press_Start_2P'] tracking-normal md:tracking-wide opacity-90 text-center w-full whitespace-nowrap transform scale-75 md:scale-100 origin-center">
               {footerText}
             </span>
           </div>
         )}
      </div>
    </div>
  );
};

export default Layout;
