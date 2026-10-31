type AboutMeProps = {
    onOpenApp: (app: string) => void;
};

const recruiterGuide = [
    { number: "01", app: "about", title: "Profile", description: "Role, background, and location" },
    { number: "02", app: "experience", title: "Experience", description: "Work history and responsibilities" },
    { number: "03", app: "skills", title: "Skills", description: "Technologies, tools, and methods" },
    { number: "04", app: "projects", title: "Projects", description: "Selected work and outcomes" },
    { number: "05", app: "contact", title: "Contact", description: "Ways to get in touch" },
];

export function AboutMe({ onOpenApp }: AboutMeProps) {
    return (
        <div className="flex h-full w-full flex-col gap-6 overflow-y-auto p-2 text-white sm:p-5">
            <div className="flex flex-col gap-2">
                <div className="text-xs font-semibold uppercase text-emerald-300">Software Engineer</div>
                <h1 className="text-3xl font-semibold">Krisna Joko Purjianto</h1>
                <p className="max-w-full text-sm leading-6 text-white/70">
                    Software Engineer with 2+ years of experience building and maintaining production-grade web applications, REST APIs, and transaction-driven systems using PHP/Laravel and Golang. Experienced in backend development, third-party integrations, MySQL query optimization, authentication, service migration, and CI/CD, with hands-on ownership from development through production. Comfortable contributing across the stack with JavaScript, Vue.js, React.js, and Next.js, collaborating with cross-functional teams, and working independently on technical problems. Strong interest in building reliable systems, improving performance, and taking ownership of system architecture.
                </p>
            </div>

            <nav aria-label="Recruiter quick guide" className="border-t border-white/10 pt-4">
                <div className="mb-3 flex items-baseline justify-between gap-3">
                    <h2 className="text-[11px] font-semibold tracking-[0.12em] text-emerald-200/75">RECRUITER QUICK GUIDE</h2>
                    <span className="text-[10px] text-white/40">A quick route through my profile</span>
                </div>
                <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                    {recruiterGuide.map((item) => (
                        <button key={item.app} type="button" onClick={() => onOpenApp(item.app)} className="group flex items-start gap-3 border-b border-white/[0.07] py-3 text-left transition-colors hover:border-emerald-200/30">
                            <span className="pt-0.5 font-mono text-[10px] text-emerald-200/55">{item.number}</span>
                            <span className="min-w-0">
                                <span className="block text-sm font-medium text-white/85 group-hover:text-emerald-100">{item.title}<span aria-hidden="true" className="ml-2 text-emerald-200/40">→</span></span>
                                <span className="mt-0.5 block text-xs text-white/45">{item.description}</span>
                            </span>
                        </button>
                    ))}
                </div>
            </nav>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/60">
                <span>Surakarta, Central Java, Indonesia · Open to relocate domestically and internationally</span>
                <span>Bachelor of Information Technology · GPA 3.74</span>
            </div>
        </div>
    );
}