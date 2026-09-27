import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Languages, Mail, MapPin } from 'lucide-react'

const details = [
  {
    icon: BriefcaseBusiness,
    label: 'Currently',
    value: 'Software Engineer at Truminds Software Systems',
    detail: 'Building 5G Network Management microservices · Since May 2023',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech in Computer Science and Engineering',
    detail: 'IIT Gandhinagar · 2019–2023',
  },
  {
    icon: Languages,
    label: 'Languages',
    value: 'Telugu, Hindi, and English',
    detail: 'Spoken languages',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7fb] text-[#0b1f3a]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6 sm:px-10 sm:py-8 lg:px-16">
        <header className="flex items-center justify-between border-b border-[#d9e1ec] pb-5">
          <a href="#top" className="text-sm font-bold tracking-[0.2em] text-[#0b1f3a]" aria-label="Boddu Giri Raja Sekhar home">
            BGRS
          </a>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#60718a]">Personal calling card</span>
        </header>

        <section id="top" className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:py-20">
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#42638e]">
              <span className="h-px w-8 bg-[#42638e]" /> Hello, I'm
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#0b1f3a] sm:text-7xl lg:text-[5.8rem]">
              Boddu Giri
              <span className="block text-[#42638e]">Raja Sekhar</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#52647c] sm:text-xl">
              Software Engineer building 5G Network Management microservices at Truminds Software Systems.
            </p>
            <a href="mailto:nanisurya257@gmail.com" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#0b1f3a] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#42638e]">
              Let's connect <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <aside className="relative rounded-3xl bg-[#0b1f3a] p-7 text-white shadow-[0_24px_60px_rgba(11,31,58,0.16)] sm:p-9">
            <div className="absolute right-8 top-8 h-16 w-16 rounded-full border border-white/15" />
            <div className="absolute right-12 top-12 h-8 w-8 rounded-full bg-[#7894bb]/30" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#aebed3]">A little more</p>
            <p className="mt-7 text-xl leading-9 text-[#eaf0f8]">
              I work on backend microservices for 5G network management and full-stack web development.
            </p>
            <div className="mt-10 flex items-center gap-3 border-t border-white/15 pt-5 text-sm text-[#aebed3]">
              <MapPin aria-hidden="true" />
              <span>Truminds Software Systems</span>
            </div>
          </aside>
        </section>

        <section aria-label="About me" className="grid gap-4 border-t border-[#d9e1ec] py-8 sm:grid-cols-3 sm:gap-8">
          {details.map(({ icon: Icon, label, value, detail }) => (
            <div key={label} className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#e4ebf4] text-[#42638e]">
                <Icon aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#718198]">{label}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#0b1f3a]">{value}</p>
                <p className="mt-1 text-xs leading-5 text-[#718198]">{detail}</p>
              </div>
            </div>
          ))}
        </section>

        <footer className="flex flex-col gap-3 border-t border-[#d9e1ec] py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <a className="inline-flex items-center gap-2 font-medium text-[#0b1f3a] hover:text-[#42638e]" href="mailto:nanisurya257@gmail.com">
            <Mail aria-hidden="true" /> nanisurya257@gmail.com
          </a>
          <a className="font-medium text-[#42638e] hover:text-[#0b1f3a]" href="https://linkedin.com/in/girirajsekar9" target="_blank" rel="noreferrer">
            linkedin.com/in/girirajsekar9 <ArrowUpRight className="ml-1 inline" aria-hidden="true" />
          </a>
        </footer>
      </div>
    </main>
  )
}
