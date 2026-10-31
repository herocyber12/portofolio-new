import { Folder } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { experience } from "@/lib/experience";

export function Experience() {
    const [activeKey, setActiveKey] = useState(experience[0]?.key);
    const activeExperience = experience.find((item) => item.key === activeKey);
    const activeIndex = experience.findIndex((item) => item.key === activeKey);
    const activeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (window.matchMedia("(max-width: 767px)").matches) {
            activeButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
    }, [activeKey]);

    return (
        <div className="flex h-full w-full min-w-0 flex-col text-white md:flex-row">
            <aside className="flex max-h-32 w-full shrink-0 flex-col overflow-hidden border-b border-white/10 p-2 md:max-h-none md:w-56 md:overflow-y-auto md:border-b-0 md:border-r md:p-3">
                <div className="flex items-center justify-between gap-2 px-2 py-2 text-xs text-white/55">
                    <span className="flex items-center gap-2"><Folder size={16} /> Experience</span>
                    <span className="font-mono text-[10px] text-white/40">{String(activeIndex + 1).padStart(2, "0")} / {String(experience.length).padStart(2, "0")}</span>
                </div>
                <div className="my-1 border-t border-white/10 md:my-2" />
                <div className="flex min-w-0 flex-1 flex-row snap-x snap-mandatory scroll-smooth gap-1 overflow-x-auto md:flex-col md:snap-none md:overflow-x-visible">
                    {experience.map((item) => (
                        <button key={item.key} ref={activeKey === item.key ? activeButtonRef : null} type="button" aria-pressed={activeKey === item.key} onClick={() => setActiveKey(item.key)} className={`flex w-40 shrink-0 snap-center flex-col gap-1 rounded-md px-2 py-2 text-left transition-colors md:w-full ${activeKey === item.key ? "bg-white/12 text-white" : "text-white/60 hover:bg-white/8 hover:text-white"}`}>
                            <span className="text-[11px] leading-4">{item.role}</span>
                            <span className="text-[10px] text-white/45">{item.duration.from} – {item.duration.to}</span>
                        </button>
                    ))}
                </div>
            </aside>

            <section className="min-h-0 min-w-0 flex-1 overflow-y-auto p-3 md:p-6">
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