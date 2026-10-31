"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

type ConceptDialogProps = {
    onClose: () => void;
};

export function ConceptDialog({ onClose }: ConceptDialogProps) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-110 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="concept-title"
                className="dossier-enter max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-y-auto rounded-xl border border-white/10 bg-[#111b1b]/95 text-white shadow-[0px_24px_64px_-16px_rgba(0,0,0,0.65)] backdrop-blur-xl"
            >
                <header className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
                    <div className="font-mono text-[10px] tracking-[0.16em] text-emerald-200/65">CRF / CONCEPT FILE</div>
                    <button
                        type="button"
                        aria-label="Close concept"
                        title="Close"
                        autoFocus
                        onClick={onClose}
                        className="flex size-8 items-center justify-center rounded-md text-white/55 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-emerald-200"
                    >
                        <X size={18} />
                    </button>
                </header>

                <div className="space-y-6 px-5 py-6 sm:px-7 sm:py-7">
                    <div>
                        <p className="mb-2 text-[10px] font-semibold tracking-[0.16em] text-emerald-200/65">THE IDEA</p>
                        <h2 id="concept-title" className="text-2xl font-semibold leading-tight sm:text-3xl">A candidate dossier, presented as a desktop.</h2>
                        <p className="mt-3 text-sm leading-6 text-white/70">
                            This portfolio reimagines my profile as an interactive desktop, where each window reveals a different part of my work. Instead of promising the quickest possible scan, it makes exploring my experience, skills, and projects feel like opening a candidate dossier at a research station.
                        </p>
                    </div>

                    <div className="border-t border-white/10 pt-5">
                        <p className="mb-2 text-[10px] font-semibold tracking-[0.16em] text-emerald-200/65">THE CRF PREMISE</p>
                        <p className="text-sm leading-6 text-white/70">
                            Candidate Research Federation (CRF) is a fictional agency and a playful nod to the F*I. Here, you are the recruiter, the portfolio is your research system, and the candidate is the target. The loading sequence shows CRF assembling that candidate dossier before your review.
                        </p>
                    </div>
                </div>

                <footer className="border-t border-white/10 px-5 py-3 text-right font-mono text-[9px] tracking-[0.12em] text-white/35 sm:px-7">
                    PERSONNEL INTELLIGENCE DIVISION · FILE CRF-01
                </footer>
            </section>
        </div>
    );
}