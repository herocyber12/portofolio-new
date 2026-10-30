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
                <div className="w-12 h-px opacity-0" />
                <div className="text-center justify-start text-gray-200 text-xs font-semibold">{title}</div>
                <div className="window-controls flex justify-start items-center gap-2">
                    <button type="button" aria-label={`Minimize ${title}`} title="Minimize" onClick={onMinimize} className="size-3 bg-amber-400 rounded-full hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-white" />
                    <button type="button" aria-label={isMaximized ? `Restore ${title}` : `Maximize ${title}`} title={isMaximized ? "Restore" : "Maximize"} onClick={onToggleMaximize} className="size-3 bg-green-500 rounded-full hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-white" />
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