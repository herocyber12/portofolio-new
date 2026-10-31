const skillGroups = [
    { name: "Programming Languages", skills: ["PHP", "Golang", "JavaScript", "TypeScript", "Node.js", "HTML5", "SQL"] },
    { name: "Frameworks & Libraries", skills: ["Laravel", "Gin", "React.js", "Next.js", "Vue.js"] },
    { name: "Databases", skills: ["MySQL", "PostgreSQL", "Redis"] },
    { name: "DevOps & Infrastructure", skills: ["Linux", "Git", "GitHub Actions (CI/CD)", "Docker", "Server Deployment", "gRPC", "Alibaba Cloud"] },
    // { name: "AI-Assisted Development", skills: ["ChatGPT", "Claude", "Gemini", "Codex"] },
    { name: "Other", skills: ["Microservices Architecture", "REST API", "Payment Gateways", "Unit Testing", "Agile/Scrum", "SDLC"] },
];

export function Skills() {
    return (
        <div className="h-full w-full overflow-y-auto p-2 text-white sm:p-5">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {skillGroups.map((group) => (
                    <section key={group.name} className="border-t border-white/10 pt-3">
                        <h2 className="mb-3 text-xs font-semibold uppercase text-white/45">{group.name}</h2>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => <span key={skill} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm text-white/80">{skill}</span>)}
                        </div>
                    </section>
                ))}
            </div>
            <div className="mt-7 border-t border-white/10 pt-4 text-sm text-white/65">
                <span className="font-medium text-white">Education</span> · B.IT, University Duta Bangsa Surakarta · GPA 3.74
            </div>
            <div className="mt-3 text-xs text-white/50">Certificate of Excellence · Cybersecurity Engineer Bootcamp · Merdeka Siber Batch #21</div>
            <div className="mt-3 border-t border-white/10 pt-3 text-xs leading-5 text-white/50">
                First-authored publication · LOFIAN Vol. 4 No. 1 (2024): IoT-based household energy monitoring with ESP32 and PZEM-004T sensors.
            </div>
        </div>
    );
}