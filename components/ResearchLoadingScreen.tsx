"use client";

import { useEffect, useState } from "react";

type ResearchLoadingScreenProps = {
    onComplete: () => void;
};

const findings = [
    { label: "EXPERIENCE", value: "2+ years building production web applications" },
    { label: "CORE SYSTEMS", value: "REST APIs · transaction-driven platforms" },
    { label: "ENGINEERING", value: "PHP / Laravel · Golang · MySQL" },
    { label: "SPECIALTIES", value: "Integrations · query optimization · CI/CD" },
];

const researchSteps = [
    "Opening candidate file",
    "Mapping experience timeline",
    "Cross-referencing engineering focus",
    "Preparing desktop briefing",
];

export function ResearchLoadingScreen({ onComplete }: ResearchLoadingScreenProps) {
    const [progress, setProgress] = useState(0);
    const [activeFinding, setActiveFinding] = useState(-1);
    const [isDeepDive, setIsDeepDive] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        const startedAt = Date.now();
        const duration = 4800;
        const interval = window.setInterval(() => {
            const nextProgress = Math.min(100, Math.round(((Date.now() - startedAt) / duration) * 100));
            setProgress(nextProgress);
            setActiveFinding(Math.min(findings.length - 1, Math.floor(nextProgress / 25) - 1));

            if (nextProgress === 100) {
                window.clearInterval(interval);
                setIsDeepDive(true);
            }
        }, 40);

        return () => window.clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!isDeepDive) return;
        const timeout = window.setTimeout(() => setIsLeaving(true), 2400);
        return () => window.clearTimeout(timeout);
    }, [isDeepDive]);

    useEffect(() => {
        if (!isLeaving) return;
        const timeout = window.setTimeout(onComplete, 450);
        return () => window.clearTimeout(timeout);
    }, [isLeaving, onComplete]);

    const skipBriefing = () => {
        setProgress(100);
        setIsLeaving(true);
    };

    const currentStep = Math.min(researchSteps.length - 1, Math.floor(progress / 25));

    return (
        <section
            aria-label="Candidate Research Federation briefing"
            className={`dossier-scanlines fixed inset-0 z-100 flex h-dvh flex-col overflow-hidden bg-[#06100f]/95 text-[#ecf5f1] backdrop-blur-md transition-opacity duration-500 ${isLeaving ? "opacity-0" : "opacity-100"}`}
        >
            <div className="dossier-sweep pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-linear-to-b from-transparent via-emerald-300/[0.07] to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_36%,rgba(15,92,76,0.22),transparent_58%)]" />

            <header className="relative z-20 flex h-16 shrink-0 items-center justify-between border-b border-emerald-100/10 px-5 sm:px-8 lg:px-12">
                <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center border border-emerald-300/50 text-xs font-bold tracking-widest text-emerald-200">CRF</div>
                    <div>
                        <div className="text-[10px] font-semibold tracking-[0.16em] text-white/85 sm:text-xs">CANDIDATE RESEARCH FEDERATION</div>
                        <div className="mt-0.5 text-[9px] tracking-[0.13em] text-emerald-100/40">PERSONNEL INTELLIGENCE DIVISION</div>
                    </div>
                </div>
                <div className="hidden items-center gap-2 text-[10px] tracking-[0.14em] text-emerald-100/50 sm:flex">
                    <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.75)]" />
                    {isDeepDive ? "FINAL REVIEW" : "BRIEFING IN PROGRESS"}
                </div>
            </header>

            <main className="relative z-20 grid min-h-0 flex-1 content-center gap-8 overflow-y-auto px-5 py-7 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:gap-16 lg:px-16 lg:py-10">
                <div className="dossier-enter flex flex-col justify-center" style={{ animationDelay: "80ms" }}>
                    <div role={isDeepDive ? "status" : undefined} aria-live={isDeepDive ? "polite" : undefined} className={`mb-5 flex items-center gap-3 font-medium tracking-[0.2em] transition-all duration-500 ${isDeepDive ? "text-xs text-emerald-100" : "text-[10px] text-emerald-200/60"}`}>
                        <span className="h-px w-8 bg-emerald-300/60" />
                        {isDeepDive ? "DEEP DIVE INTO CANDIDATE" : "CANDIDATE DOSSIER / 01"}
                    </div>
                    <p className="mb-2 font-mono text-[11px] tracking-[0.16em] text-white/40">SUBJECT IDENTIFIED</p>
                    <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">Krisna Joko<br className="hidden sm:block" /> Purjianto</h1>
                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/65">
                        <span>Software Engineer</span>
                        <span className="text-emerald-300/60">/</span>
                        <span>Surakarta, Indonesia</span>
                    </div>

                    <div className="mt-9 max-w-2xl border-l border-emerald-300/40 pl-4 sm:pl-5">
                        <div className="mb-3 text-[10px] font-semibold tracking-[0.16em] text-emerald-100/50">RESEARCH FINDINGS</div>
                        <div aria-live="polite" className="min-h-25.5 space-y-3">
                            {findings.map((finding, index) => (
                                <div key={finding.label} className={`grid grid-cols-[96px_1fr] gap-3 transition-all duration-500 sm:grid-cols-[118px_1fr] ${index <= activeFinding ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"}`}>
                                    <span className="font-mono text-[9px] tracking-[0.12em] text-emerald-200/50">{finding.label}</span>
                                    <span className="text-xs leading-5 text-white/80 sm:text-sm">{finding.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <aside className="dossier-enter flex flex-col justify-center border-t border-emerald-100/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" style={{ animationDelay: "220ms" }}>
                    <div className="mb-5 flex items-center justify-between border-b border-emerald-100/10 pb-3">
                        <span className="font-mono text-[10px] tracking-[0.15em] text-emerald-100/60">CAREER INTELLIGENCE</span>
                        <span className="font-mono text-[9px] text-white/35">CRF / PROFILE</span>
                    </div>

                    <div className="space-y-0">
                        {researchSteps.map((step, index) => {
                            const isComplete = progress >= (index + 1) * 25;
                            const isCurrent = currentStep === index && progress < 100;

                            return (
                                <div key={step} className="flex min-h-12 items-center gap-3 border-b border-white/6 py-3">
                                    <span className={`flex size-5 shrink-0 items-center justify-center border font-mono text-[9px] ${isComplete ? "border-emerald-300/70 text-emerald-200" : isCurrent ? "border-emerald-100/50 text-emerald-100" : "border-white/15 text-white/25"}`}>
                                        {isComplete ? "✓" : `0${index + 1}`}
                                    </span>
                                    <span className={`text-xs ${isComplete ? "text-emerald-100/80" : isCurrent ? "text-white/80" : "text-white/35"}`}>{step}</span>
                                    {isCurrent && <span className="ml-auto font-mono text-[9px] tracking-wider text-emerald-200/70">SCANNING</span>}
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-7 flex items-end justify-between font-mono">
                        <div>
                            <div className="text-[9px] tracking-[0.16em] text-white/35">FILE STATUS</div>
                            <div className="mt-1 text-xs tracking-[0.13em] text-emerald-200">{isDeepDive ? "DEEP DIVE IN PROGRESS" : "ASSEMBLING DOSSIER"}</div>
                        </div>
                        <div className="text-2xl tabular-nums text-emerald-100">{String(progress).padStart(3, "0")}<span className="text-sm text-emerald-100/50">%</span></div>
                    </div>
                    <div
                        role="progressbar"
                        aria-label="Candidate dossier loading progress"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={progress}
                        className="mt-3 h-1 overflow-hidden bg-white/10"
                    >
                        <div className="h-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.65)] transition-[width] duration-200" style={{ width: `${progress}%` }} />
                    </div>
                </aside>
            </main>

            <footer className="relative z-20 flex shrink-0 items-center justify-between gap-4 border-t border-emerald-100/10 px-5 py-4 sm:px-8 lg:px-12">
                <div className="font-mono text-[9px] tracking-[0.08em] text-white/35 sm:text-[10px]">
                    <span className="text-emerald-200/60">CRF</span> · CANDIDATE RESEARCH FEDERATION · PROFILE BRIEFING
                </div>
                <button type="button" onClick={skipBriefing} className="shrink-0 border border-white/15 px-3 py-2 font-mono text-[9px] tracking-[0.12em] text-white/65 transition-colors hover:border-emerald-200/50 hover:text-emerald-100 focus-visible:outline-2 focus-visible:outline-emerald-200 sm:px-4 sm:text-[10px]">
                    SKIP BRIEFING <span aria-hidden="true">→</span>
                </button>
            </footer>
        </section>
    );
}