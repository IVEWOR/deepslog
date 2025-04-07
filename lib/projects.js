import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

const projectsDirectory = path.join(process.cwd(), "projects");

export function getProjectSlugs() {
  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".md"));
}

export function getProjectBySlug(slug) {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: data,
    content,
  };
}
