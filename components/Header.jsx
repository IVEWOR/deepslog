import Link from "next/link";
import Container from "./Container";

export default function Header() {
    return (
        <Container>
            <header className="flex justify-between items-center p-4 border-b border-b-gray-800">
                <div>deepslog</div>
                <nav className="flex space-x-4">
                    <Link href="#">Skills</Link>
                    <Link href="#">Projects</Link>
                    <Link href="#">Experience</Link>
                    <Link href="#">Contact</Link>
                </nav>
            </header>
        </Container>
    )
}