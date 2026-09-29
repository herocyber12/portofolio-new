import { Folder } from "lucide-react";
import { useState } from "react";
import {experience as Data} from '@/lib/experience';
import { CardWindow } from "@/components/CardWindow";

export function Experience() {
    const [activeFolder, setActiveFolder] = useState<string | undefined>()

    const changeFolder = (folder:string) => {
        setActiveFolder(folder)
    }
    
    return (
        <CardWindow title="Explorer - Experience (Krisna Joko Purjianto)"> 
            <div className="w-72 self-stretch px-3 py-5 border-r border-white/10 inline-flex flex-col justify-start items-start gap-1.5">
                    <div className="self-stretch px-3 py-2 rounded-lg inline-flex justify-start align-middle items-center gap-2.5">

                        <Folder className="text-white/60" />
                        <div className="flex-1 justify-start align-middle text-white/60 text-xs font-normal line-clamp-1">Experience</div>
                    </div>
                    <div className="self-stretch h-0 border border-white/10"></div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        {Data && Data.map((item,idx) => (
                            <div key={idx} className={`group self-stretch cursor-pointer px-3 py-2 rounded-lg inline-flex justify-start items-center gap-2.5 hover:bg-white/10 hover:outline-white/20 ${activeFolder == item.key ? 'bg-white/10 outline-white/20' : ''}`} onClick={()=>changeFolder(item.key)}>
                                <Folder className={`group-hover:text-white group-hover:font-semibold ${activeFolder == item.key ? 'text-white font-semibold':'text-white/60'}`}/>
                                <div className={`flex-1 justify-start text-xs font-normal line-clamp-1 group-hover:text-white group-hover:font-semibold ${activeFolder == item.key ? 'text-white font-semibold':'text-white/60'}`}>{item.duration.from} - {item.duration.to}_{item.company}</div>
                            </div>
                        ))}

                    </div>
                </div>

                {activeFolder && Data ? Data.map((item, idx) => (
                    <div key={idx} className={`flex-1 self-stretch px-6 pt-4 pb-6 flex-col justify-start items-start gap-5 ${activeFolder && activeFolder == item.key ? 'inline-flex' : 'hidden'
                        }`}>
                        <div className="self-stretch flex flex-col justify-start items-start gap-1">
                            <div className="self-stretch justify-start text-white text-2xl font-bold">{item.company} ({item.duration.from} - {item.duration.to})</div>
                            <div className="self-stretch h-0 border border-white/10"></div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-3">
                            <div className="self-stretch justify-start">
                                <span className="text-white text-sm font-bold leading-5">
                                    Role:
                                </span>
                                <span className="text-gray-200 text-sm font-normal leading-5">
                                    {item.role}
                                </span>
                            </div>
                            <div className="self-stretch justify-start">
                                <span className="text-white text-sm font-bold leading-5">
                                    Duration:
                                </span>
                                <span className="text-gray-200 text-sm font-normal leading-5">
                                    {item.duration.from} - {item.duration.to}
                                </span>
                            </div>
                            <div className="self-stretch justify-start">
                                <span className="text-white text-sm font-bold leading-5">
                                    Description:
                                </span>
                                <span className="text-gray-200 text-sm font-normal leading-5">
                                    {item.description}
                                </span>
                            </div>
                            <div className="self-stretch justify-start">
                                <span className="text-white text-sm font-bold leading-5">
                                    Technologies:
                                </span>
                                <span className="text-gray-200 text-sm font-normal leading-5">
                                    {item.technologies && item.technologies.map((e, idx) => (
                                        <span key={idx}>
                                            {e.charAt(0).toUpperCase() + e.slice(1)}
                                            {idx < item.technologies.length - 1 && ", "}
                                        </span>
                                    ))}
                                </span>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-3">
                            <div className="self-stretch justify-start text-white text-base font-bold">Key Achievements:</div>
                            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                {item.keyAchivement && item.keyAchivement.map((e, idx) => (
                                    <div key={idx} className="self-stretch inline-flex justify-start items-start gap-2">
                                        <div className="justify-start text-white/60 text-sm font-normal">•</div>
                                        <div className="flex-1 justify-start text-gray-200 text-sm font-normal leading-5">{e.charAt(0).toUpperCase() + e.slice(1)}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )):(
                    <div className="flex-1 flex items-center justify-center text-white/60 h-full">
                        Please select folder
                    </div>
                )}
        </CardWindow>
    );
}