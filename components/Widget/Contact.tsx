import { BriefcaseBusiness, CodeXml, Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
    { label: "Email", value: "krisnajokop@gmail.com", href: "mailto:krisnajokop@gmail.com", icon: Mail },
    // { label: "Phone", value: "+62 851-5607-8295", href: "tel:+6285156078295", icon: Phone },
    { label: "LinkedIn", value: "linkedin.com/in/krisna-jp", href: "https://www.linkedin.com/in/krisna-jp", icon: BriefcaseBusiness },
    { label: "GitHub", value: "github.com/herocyber12", href: "https://github.com/herocyber12", icon: CodeXml },
];

export function Contact() {
    return (
        <div className="flex h-full w-full flex-col gap-5 overflow-y-auto p-2 text-white sm:p-5">
            <div>
                <h2 className="text-xl font-semibold">Get in touch</h2>
                <p className="mt-1 text-sm text-white/55">Surakarta, Central Java, Indonesia · Open to relocate domestically and internationally</p>
            </div>
            <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
                {contactItems.map(({ label, value, href, icon: Icon }) => (
                    <a key={label} href={href} target={href.startsWith("https:") ? "_blank" : undefined} rel={href.startsWith("https:") ? "noreferrer" : undefined} className="group flex items-center gap-4 py-4 transition-colors hover:text-emerald-200">
                        <Icon size={19} className="shrink-0 text-white/50 group-hover:text-emerald-200" />
                        <span className="w-16 shrink-0 text-xs text-white/45">{label}</span>
                        <span className="min-w-0 break-all text-sm">{value}</span>
                    </a>
                ))}
            </div>
            <div className="mt-auto flex items-center gap-2 text-xs text-white/45"><MapPin size={14} /> Indonesia</div>
        </div>
    );
}