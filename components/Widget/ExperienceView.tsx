import { Folder } from "lucide-react";
import { useState } from "react";
import { experience } from "@/lib/experience";

export function Experience() {
    const [activeKey, setActiveKey] = useState(experience[0]?.key);
    const activeExperience = experience.find((item) => item.key === activeKey);

    return (
        <div className="flex h-full w-full min-w-0 text-white">
            <aside className="w-36 shrink-0 overflow-y-auto border-r border-white/10 p-2 sm:w-56 sm:p-3">
                <div className="flex items-center gap-2 px-2 py-2 text-xs text-white/55">
                    <Folder size={16} /> Experience
                </div>
                <div className="my-2 border-t border-white/10" />
                <div className="flex flex-col gap-1">
                    {experience.map((item) => (
                        <button key={item.key} type="button" onClick={() => setActiveKey(item.key)} className={`flex w-full flex-col gap-1 rounded-md px-2 py-2 text-left transition-colors ${activeKey === item.key ? "bg-white/12 text-white" : "text-white/60 hover:bg-white/8 hover:text-white"}`}>
                            <span className="text-[11px] leading-4">{item.role}</span>
                            <span className="text-[10px] text-white/45">{item.duration.from} – {item.duration.to}</span>
                        </button>
                    ))}
                </div>
            </aside>

            <section className="min-w-0 flex-1 overflow-y-auto p-4 sm:p-6">
                {activeExperience && <div className="flex flex-col gap-5">
                    <header className="border-b border-white/10 pb-4">
                        <div className="text-xs text-emerald-300">{activeExperience.duration.from} – {activeExperience.duration.to}</div>
                        <h2 className="mt-1 text-xl font-semibold sm:text-2xl">{activeExperience.role}</h2>
                        <div className="mt-1 text-sm text-white/60">{activeExperience.company}</div>
                    </header>
                    <p className="text-sm leading-6 text-white/75">{activeExperience.description}</p>
                    <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase text-white/45">Highlights</h3>
                        <ul className="flex flex-col gap-2">
                            {activeExperience.keyAchievement.map((achievement) => <li key={achievement} className="flex gap-2 text-sm leading-5 text-white/75"><span className="text-emerald-300">•</span><span>{achievement}</span></li>)}
                        </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {activeExperience.technologies.map((technology) => <span key={technology} className="rounded border border-white/10 px-2 py-1 text-xs text-white/65">{technology}</span>)}
                    </div>
                </div>}
            </section>
        </div>
    );
}