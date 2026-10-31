import { FolderKanban } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";

export function Projects() {
    const [activeProjectKey, setActiveProjectKey] = useState(projects[0]?.key);
    const activeProject = projects.find((project) => project.key === activeProjectKey);
    const activeProjectIndex = projects.findIndex((project) => project.key === activeProjectKey);
    const activeProjectButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (window.matchMedia("(max-width: 767px)").matches) {
            activeProjectButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
    }, [activeProjectKey]);

    return (
        <div className="flex h-full w-full min-w-0 flex-col text-white md:flex-row">
            <aside className="flex max-h-32 w-full shrink-0 flex-col overflow-hidden border-b border-white/10 p-2 md:max-h-none md:w-56 md:overflow-y-auto md:border-b-0 md:border-r md:p-3">
                <div className="flex items-center justify-between gap-2 px-2 py-2 text-xs text-white/55">
                    <span className="flex items-center gap-2"><FolderKanban size={16} /> Projects</span>
                    <span className="font-mono text-[10px] text-white/40">{String(activeProjectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
                </div>
                <div className="my-1 border-t border-white/10 md:my-2" />
                <div className="flex min-w-0 flex-1 flex-row snap-x snap-mandatory scroll-smooth gap-1 overflow-x-auto md:flex-col md:snap-none md:overflow-x-visible">
                    {projects.map((project) => (
                        <button key={project.key} ref={activeProjectKey === project.key ? activeProjectButtonRef : null} type="button" aria-pressed={activeProjectKey === project.key} onClick={() => setActiveProjectKey(project.key)} className={`w-40 shrink-0 snap-center rounded-md px-2 py-2 text-left text-xs leading-4 transition-colors md:w-full ${activeProjectKey === project.key ? "bg-white/12 text-white" : "text-white/60 hover:bg-white/8 hover:text-white"}`}>
                            {project.name}
                        </button>
                    ))}
                </div>
            </aside>

            <section className="min-h-0 min-w-0 flex-1 overflow-y-auto p-3 md:p-6">
                {activeProject && <div className="flex flex-col gap-5">
                    <header className="border-b border-white/10 pb-4">
                        <div className="text-xs text-emerald-300">{activeProject.type}</div>
                        <h2 className="mt-1 text-xl font-semibold sm:text-2xl">{activeProject.name}</h2>
                    </header>
                    <p className="text-sm leading-6 text-white/75">{activeProject.summary}</p>
                    <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase text-white/45">Highlights</h3>
                        <ul className="flex flex-col gap-2">
                            {activeProject.highlights.map((highlight) => <li key={highlight} className="flex gap-2 text-sm leading-5 text-white/75"><span className="text-emerald-300">•</span><span>{highlight}</span></li>)}
                        </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {activeProject.stack.map((technology) => <span key={technology} className="rounded border border-white/10 px-2 py-1 text-xs text-white/65">{technology}</span>)}
                    </div>
                </div>}
            </section>
        </div>
    );
}