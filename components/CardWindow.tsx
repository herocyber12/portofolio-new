import type { ReactNode } from 'react'

type CardWindowProps = {
    title: string
    children?: ReactNode
    onClose?: () => void
}

export function CardWindow({ title, children, onClose } : CardWindowProps) {
    return (
        <div className="z-50 w-full h-full min-w-0 min-h-0 bg-zinc-900/80 rounded-2xl shadow-[0px_24px_48px_-8px_rgba(0,0,0,0.50)] border border-white/10 backdrop-blur-lg inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="window-titlebar self-stretch h-11 px-3 border-b border-slate-800 inline-flex justify-between items-center cursor-move">
                <div className="w-12 h-px opacity-0" />
                <div className="text-center justify-start text-gray-200 text-xs font-semibold">{title}</div>
                <div className="window-controls flex justify-start items-center gap-2">
                    <div aria-hidden="true" className="size-3 bg-amber-400 rounded-full" />
                    <div aria-hidden="true" className="size-3 bg-green-500 rounded-full" />
                    <button type="button" aria-label={`Close ${title}`} onClick={onClose} className="size-3 bg-red-400 rounded-full hover:bg-red-300 focus-visible:outline-2 focus-visible:outline-white" />
                </div>
            </div>
            <div className="self-stretch flex-1 min-h-0 px-4 py-3.5 flex flex-col justify-start items-start gap-2.5 overflow-auto">
                <div className="self-stretch flex-1 inline-flex justify-start">
                    {children}
                </div>
            </div>
        </div>
    );
}