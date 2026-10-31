export const experience = [
    {
        key: "pt_transformasi_data_digital",
        company: "PT Transformasi Data Digital",
        role: "Software Engineer (Full-time)",
        duration: {
            from: "Nov 2024",
            to: "Present"
        },
        description: "Maintained and developed client websites focused on top-up systems and digital transaction flows using PHP Native OOP, Laravel, and MySQL.",
        technologies: [
            "PHP Native",
            "Laravel",
            "MySQL",
            "REST API",
            "Third-party APIs",
            "Payment Gateway"
        ],
        keyAchievement: [
            "Monitored ad bot performance and ensured smooth client transaction pipelines.",
            "Participated in API development for client integrations and maintained API documentation as requirements and implementations evolved.",
            "Integrated third-party APIs, including Coda and domain provisioning, into client top-up websites.",
            "Established structured discussions with cross-functional teams, reducing miscommunication."
        ]
    },
    {
        key: "toktik",
        company: "TokTik Indonesia",
        role: "Software Engineer (Side Project)",
        duration: {
            from: "August 2025",
            to: "Present"
        },
        description: "Built and maintained the backend using Laravel, Golang, MySQL, and REST APIs for an electricity token and digital top-up platform serving 2,301+ customers.",
        technologies: [
            "Laravel",
            "Golang",
            "Gin",
            "MySQL",
            "Redis",
            "gRPC",
            "Raw SQL",
            "Docker",
            "GitHub Actions",
            "Payment Gateway",
            "API Integration"
        ],
        keyAchievement: [
            "Migrated high-traffic product and transaction endpoints from Laravel to Go, increasing tested throughput from about 50 to 200 requests per second on the same 2-core, 2 GB server, with resource use reaching about 95% at peak load.",
            "Implemented clean architecture with repository and service layers, raw SQL, token-based authentication and authorization, and gRPC callbacks between Laravel and Go services.",
            "Handled asynchronous payment gateway and digital product aggregator callbacks, including delayed or missing callbacks, with idempotent transaction processing.",
            "Cached product data and authenticated user profiles as JSON in Redis with TTL-based expiry to reduce MySQL reads.",
            "Added automated unit tests to CI/CD before Docker builds and deployment to Alibaba Cloud.",
            "Built the TokTik Agent portal with Next.js, integrating Go APIs for withdrawal and redemption flows."
        ]
    },
    {
        key: "pt_umbi_sgsgo",
        company: "PT UMBI Teknologi Indonesia",
        role: "Software Engineer (Freelance / Project-based)",
        duration: {
            from: "Mar 2025",
            to: "Aug 2025"
        },
        description: "Led maintenance, optimization, and development of the Solo Raya Great Sale event website using Laravel and MySQL.",
        technologies: [
            "Laravel",
            "MySQL",
            "Database Optimization",
            "Team Leadership"
        ],
        keyAchievement: [
            "Optimized the database across 23,000+ merchants, 5 million+ transactions, and 212,041 users through indexing and query optimization.",
            "Managed data and monitored infrastructure stability.",
            "Planned and delegated tasks based on team capacity and skill.",
            "Coordinated with the admin team on user and tenant issues, improving report turnaround and team collaboration."
        ]
    },
    {
        key: "pt_umbi_solo_raya",
        company: "PT UMBI Teknologi Indonesia",
        role: "Software Engineer (Freelance / Project-based)",
        duration: {
            from: "Apr 2024",
            to: "Jul 2024"
        },
        description: "Maintained and developed the Solo Raya Great Sale event website.",
        technologies: [
            "PHP",
            "Laravel",
            "JavaScript",
            "MySQL"
        ],
        keyAchievement: [
            "Updated UI and fixed bugs and errors.",
            "Added new features based on event requirements.",
            "Ensured consistent website performance."
        ]
    }
];