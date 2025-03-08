import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "SaaS Analytics Platform",
            description:
                "Developed a real-time analytics dashboard using Next.js, Node.js, and Tailwind CSS. Features secure authentication, interactive charts, and an admin panel to track user engagement and performance.",
            image: "/p.png",
        },
        {
            title: "Custom WordPress Plugin",
            description:
                "Built a WordPress plugin for an e-learning site to manage courses, user tracking, and automated certificates. Utilized React for a smooth UI and REST APIs for efficient data exchange.",
            image: "/p.png",
        },
        {
            title: "Shopify Store Redesign",
            description:
                "Revamped a Shopify store’s layout and checkout flow, boosting sales by 35%. Leveraged Liquid templates, custom CSS, and integrated third-party apps for a seamless user experience.",
            image: "/p.png",
        },
    ];

    return (
        <Container>
            <section className="py-16">
                <h2 className="uppercase font-bold text-lg ">Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {/* Project Card */}
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-xl overflow-hidden"
                        >
                            {/* Image */}
                            <div className="bg-gradient-to-b from-yellow-600 to-yellow-900 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover transition-all hover:scale-125"
                                    width={640}
                                    height={360}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    {project.description}
                                </p>
                                <Link
                                    href="#"
                                    className="text-yellow-800 text-xs font-bold uppercase hover:underline tracking-wider"
                                >
                                    View Project
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    );
}