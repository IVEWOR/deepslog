import Container from "./Container"

export default function Skills() {
    const skills = [
        {
            name: "React.js",
            icon: "",
        },
        {
            name: "Next.js",
            icon: "",
        },
        {
            name: "JavaScript",
            icon: "",
        },
        {
            name: "Node.js",
            icon: "",
        },
        {
            name: "Tailwind CSS",
            icon: "",
        },
        {
            name: "MongoDB",
            icon: "",
        },
        {
            name: "Git",
            icon: "",
        },
        {
            name: "WordPress",
            icon: "",
        },
        {
            name: "Shopify",
            icon: "",
        },
        {
            name: "Figma",
            icon: "",
        },
    ]
    return (
        <Container>
            <section className="py-16">
                <div className="flex gap-2 flex-wrap">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-2 bg-gradient border border-gray-400 p-2 py-1 rounded-lg"
                        >
                            <div className="w-6 h-6 bg-gray-200 rounded-full">
                                {skill.icon}
                            </div>
                            <p className="text-sm">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    )
}