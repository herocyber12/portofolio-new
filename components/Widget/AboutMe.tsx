export function AboutMe() {
    return (
        <div className="flex h-full w-full flex-col gap-6 overflow-y-auto p-2 text-white sm:p-5">
            <div className="flex flex-col gap-2">
                <div className="text-xs font-semibold uppercase text-emerald-300">Software Engineer</div>
                <h1 className="text-3xl font-semibold">Krisna Joko Purjianto</h1>
                <p className="max-w-full text-sm leading-6 text-white/70">
                    Software Engineer with 2+ years of experience building and maintaining production-grade web applications, REST APIs, and transaction-driven systems using PHP/Laravel and Golang. Experienced in backend development, third-party integrations, MySQL query optimization, authentication, service migration, and CI/CD, with hands-on ownership from development through production. Comfortable contributing across the stack with JavaScript, Vue.js, React.js, and Next.js, collaborating with cross-functional teams, and working independently on technical problems. Strong interest in building reliable systems, improving performance, and taking ownership of system architecture.
                </p>
            </div>
            

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/60">
                <span>Surakarta, Central Java, Indonesia · Open to relocate</span>
                <span>Bachelor of Information Technology · GPA 3.74</span>
            </div>
        </div>
    );
}