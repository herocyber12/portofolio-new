"use client";
import { UserRound, BriefcaseBusiness, FolderKanban, Code2, Mail, Info } from "lucide-react";
type StartMenuProps = {
    visible?: boolean;
    openApp: (app: string) => void;
    onOpenConcept: () => void;
}

export function StartMenu({ visible, openApp, onOpenConcept }: StartMenuProps) {
    if (!visible) return null;

    const apps = [
        { id: "about", label: "About Me", icon: UserRound },
        { id: "experience", label: "Experience", icon: BriefcaseBusiness },
        { id: "projects", label: "Projects", icon: FolderKanban },
        { id: "skills", label: "Technical Skills", icon: Code2 },
        { id: "contact", label: "Contact", icon: Mail },
    ];

    return (
        <div className="w-72 rounded-xl border border-white/10 bg-zinc-950/75 p-2 shadow-[0px_18px_40px_-12px_rgba(0,0,0,0.40)] backdrop-blur-xl">
            <div className="px-3 py-2 text-xs font-semibold uppercase text-white/45">Krisna Joko Purjianto</div>
            <div className="flex flex-col gap-1">
                {apps.map(({ id, label, icon: Icon }) => (
                    <button key={id} type="button" onClick={() => openApp(id)} className="group flex h-10 items-center gap-3 rounded-lg px-3 text-left text-white/75 transition-colors hover:bg-white/10 hover:text-white">
                        <Icon size={18} />
                        <span className="text-sm font-medium">{label}</span>
                    </button>
                ))}
            </div>
            <div className="mt-2 border-t border-white/10 pt-2">
                <button type="button" onClick={onOpenConcept} className="group flex h-10 w-full items-center gap-3 rounded-lg px-3 text-left text-white/75 transition-colors hover:bg-white/10 hover:text-white">
                    <Info size={18} />
                    <span className="text-sm font-medium">About the concept</span>
                </button>
            </div>
        </div>
    );
}