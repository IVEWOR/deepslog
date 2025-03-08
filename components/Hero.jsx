import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

export default function Hero() {
    return (
        <Container>
            <section className="py-16">
                <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8">

                    {/* Text Content */}
                    <div className="flex-1 border-l border-gray-400 pl-8">
                        <h1 className="text-3xl font-bold mb-4">
                            Hello, I'm Deepak Jangra!
                        </h1>
                        <p className="text-lg text-gray-700 mb-6">
                            With over 7 years of experience in full stack development,
                            I build fast, reliable, and user-friendly websites that solve real problems.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            <Link
                                href="https://github.com/YourGitHub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-black transition-colors"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.11 3.31 9.44 7.9 10.97.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.22.7-3.91-1.55-3.91-1.55-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.67 1.25 3.31.96.1-.74.4-1.25.72-1.54-2.57-.29-5.27-1.29-5.27-5.72 0-1.26.45-2.3 1.18-3.11-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.19 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.22-1.49 3.19-1.18 3.19-1.18.63 1.58.23 2.75.11 3.04.73.81 1.18 1.85 1.18 3.11 0 4.44-2.71 5.43-5.29 5.72.41.35.77 1.05.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.55 4.58-1.53 7.9-5.86 7.9-10.97C23.5 5.65 18.35.5 12 .5z" />
                                </svg>
                            </Link>

                            <Link
                                href="https://linkedin.com/in/YourLinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-black transition-colors"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M100.28 448H7.4V148.9h92.88zm-46.14-340.9c-29.77 0-53.88-24.11-53.88-53.88A53.88 53.88 0 0154.14 0a53.88 53.88 0 0153.88 53.88c0 29.77-24.11 53.88-53.88 53.88zM447.9 448h-92.68V302.4c0-34.7-.7-79.33-48.35-79.33-48.4 0-55.8 37.8-55.8 76.7V448H158.4V148.9h89V184h1.3c12.4-23.4 42.6-48.3 87.7-48.3 93.8 0 111 61.7 111 142.3V448z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="relative w-[450px] h-[500px] rounded-xl overflow-hidden shadow">
                            <Image
                                src="/deepak.jpg"
                                alt="Deepak Jangra"
                                fill
                                className="object-cover "
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}