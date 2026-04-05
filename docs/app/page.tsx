export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] dark:bg-[#161616] text-[#1a1a18] dark:text-[#e8e6e2]">

      {/* Accent bar — 5px for more presence */}
      <div className="flex h-[5px] w-full">
        <div className="flex-1 bg-[#5B8DEF]" />
        <div className="flex-1 bg-[#34B87D]" />
        <div className="flex-1 bg-[#D4A12A]" />
        <div className="flex-1 bg-[#B87550]" />
      </div>

      {/* Nav */}
      <nav className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="font-mono text-sm tracking-widest uppercase text-[#1a1a18] dark:text-[#e8e6e2] opacity-60">
          Personal OS
        </span>
        <div className="flex items-center gap-6">
          <a
            href="/personal-os/getting-started/what-is-this"
            className="text-sm text-[#484540] dark:text-[#b0ada6] hover:text-[#1a1a18] dark:hover:text-[#e8e6e2] transition-colors"
          >
            Docs
          </a>
          <a
            href="https://github.com/jordantcarlisle/personal-os"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#484540] dark:text-[#b0ada6] hover:text-[#1a1a18] dark:hover:text-[#e8e6e2] transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero — tightened vertical padding */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-16">
        <h1
          className="text-[4.5rem] leading-[1.0] font-black tracking-[-0.03em] text-[#1a1a18] dark:text-[#e8e6e2] mb-5"
          style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
        >
          Personal OS
        </h1>
        <p className="text-xl leading-relaxed text-[#484540] dark:text-[#b0ada6] max-w-2xl mb-8 font-normal">
          An AI-powered operating system for your life. OKRs, GTD, PARA, Atomic Habits, and 100+ Mental Models —
          integrated with your AI agent.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="/personal-os/getting-started/what-is-this"
            className="inline-block px-6 py-3 bg-[#1a1a18] dark:bg-[#e8e6e2] text-[#FAFAF7] dark:text-[#161616] text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
          <a
            href="https://github.com/jordantcarlisle/personal-os"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-[#1a1a18] dark:border-[#e8e6e2] text-[#1a1a18] dark:text-[#e8e6e2] text-sm font-semibold tracking-wide hover:opacity-70 transition-opacity"
          >
            View on GitHub
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="border border-[#e0ded8] dark:border-[#2e2e2e] bg-[#f3f1eb] dark:bg-[#1b1b1b] p-6 md:p-7 max-w-3xl">
          <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#7d7a72] dark:text-[#858380] mb-3">
            Why this exists
          </p>
          <p className="text-lg leading-relaxed text-[#484540] dark:text-[#b0ada6] mb-5">
            Personal OS grew out of Jordan Carlisle&apos;s TED Talk — a synthesis of systems thinking,
            lived experience, and the questions that shaped this work into something others could use.
          </p>
          <a
            href="https://www.youtube.com/watch?v=XyF2W_v-EVk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#1a1a18] dark:text-[#e8e6e2] hover:opacity-70 transition-opacity"
          >
            Watch the talk <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[#e0ded8] dark:bg-[#2e2e2e]" />
      </div>

      {/* Daily Loop */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        {/* Section label with extending line */}
        <div className="flex items-center gap-4 mb-5">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#7d7a72] dark:text-[#858380] shrink-0">
            The Daily Loop
          </p>
          <div className="flex-1 h-px bg-[#e0ded8] dark:bg-[#2e2e2e]" />
        </div>
        <h2
          className="text-[2.25rem] leading-tight font-black tracking-[-0.02em] text-[#1a1a18] dark:text-[#e8e6e2] mb-10"
          style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
        >
          Three rituals that compound into clarity.
        </h2>

        <div className="flex flex-col gap-0">
          {/* /reflect */}
          <div className="border-t border-[#e0ded8] dark:border-[#2e2e2e] py-7 flex items-start gap-10">
            <div className="shrink-0 w-44">
              <span
                className="inline-block text-[2rem] font-black tracking-[-0.02em] text-[#5B8DEF] pl-3 border-l-4 border-[#5B8DEF]"
                style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
              >
                /reflect
              </span>
            </div>
            <div className="pt-1">
              <p className="text-base leading-relaxed text-[#484540] dark:text-[#b0ada6]">
                Morning intentions, gratitude, energy check. Evening wins, lessons, habit tracking.
                The heartbeat of the system.
              </p>
            </div>
          </div>

          {/* /triage */}
          <div className="border-t border-[#e0ded8] dark:border-[#2e2e2e] py-7 flex items-start gap-10">
            <div className="shrink-0 w-44">
              <span
                className="inline-block text-[2rem] font-black tracking-[-0.02em] text-[#34B87D] pl-3 border-l-4 border-[#34B87D]"
                style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
              >
                /triage
              </span>
            </div>
            <div className="pt-1">
              <p className="text-base leading-relaxed text-[#484540] dark:text-[#b0ada6]">
                Scan email, messages, calendar. Process inbox to zero. Surface what&apos;s urgent
                before you start your day.
              </p>
            </div>
          </div>

          {/* /plan */}
          <div className="border-t border-b border-[#e0ded8] dark:border-[#2e2e2e] py-7 flex items-start gap-10">
            <div className="shrink-0 w-44">
              <span
                className="inline-block text-[2rem] font-black tracking-[-0.02em] text-[#D4A12A] pl-3 border-l-4 border-[#D4A12A]"
                style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
              >
                /plan
              </span>
            </div>
            <div className="pt-1">
              <p className="text-base leading-relaxed text-[#484540] dark:text-[#b0ada6]">
                Build today&apos;s sprint. Max 3–5 items. Timebox each one. The agent enforces a
                hard limit so you finish with wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[#e0ded8] dark:bg-[#2e2e2e]" />
      </div>

      {/* Platforms */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        {/* Section label with extending line */}
        <div className="flex items-center gap-4 mb-6">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#7d7a72] dark:text-[#858380] shrink-0">
            Works With Your AI Tool
          </p>
          <div className="flex-1 h-px bg-[#e0ded8] dark:bg-[#2e2e2e]" />
        </div>
        <div className="flex items-center flex-wrap">
          {['Claude Code', 'Gemini CLI', 'OpenAI Codex', 'Cursor'].map((platform, i, arr) => (
            <span key={platform} className="flex items-center">
              <span className="text-lg font-bold text-[#1a1a18] dark:text-[#e8e6e2] opacity-60 hover:opacity-90 transition-opacity">
                {platform}
              </span>
              {i < arr.length - 1 && (
                <span className="mx-4 text-[#e0ded8] dark:text-[#2e2e2e] font-normal select-none">·</span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[#e0ded8] dark:bg-[#2e2e2e]" />
      </div>

      {/* Modules */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        {/* Section label with extending line */}
        <div className="flex items-center gap-4 mb-5">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#7d7a72] dark:text-[#858380] shrink-0">
            Optional Modules
          </p>
          <div className="flex-1 h-px bg-[#e0ded8] dark:bg-[#2e2e2e]" />
        </div>
        <h2
          className="text-[2.25rem] leading-tight font-black tracking-[-0.02em] text-[#1a1a18] dark:text-[#e8e6e2] mb-8"
          style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
        >
          Layer on what matters to you.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {[
            {
              color: '#34B87D',
              label: 'Health',
              name: 'Health Data',
              description: 'Wearable data, morning briefings, experiment tracking.',
            },
            {
              color: '#5B8DEF',
              label: 'Mind',
              name: 'Learning System',
              description: 'Curriculum architecture, study sessions, spaced repetition.',
            },
            {
              color: '#D4A12A',
              label: 'People',
              name: 'Relationships',
              description: 'Contact tracking, decay monitoring, meeting prep.',
            },
            {
              color: '#B87550',
              label: 'Money',
              name: 'Finances',
              description: 'Budget awareness, financial reviews, goal tracking.',
            },
            {
              color: '#D4A12A',
              label: 'Voice',
              name: 'Brand & Content',
              description: 'Voice guide, content queue, audience building.',
            },
            {
              color: '#5B8DEF',
              label: 'Growth',
              name: 'Career',
              description: '1:1 prep, stakeholder management, role transitions.',
            },
          ].map((module) => (
            <div
              key={module.name}
              className="border-t border-[#e0ded8] dark:border-[#2e2e2e] py-5 pr-8"
            >
              <span
                className="inline-block font-mono text-xs tracking-[0.15em] uppercase mb-2 px-2 py-0.5 font-bold"
                style={{
                  color: module.color,
                  backgroundColor: `${module.color}1a`,
                }}
              >
                {module.label}
              </span>
              <h3 className="text-base font-extrabold text-[#1a1a18] dark:text-[#e8e6e2] mb-1 tracking-[-0.01em]">
                {module.name}
              </h3>
              <p className="text-sm text-[#7d7a72] dark:text-[#858380] leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[#e0ded8] dark:bg-[#2e2e2e]" />
      </div>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2
          className="text-[2.25rem] leading-tight font-black tracking-[-0.02em] text-[#1a1a18] dark:text-[#e8e6e2] mb-2"
          style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
        >
          Clone it. Run /onboard. Go.
        </h2>
        <p className="text-lg text-[#484540] dark:text-[#b0ada6] mb-7">
          You&apos;ll be operational in one sitting.
        </p>
        <div className="bg-[#1e1e1e] dark:bg-[#0d0d0d] border border-[#2e2e2e] text-[#e8e6e2] p-6 font-mono text-sm leading-relaxed max-w-xl">
          <div>
            <span className="text-[#858380]">$</span>{' '}
            <span className="text-[#34B87D]">git clone</span>{' '}
            <span className="text-[#e8e6e2]">https://github.com/jordantcarlisle/personal-os.git</span>
          </div>
          <div>
            <span className="text-[#858380]">$</span>{' '}
            <span className="text-[#5B8DEF]">cd</span>{' '}
            <span className="text-[#e8e6e2]">personal-os</span>
          </div>
          <div className="mt-2 text-[#858380]"># Then run /onboard in your AI tool</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-8 border-t border-[#e0ded8] dark:border-[#2e2e2e]">
        <p className="font-mono text-xs tracking-wide text-[#7d7a72] dark:text-[#858380]">
          Jordan Carlisle — Personal OS
        </p>
      </footer>

    </div>
  )
}