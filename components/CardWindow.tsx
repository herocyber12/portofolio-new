import type { ReactNode } from 'react'

type CardWindowProps = {
    title: string
    children?: ReactNode
    onClose?: () => void
    onMinimize?: () => void
    onToggleMaximize?: () => void
    isMaximized?: boolean
}

export function CardWindow({ title, children, onClose, onMinimize, onToggleMaximize, isMaximized = false } : CardWindowProps) {
    return (
        <div className="z-50 w-full h-full min-w-0 min-h-0 bg-zinc-900/80 rounded-2xl shadow-[0px_24px_48px_-8px_rgba(0,0,0,0.50)] border border-white/10 backdrop-blur-lg inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="window-titlebar self-stretch h-11 px-3 border-b border-slate-800 inline-flex justify-between items-center cursor-move">
                <div className="w-5 h-px shrink-0 opacity-0 sm:w-12" />
                <div className="min-w-0 flex-1 truncate text-center text-xs font-semibold text-gray-200">{title}</div>
                <div className="window-controls flex shrink-0 items-center gap-0 sm:gap-1">
                    <button type="button" aria-label={`Minimize ${title}`} title="Minimize" onClick={onMinimize} className="group flex size-8 shrink-0 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-white sm:size-5">
                        <span aria-hidden="true" className="size-3 rounded-full bg-amber-400 transition-colors group-hover:bg-amber-300" />
                    </button>
                    <button type="button" aria-label={isMaximized ? `Restore ${title}` : `Maximize ${title}`} title={isMaximized ? "Restore" : "Maximize"} onClick={onToggleMaximize} className="group flex size-8 shrink-0 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-white sm:size-5">
                        <span aria-hidden="true" className="size-3 rounded-full bg-green-500 transition-colors group-hover:bg-green-400" />
                    </button>
                    <button type="button" aria-label={`Close ${title}`} title="Close" onClick={onClose} className="group flex size-8 shrink-0 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-white sm:size-5">
                        <span aria-hidden="true" className="size-3 rounded-full bg-red-400 transition-colors group-hover:bg-red-300" />
                    </button>
                </div>
            </div>
            <div className="self-stretch flex-1 min-h-0 min-w-0 px-3 py-3 flex flex-col justify-start items-start gap-2.5 overflow-hidden sm:px-4 sm:py-3.5">
                <div className="self-stretch flex-1 min-h-0 min-w-0 inline-flex justify-start overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
}