import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdArrowDown } from "react-icons/io";

export default function TextButtonWithArrow({ text, link }) {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 border-b border-zinc-800 px-3 pb-9"
    >
      <Link
        className="inline-flex items-center gap-2 border-b-2 border-zinc-500 hover:border-zinc-50 ease-in-out duration-200 font-bold"
        href={link}
      >
        {text} <IoMdArrowDown size="1.4em" className="rotate-225" />
      </Link>
    </motion.div>
  );
}
