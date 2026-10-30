export function AboutMe() {
    return (
        <div className="flex h-full w-full flex-col gap-6 overflow-y-auto p-2 text-white sm:p-5">
            <div className="flex flex-col gap-2">
                <div className="text-xs font-semibold uppercase text-emerald-300">Backend Developer &amp; Team Lead</div>
                <h1 className="text-3xl font-semibold">Krisna Joko Purjianto</h1>
                <p className="max-w-2xl text-sm leading-6 text-white/70">
                    Software engineer with 3+ years of experience building production web applications, APIs, and transaction-driven systems. Focused on reliable backend services, practical security, and measurable performance improvements.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="border-l-2 border-emerald-300/70 pl-3">
                    <div className="text-lg font-semibold">3+ years</div>
                    <div className="text-xs text-white/55">Production software</div>
                </div>
                <div className="border-l-2 border-amber-300/70 pl-3">
                    <div className="text-lg font-semibold">Laravel + Go</div>
                    <div className="text-xs text-white/55">Backend engineering</div>
                </div>
                <div className="border-l-2 border-sky-300/70 pl-3">
                    <div className="text-lg font-semibold">Team Lead</div>
                    <div className="text-xs text-white/55">Co-founder &amp; collaborator</div>
                </div>
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/60">
                <span>Indonesia · Open to relocate to Singapore</span>
                <span>Bachelor of Information Technology · GPA 3.74</span>
            </div>
        </div>
    );
}