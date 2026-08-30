import {User,Folder, Briefcase,Code, Mail} from "lucide-react";

type StartMenuProps = {
    visible?: boolean;
}

export function StartMenu({ visible }: StartMenuProps) {
    if (!visible) return null;

    return (
        <div className="w-72 h-60 bg-gradient-to-r from-black/40 to-black/20 rounded-2xl shadow-[0px_18px_40px_-12px_rgba(0,0,0,0.40)] outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-md inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="self-stretch flex-1 px-2 py-3 flex flex-col justify-start items-start gap-1">
                <div className="group self-stretch h-10 px-3 py-2 rounded-[10px] inline-flex justify-start items-center gap-3 transition-all duration-200 hover:bg-white/10 hover:outline-white/20">
                    <Folder className="text-white"/>
                    <div className="justify-start text-white/70 text-sm font-medium transition-colors duration-200 group-hover:text-white group-hover:font-semibold">
                        Projects
                    </div>
                </div>
                <div className="group self-stretch h-10 px-3 py-2 rounded-[10px] inline-flex justify-start items-center gap-3 transition-all duration-200 hover:bg-white/10 hover:outline-white/20">
                    <User className="text-white"/>
                    <div className="justify-start text-white/70 text-sm font-medium transition-colors duration-200 group-hover:text-white group-hover:font-semibold">
                        About Me
                    </div>
                </div>
                <div className="group self-stretch h-10 px-3 py-2 rounded-[10px] inline-flex justify-start items-center gap-3 transition-all duration-200 hover:bg-white/10 hover:outline-white/20">
                    <Briefcase className="text-white"/>
                    <div className="justify-start text-white/70 text-sm font-medium transition-colors duration-200 group-hover:text-white group-hover:font-semibold">
                        Experience
                    </div>
                </div>
                <div className="group self-stretch h-10 px-3 py-2 rounded-[10px] inline-flex justify-start items-center gap-3 transition-all duration-200 hover:bg-white/10 hover:outline-white/20">
                    <Code className="text-white"/>
                    <div className="justify-start text-white/70 text-sm font-medium transition-colors duration-200 group-hover:text-white group-hover:font-semibold">
                        Skills
                    </div>
                </div>
                <div className="group self-stretch h-10 px-3 py-2 rounded-[10px] inline-flex justify-start items-center gap-3 transition-all duration-200 hover:bg-white/10 hover:outline-white/20">
                    <Mail className="text-white"/>
                    <div className="justify-start text-white/70 text-sm font-medium transition-colors duration-200 group-hover:text-white group-hover:font-semibold">
                        Contact
                    </div>
                </div>
            </div>
        </div>
    );
}