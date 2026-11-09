import { Link } from 'react-router-dom'

export default function YitangFooter() {
  return (
    <footer className="border-t border-black/[.06] bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="text-[17px] font-bold text-[#1d1d1f] mb-2">一堂·AI FDE</div>
            <p className="text-[13px] leading-relaxed text-[#86868b] max-w-sm">
              把 AI 变成生产力，先画出你的双三角。3 小时工作坊，当场画布 + 跑通最小 FDE。
            </p>
          </div>
          <div>
            <div className="text-[12px] font-semibold text-[#1d1d1f] mb-3">课程</div>
            <ul className="space-y-2 text-[13px] text-[#6e6e73]">
              <li><Link to="/" className="hover:text-[#0071e3] transition-colors">主页</Link></li>
              <li><Link to="/fde/" className="hover:text-[#0071e3] transition-colors">报名工作坊</Link></li>
              <li><a href="/fde/canvas.html" className="hover:text-[#0071e3] transition-colors">双三角画布</a></li>
              <li><a href="/fde/guide.html" className="hover:text-[#0071e3] transition-colors">工作坊指南</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[12px] font-semibold text-[#1d1d1f] mb-3">姊妹站</div>
            <ul className="space-y-2 text-[13px] text-[#6e6e73]">
              <li><a href="https://chai.aibay.asia/" target="_blank" rel="noreferrer" className="hover:text-[#0071e3] transition-colors">小蛮腰·拆AI</a></li>
              <li><Link to="/about" className="hover:text-[#0071e3] transition-colors">关于我们</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-black/[.06] text-[12px] text-[#86868b] flex flex-col md:flex-row justify-between gap-2">
          <span>© 2026 一堂·AI FDE</span>
          <span>ICP 备 xxx 号</span>
        </div>
      </div>
    </footer>
  )
}
