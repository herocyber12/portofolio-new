import { CardWindow } from "@/components/CardWindow"
export function UseCase() {
    return (
        <CardWindow title="Explorer – Use Cases Viewer">
            <div className="w-72 self-stretch px-4 py-5 inline-flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-zinc-500 text-xs font-bold font-['Inter'] uppercase">System Artifacts</div>
                <div className="self-stretch px-3 py-2.5 bg-black/0 rounded-md inline-flex justify-start items-center gap-3">
                    <div className="justify-start text-zinc-500 text-xs font-bold">[+]</div>
                    <div className="flex-1 justify-start text-zinc-500 text-xs font-normal line-clamp-1">OP_AWS_Cost_Optim.dat</div>
                </div>
                <div className="self-stretch px-3 py-2.5 bg-black/0 rounded-md inline-flex justify-start items-center gap-3">
                    <div className="justify-start text-zinc-500 text-xs font-bold">[+]</div>
                    <div className="flex-1 justify-start text-zinc-500 text-xs font-normal line-clamp-1">ESP32_Incubator.sys</div>
                </div>
                <div className="self-stretch px-3 py-2.5 bg-neutral-800 rounded-md inline-flex justify-start items-center gap-3">
                    <div className="justify-start text-emerald-400 text-xs font-bold">[!]</div>
                    <div className="flex-1 justify-start text-zinc-200 text-xs font-bold line-clamp-1">INCIDENT_SQL_Vuln.log</div>
                </div>
                <div className="self-stretch px-3 py-2.5 bg-black/0 rounded-md inline-flex justify-start items-center gap-3">
                    <div className="justify-start text-zinc-500 text-xs font-bold">[&gt;]</div>
                    <div className="flex-1 justify-start text-zinc-500 text-xs font-normal line-clamp-1">Tauri_Migration.exe</div>
                </div>
            </div>
            <div className="flex-1 self-stretch px-8 py-6 inline-flex flex-col justify-start items-start gap-4">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch justify-start text-zinc-200 text-sm font-bold">[ SYSTEM LOG ] // INCIDENT &amp; RESOLUTION RECORD</div>
                    <div className="self-stretch justify-start text-gray-500 text-xs font-normal">========================================================================</div>
                </div>
                <div className="self-stretch pb-2 flex flex-col justify-start items-start gap-1.5">
                    <div className="self-stretch inline-flex justify-start items-start gap-3">
                        <div className="w-24 justify-start text-zinc-500 text-xs font-normal">CASE ID</div>
                        <div className="flex-1 justify-start text-zinc-200 text-xs font-normal">: #SQL-VULN-01</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start gap-3">
                        <div className="w-24 justify-start text-zinc-500 text-xs font-normal">SUBJECT</div>
                        <div className="flex-1 justify-start text-zinc-200 text-xs font-normal">: Endpoint API Database Enumeration</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start gap-3">
                        <div className="w-24 justify-start text-zinc-500 text-xs font-normal">STATUS</div>
                        <div className="flex-1 justify-start text-emerald-400 text-xs font-bold">: [ RESOLVED ]</div>
                    </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch pt-3 pb-1 inline-flex justify-start items-start gap-2">
                            <div className="justify-start text-emerald-400 text-sm font-bold">&gt;</div>
                            <div className="flex-1 justify-start text-zinc-200 text-sm font-bold">01. THE PROBLEM</div>
                        </div>
                        <div className="self-stretch justify-start text-zinc-200 text-xs font-normal leading-5">Ditemukan anomali pada respons parameter API backend. Input yang tidak divalidasi memungkinkan manipulasi kueri, membuka celah untuk enumerasi skema database dan potensi kebocoran metadata.</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                        <div className="self-stretch pt-3 pb-1 inline-flex justify-start items-start gap-2">
                            <div className="justify-start text-emerald-400 text-sm font-bold">&gt;</div>
                            <div className="flex-1 justify-start text-zinc-200 text-sm font-bold">02. THE FIX (SOLUTION)</div>
                        </div>
                        <div className="self-stretch pl-4 flex flex-col justify-start items-start gap-1">
                            <div className="self-stretch justify-start text-zinc-200 text-xs font-normal leading-5">• Refactoring endpoint API untuk mengimplementasikan Parameterized Queries (Prepared Statements).</div>
                            <div className="self-stretch justify-start text-zinc-200 text-xs font-normal leading-5">• Menambahkan layer validasi input ketat (strict type-checking) sebelum data mencapai ORM/Database.</div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                        <div className="self-stretch pt-3 pb-1 inline-flex justify-start items-start gap-2">
                            <div className="justify-start text-emerald-400 text-sm font-bold">&gt;</div>
                            <div className="flex-1 justify-start text-zinc-200 text-sm font-bold">03. PROS &amp; CONS</div>
                        </div>
                        <div className="self-stretch pl-4 flex flex-col justify-start items-start gap-1.5">
                            <div className="self-stretch justify-start"><span className="text-emerald-400 text-xs font-bold leading-5">[+] PROS: </span><span className="text-zinc-200 text-xs font-normal leading-5">Menutup celah injeksi SQL secara total dan meningkatkan integritas data sistem backend.</span></div>
                            <div className="self-stretch justify-start"><span className="text-red-400 text-xs font-bold leading-5">[-] CONS: </span><span className="text-zinc-200 text-xs font-normal leading-5">Membutuhkan waktu ekstra untuk refactoring endpoint lama dan berpotensi memutus kompatibilitas dengan client aplikasi versi terdahulu.</span></div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch pt-3 pb-1 inline-flex justify-start items-start gap-2">
                            <div className="justify-start text-emerald-400 text-sm font-bold">&gt;</div>
                            <div className="flex-1 justify-start text-zinc-200 text-sm font-bold">04. ARCHITECTURAL CONSIDERATION</div>
                        </div>
                        <div className="self-stretch justify-start text-zinc-200 text-xs font-normal leading-5">• Implementasi WAF (Web Application Firewall) level cloud untuk proteksi lapis dua serta audit query berkala.</div>
                    </div>
                </div>
            </div>
        </CardWindow>
    )
}