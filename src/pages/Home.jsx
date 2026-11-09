import { Link } from 'react-router-dom'
import { DUAL_TRIANGLE, FLYWHEEL, FUNNEL, AGENDA, FAQ } from '../data/yitang'

const audience = [
  { k: '想把 AI 变成生产力的人', d: '个人效能党：让 AI 真正替你干活，而不是聊着玩。' },
  { k: '想把 AI 变成生意的人', d: '创业者与自由职业者：用双三角找到自己的 AI 生意切口。' },
]

export default function Home() {
  return (
    <div className="bg-white text-[#1d1d1f]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-20 text-center">
          <div className="inline-flex items-center gap-2 text-[13px] font-medium text-indigo-600 bg-indigo-500/10 rounded-full px-4 py-1.5 mb-6">
            一堂·AI FDE 工作坊 · 3 小时 · 广州
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            把 AI 变成生产力，
            <br />
            先画出你的<span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">双三角</span>
          </h1>
          <p className="text-[17px] md:text-lg text-[#6e6e73] max-w-2xl mx-auto mb-10 leading-relaxed">
            3 小时工作坊：当场画出双三角画布，跑通你的最小 FDE。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/fde/" className="inline-flex items-center rounded-full bg-indigo-600 text-white text-[15px] font-medium px-7 py-3 hover:bg-indigo-500 transition-colors">
              报名工作坊
            </Link>
            <a href="#dual" className="inline-flex items-center rounded-full border border-black/10 text-[#1d1d1f] text-[15px] font-medium px-7 py-3 hover:bg-black/[.03] transition-colors">
              了解方法论
            </a>
          </div>
        </div>
      </section>

      <section id="dual" className="py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-3">{DUAL_TRIANGLE.title}</h2>
          <p className="text-center text-[#6e6e73] mb-12 max-w-2xl mx-auto">{DUAL_TRIANGLE.tagline}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="rounded-3xl bg-indigo-500/10 p-8">
              <div className="text-[13px] font-semibold text-indigo-600 mb-5">{DUAL_TRIANGLE.human.label}</div>
              <div className="space-y-4">
                {DUAL_TRIANGLE.human.items.map((it) => (
                  <div key={it.k} className="rounded-2xl bg-white p-5 shadow-sm">
                    <div className="font-semibold mb-1">{it.k}</div>
                    <div className="text-[13px] text-[#6e6e73] leading-relaxed">{it.d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-sky-500/10 p-8">
              <div className="text-[13px] font-semibold text-sky-600 mb-5">{DUAL_TRIANGLE.ai.label}</div>
              <div className="space-y-4">
                {DUAL_TRIANGLE.ai.items.map((it) => (
                  <div key={it.k} className="rounded-2xl bg-white p-5 shadow-sm">
                    <div className="font-semibold mb-1">{it.k}</div>
                    <div className="text-[13px] text-[#6e6e73] leading-relaxed">{it.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-[#f5f5f7] p-8 mb-8 text-center">
            <p className="text-lg font-medium mb-6">{DUAL_TRIANGLE.tagline}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {DUAL_TRIANGLE.usages.map((u) => (
                <div key={u.k} className="rounded-2xl bg-white p-5 text-left">
                  <div className="font-semibold text-indigo-600 mb-1">{u.k}</div>
                  <div className="text-[13px] text-[#6e6e73] leading-relaxed">{u.d}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-[15px] text-[#6e6e73] max-w-xl mx-auto">{DUAL_TRIANGLE.mindset}</p>
        </div>
      </section>

      <section id="flywheel" className="py-20 bg-[#f5f5f7] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-3">{FLYWHEEL.title}</h2>
          <p className="text-center text-[#6e6e73] mb-12">{FLYWHEEL.tagline}</p>
          <div className="relative">
            <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-500 rounded-full" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {FLYWHEEL.stages.map((s, i) => (
                <div key={s.k} className={`relative rounded-3xl p-6 text-center ${s.active ? 'bg-white shadow-lg ring-2 ring-indigo-500' : 'bg-white/70'}`}>
                  <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-4 ${s.active ? 'bg-indigo-600' : 'bg-[#c7c7cc]'}`}>
                    {i + 1}
                  </div>
                  <div className="font-semibold mb-2">{s.k}</div>
                  <div className="text-[13px] text-[#6e6e73] leading-relaxed">{s.d}</div>
                  {s.active && <div className="mt-3 inline-block text-[12px] font-medium text-indigo-600 bg-indigo-500/10 rounded-full px-3 py-1">本工作坊 = 启动期主战场</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="funnel" className="py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-3">{FUNNEL.title}</h2>
          <p className="text-center text-[#6e6e73] mb-12">{FUNNEL.tagline}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FUNNEL.lines.map((l) => (
              <a
                key={l.k}
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className={`group rounded-3xl ${l.tile} p-8 hover:shadow-lg transition-shadow`}
              >
                <div className={`text-xl font-bold ${l.num} mb-3`}>{l.k}</div>
                <p className="text-[14px] text-[#3a3a3c] leading-relaxed mb-6">{l.d}</p>
                <span className="text-[14px] font-medium text-[#1d1d1f] group-hover:text-indigo-600 transition-colors">了解 →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="agenda" className="py-20 bg-[#f5f5f7] scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-3">{AGENDA.title}</h2>
          <p className="text-center text-[#6e6e73] mb-12">{AGENDA.tagline}</p>
          <div className="space-y-4">
            {AGENDA.items.map((a) => (
              <div key={a.k} className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm">
                <div className="shrink-0 w-24">
                  <div className="text-[15px] font-bold text-indigo-600">{a.time}</div>
                  <div className="text-[12px] text-[#86868b] mt-1">{a.dur}</div>
                </div>
                <div className="border-l border-black/[.08] pl-5">
                  <div className="font-semibold mb-1">{a.k}</div>
                  <div className="text-[13px] text-[#6e6e73] leading-relaxed">{a.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">适合谁来 · 常见问题</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {audience.map((a) => (
              <div key={a.k} className="rounded-2xl bg-indigo-500/10 p-6">
                <div className="font-semibold text-indigo-600 mb-2">{a.k}</div>
                <div className="text-[13px] text-[#3a3a3c] leading-relaxed">{a.d}</div>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="rounded-2xl bg-[#f5f5f7] p-5 group">
                <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-[#86868b] group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">下一期 · 待定</h2>
          <p className="text-[#6e6e73] mb-2">地点：广州（具体场地报名后通知）</p>
          <p className="text-[13px] text-[#86868b] mb-10">面向想把 AI 变成生产力 / 生意的人 · 先修要求：无</p>
          <Link to="/fde/" className="inline-flex items-center rounded-full bg-indigo-600 text-white text-[15px] font-medium px-8 py-3.5 hover:bg-indigo-500 transition-colors">
            报名工作坊
          </Link>
        </div>
      </section>
    </div>
  )
}
