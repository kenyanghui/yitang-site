import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-6">关于一堂·AI FDE</h1>
      <p className="text-[#6e6e73] leading-relaxed mb-4">
        一堂·AI FDE 工作坊是玄龙堂工作坊矩阵里的「方法课」：不讲单个软件，讲一堂的双三角与 AI 十倍速飞轮。
        3 小时让学员当场画出自己的第一个双三角画布、当场跑通一个最小 FDE 场景。
      </p>
      <p className="text-[#6e6e73] leading-relaxed mb-4">
        方法论源自 2026 一堂秋季马拉松的双三角框架：AI 不是一个单点问题，而是一个系统工程。
        人的三要素（审美/体系/数据）× AI 的三要素互补整合，事前提假设、过程中打磨、事后复盘迭代。
      </p>
      <p className="text-[#6e6e73] leading-relaxed mb-8">
        与拆AI工作坊（<a href="https://chai.aibay.asia" className="text-[#0071e3]">chai.aibay.asia</a>，工具课）形成上下两级：
        拆AI 教你拆一个真软件，一堂版教你拆自己的真场景。
      </p>
      <Link to="/" className="text-[#0071e3]">← 返回首页</Link>
    </div>
  )
}
