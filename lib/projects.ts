export const projects = [
    {
        key: "portal-nevalis",
        name: "Portal Nevalis",
        type: "ERP System · Professional",
        stack: ["Laravel", "React", "MySQL", "IndexedDB", "SSE", "GitHub Actions"],
        summary: "Led end-to-end architecture and development of an ERP system as team lead under PT Transformasi Data Digital, owning technical decisions from system design to client communication and code reviews.",
        highlights: [
            "Implemented SSE for asynchronous background imports, preventing controller timeouts on large data imports.",
            "Used IndexedDB to autosave drafts on complex forms and sync them to the server on submission.",
            "Applied React selectively on one high-complexity page and introduced repository pattern with team briefing sessions.",
            "Set up automated deployment to shared hosting through GitHub Actions and SSH."
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
        summary: "Designed and built a three-stack microservice platform with React, Laravel, and Node.js as the sole developer.",
        highlights: [
            "Migrated from whatsapp-web.js (Puppeteer) to Baileys, a WebSocket-based service with a lower resource footprint.",
            "Solved credential persistence iteratively: moved from impractical file storage to in-memory caching, then persisted ephemeral keys and session data in PostgreSQL so sessions survive restarts.",
            "Implemented real-time QR scan notifications with SSE and Node.js EventEmitter outside the HTTP request cycle."
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
        key: "incubator-system",
        name: "Incubator System",
        type: "IoT Backend",
        stack: ["Golang", "PostgreSQL", "PgBouncer", "Linux", "ESP32", "Vue.js", "TypeScript", "k6"],
        summary: "Architected a multi-device IoT backend to handle high-frequency requests from sensor devices sending data every second.",
        highlights: [
            "Built a Go backend with PostgreSQL and PgBouncer connection pooling; load-tested at 200 req/s on a 4-core, 4 GB server at about 50% CPU usage.",
            "Implemented live sensor data display using Server-Sent Events with a Vue.js and TypeScript dashboard.",
            "Integrated ESP32 devices with the Go REST API over HTTPS for per-second sensor readings."
        ]
    },
    {
        key: "atsin",
        name: "atsin.id",
        type: "ATS-Friendly CV Generator · Personal",
        stack: ["Vue.js", "TypeScript", "Node.js", "Playwright", "IndexedDB"],
        summary: "Built a privacy-first ATS-friendly CV generator using IndexedDB for client-side storage; no login is required and personal data stays in the browser.",
        highlights: [
            "Implemented one-click PDF generation through Node.js and Playwright.",
            "Built with Vue.js and TypeScript as a deliberate production learning ground."
        ]
    }
];