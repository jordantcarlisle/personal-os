export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] dark:bg-[#161616] text-[#1a1a18] dark:text-[#e8e6e2]">

      {/* Accent bar */}
      <div className="flex h-[4px] w-full">
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
            className="text-sm text-[#1a1a18] dark:text-[#e8e6e2] opacity-60 hover:opacity-100 transition-opacity"
          >
            Docs
          </a>
          <a
            href="https://github.com/jordantcarlisle/personal-os"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#1a1a18] dark:text-[#e8e6e2] opacity-60 hover:opacity-100 transition-opacity"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <h1
          className="text-[4.5rem] leading-[1.0] font-black tracking-[-0.03em] text-[#1a1a18] dark:text-[#e8e6e2] mb-6"
          style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
        >
          Personal OS
        </h1>
        <p className="text-xl leading-relaxed text-[#1a1a18] dark:text-[#e8e6e2] opacity-70 max-w-2xl mb-10 font-normal">
          An AI-powered operating system for your life. OKRs, GTD, PARA, and Atomic Habits —
          integrated with your AI agent.
        </p>
        <div className="flex items-center gap-4">
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

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[#1a1a18] dark:bg-[#e8e6e2] opacity-10" />
      </div>

      {/* Daily Loop */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#1a1a18] dark:text-[#e8e6e2] opacity-40 mb-4">
          The Daily Loop
        </p>
        <h2
          className="text-[2.25rem] leading-tight font-black tracking-[-0.02em] text-[#1a1a18] dark:text-[#e8e6e2] mb-12"
          style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
        >
          Three rituals that compound into clarity.
        </h2>

        <div className="flex flex-col gap-0">
          {/* /reflect */}
          <div className="border-t border-[#1a1a18] dark:border-[#e8e6e2] border-opacity-10 dark:border-opacity-10 py-8 flex items-start gap-10">
            <span
              className="text-[2rem] font-black tracking-[-0.02em] text-[#5B8DEF] whitespace-nowrap w-36 shrink-0"
              style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
            >
              /reflect
            </span>
            <div>
              <p className="text-base leading-relaxed text-[#1a1a18] dark:text-[#e8e6e2] opacity-70">
                Morning intentions, gratitude, energy check. Evening wins, lessons, habit tracking.
                The heartbeat of the system.
              </p>
            </div>
          </div>

          {/* /triage */}
          <div className="border-t border-[#1a1a18] dark:border-[#e8e6e2] border-opacity-10 dark:border-opacity-10 py-8 flex items-start gap-10">
            <span
              className="text-[2rem] font-black tracking-[-0.02em] text-[#34B87D] whitespace-nowrap w-36 shrink-0"
              style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
            >
              /triage
            </span>
            <div>
              <p className="text-base leading-relaxed text-[#1a1a18] dark:text-[#e8e6e2] opacity-70">
                Scan email, messages, calendar. Process inbox to zero. Surface what&apos;s urgent
                before you start your day.
              </p>
            </div>
          </div>

          {/* /plan */}
          <div className="border-t border-b border-[#1a1a18] dark:border-[#e8e6e2] border-opacity-10 dark:border-opacity-10 py-8 flex items-start gap-10">
            <span
              className="text-[2rem] font-black tracking-[-0.02em] text-[#D4A12A] whitespace-nowrap w-36 shrink-0"
              style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
            >
              /plan
            </span>
            <div>
              <p className="text-base leading-relaxed text-[#1a1a18] dark:text-[#e8e6e2] opacity-70">
                Build today&apos;s sprint. Max 3–5 items. Timebox each one. The agent enforces a
                hard limit so you finish with wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[#1a1a18] dark:bg-[#e8e6e2] opacity-10" />
      </div>

      {/* Platforms */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#1a1a18] dark:text-[#e8e6e2] opacity-40 mb-6">
          Works With Your AI Tool
        </p>
        <div className="flex items-center gap-8 flex-wrap">
          {['Claude Code', 'Gemini CLI', 'OpenAI Codex', 'Cursor'].map((platform) => (
            <span
              key={platform}
              className="text-lg font-semibold text-[#1a1a18] dark:text-[#e8e6e2] opacity-50"
            >
              {platform}
            </span>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[#1a1a18] dark:bg-[#e8e6e2] opacity-10" />
      </div>

      {/* Modules */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#1a1a18] dark:text-[#e8e6e2] opacity-40 mb-4">
          Optional Modules
        </p>
        <h2
          className="text-[2.25rem] leading-tight font-black tracking-[-0.02em] text-[#1a1a18] dark:text-[#e8e6e2] mb-12"
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
              className="border-t border-[#1a1a18] dark:border-[#e8e6e2] border-opacity-10 dark:border-opacity-10 py-6 pr-8"
            >
              <span
                className="inline-block font-mono text-xs tracking-[0.15em] uppercase mb-2 px-2 py-0.5"
                style={{
                  color: module.color,
                  backgroundColor: `${module.color}18`,
                }}
              >
                {module.label}
              </span>
              <h3 className="text-base font-bold text-[#1a1a18] dark:text-[#e8e6e2] mb-1">
                {module.name}
              </h3>
              <p className="text-sm text-[#1a1a18] dark:text-[#e8e6e2] opacity-60 leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[#1a1a18] dark:bg-[#e8e6e2] opacity-10" />
      </div>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2
          className="text-[2.25rem] leading-tight font-black tracking-[-0.02em] text-[#1a1a18] dark:text-[#e8e6e2] mb-3"
          style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
        >
          Clone it. Run /onboard. Go.
        </h2>
        <p className="text-lg text-[#1a1a18] dark:text-[#e8e6e2] opacity-60 mb-8">
          You&apos;ll be operational in one sitting.
        </p>
        <div className="bg-[#1a1a18] dark:bg-[#0a0a0a] text-[#e8e6e2] p-6 font-mono text-sm leading-relaxed max-w-xl">
          <div>
            <span className="opacity-40">$</span>{' '}
            <span className="text-[#34B87D]">git clone</span>{' '}
            https://github.com/jordantcarlisle/personal-os.git
          </div>
          <div>
            <span className="opacity-40">$</span>{' '}
            <span className="text-[#5B8DEF]">cd</span> personal-os
          </div>
          <div className="mt-2 opacity-40"># Then run /onboard in your AI tool</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-8 border-t border-[#1a1a18] dark:border-[#e8e6e2] border-opacity-10">
        <p className="font-mono text-xs tracking-wide text-[#1a1a18] dark:text-[#e8e6e2] opacity-30">
          Jordan Carlisle — Personal OS
        </p>
      </footer>

    </div>
  )
}
