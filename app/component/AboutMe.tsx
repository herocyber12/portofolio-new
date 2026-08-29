export function AboutMe() {
    return (
        <div className="z-50 w-full h-full min-w-0 min-h-0 bg-zinc-800 rounded-xl shadow-[0px_18px_40px_-12px_rgba(0,0,0,0.40)] outline outline-1 outline-offset-[-1px] outline-slate-800 inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="self-stretch h-11 px-3 bg-zinc-800 border-b border-slate-800 inline-flex justify-between items-center">
                <div className="w-12 h-px opacity-0" />
                <div className="text-center justify-start text-gray-200 text-xs font-semibold font-['Inter']">Notepad - About me</div>
                <div className="size- flex justify-start items-center gap-2">
                    <div className="size-3 bg-red-400 rounded-full" />
                    <div className="size-3 bg-amber-400 rounded-full" />
                    <div className="size-3 bg-green-500 rounded-full" />
                </div>
            </div>
            <div className="self-stretch flex-1 min-h-0 px-4 py-3.5 bg-zinc-800 flex flex-col justify-start items-start gap-2.5 overflow-auto">
                <div className="self-stretch inline-flex justify-start items-center">
                    <div className="flex-1 min-w-0 justify-start text-white text-sm font-medium font-['Inter']">I am Krisna Joko Purjianto, with 3+ years of experience as Software Engineer......</div>
                    
                </div>
            </div>
        </div>
    );
}