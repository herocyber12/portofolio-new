export const projects = [
    {
        key: "portal-nevalis",
        name: "Portal Nevalis",
        type: "ERP System · Professional",
        stack: ["Laravel", "React", "MySQL", "IndexedDB", "SSE", "GitHub Actions"],
        summary: "Led architecture and development of a client ERP system, from technical decisions through delivery and code review.",
        highlights: [
            "Implemented server-sent events for large background imports to avoid controller timeouts.",
            "Added IndexedDB draft autosave for complex forms with synchronization on submission.",
            "Used React on a high-complexity page and introduced repository pattern with team briefings.",
            "Automated deployment to shared hosting through GitHub Actions and SSH."
        ]
    },
    {
        key: "reseller-platform",
        name: "Reseller Self-Service Platform",
        type: "B2B/B2C · Professional",
        stack: ["PHP Native", "MySQL", "JavaScript", "Payment Gateway", "Domain API"],
        summary: "Contributed to reseller onboarding that lets businesses register, pay, and receive a provisioned dashboard and customer website.",
        highlights: [
            "Integrated automated domain provisioning to remove manual setup during onboarding.",
            "Connected end-to-end subscription and registration payment flows.",
            "Platform properties: x45reseller.com and mitranevalis.com."
        ]
    },
    {
        key: "protowa",
        name: "Protowa",
        type: "WhatsApp API Platform · Personal",
        stack: ["React", "Laravel", "Node.js", "Baileys", "PostgreSQL", "SSE"],
        summary: "Designed and built a three-service platform as a solo developer, deployed for real users until a server hardware failure.",
        highlights: [
            "Migrated from Puppeteer-based whatsapp-web.js to the lower-footprint Baileys WebSocket client.",
            "Persisted Baileys credentials and session data in PostgreSQL for survival across restarts.",
            "Delivered real-time QR scan notifications with SSE and Node.js EventEmitter."
        ]
    },
    {
        key: "queue-management",
        name: "Queue Management System",
        type: "Healthcare · Freelance",
        stack: ["Laravel", "MySQL", "JavaScript", "React"],
        summary: "Queue and registration workflows for a health center, supporting online and in-person patients.",
        highlights: [
            "Built dedicated Admin, Poli, Pharmacy, and Cashier role workflows.",
            "Added daily registration limits, WhatsApp status notifications, and QR-coded queue tickets.",
            "Implemented payment validation between Pharmacy and Cashier roles."
        ]
    },
    {
        key: "school-management",
        name: "School Management System",
        type: "Education · Freelance",
        stack: ["Laravel", "MySQL", "JavaScript", "jQuery", "AJAX"],
        summary: "School administration platform covering admissions, academic management, attendance, and teacher workflows.",
        highlights: [
            "Implemented dedicated Admin, Teacher, and Student roles.",
            "Built grade and attendance management with export functionality."
        ]
    },
    {
        key: "makeup-booking",
        name: "Make-Up Booking Service",
        type: "Booking Platform · Freelance",
        stack: ["Laravel", "MySQL", "JavaScript", "jQuery", "AJAX"],
        summary: "Online booking platform for scheduling, payments, and client management for a make-up service business.",
        highlights: [
            "Added availability checks that support multiple services per booking.",
            "Integrated WhatsApp booking notifications and an admin dashboard with revenue reports."
        ]
    },
    {
        key: "atsin",
        name: "atsin.id",
        type: "ATS-Friendly CV Generator · Personal",
        stack: ["Vue.js", "TypeScript", "Node.js", "Playwright", "IndexedDB"],
        summary: "Privacy-first CV generator; personal data stays in browser storage with no login required.",
        highlights: [
            "Generated downloadable PDFs through Node.js and Playwright.",
            "Used the project as a production learning ground for Vue.js and TypeScript."
        ]
    }
];