import { FolderKanban } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/projects";

export function Projects() {
    const [activeProjectKey, setActiveProjectKey] = useState(projects[0]?.key);
    const activeProject = projects.find((project) => project.key === activeProjectKey);

    return (
        <div className="flex h-full w-full min-w-0 text-white">
            <aside className="w-36 shrink-0 overflow-y-auto border-r border-white/10 p-2 sm:w-56 sm:p-3">
                <div className="flex items-center gap-2 px-2 py-2 text-xs text-white/55">
                    <FolderKanban size={16} /> Projects
                </div>
                <div className="my-2 border-t border-white/10" />
                <div className="flex flex-col gap-1">
                    {projects.map((project) => (
                        <button key={project.key} type="button" onClick={() => setActiveProjectKey(project.key)} className={`rounded-md px-2 py-2 text-left text-xs leading-4 transition-colors ${activeProjectKey === project.key ? "bg-white/12 text-white" : "text-white/60 hover:bg-white/8 hover:text-white"}`}>
                            {project.name}
                        </button>
                    ))}
                </div>
            </aside>

            <section className="min-w-0 flex-1 overflow-y-auto p-4 sm:p-6">
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