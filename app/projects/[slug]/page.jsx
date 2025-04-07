import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import markdownToHtml from "@/lib/markdownToHtml";
import ProjectClient from "@/components/sections/ProjectClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { getProjectSlugs } = await import("@/lib/projects");
  const slugs = getProjectSlugs();

  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }));
}

export default async function ProjectPage(props) {
  const { slug } = await props.params;
  const { getProjectBySlug } = await import("@/lib/projects");

  let contentData;
  try {
    contentData = getProjectBySlug(slug);
  } catch (error) {
    return notFound();
  }

  if (!contentData || !contentData.meta) {
    return notFound();
  }

  const html = await markdownToHtml(contentData.content);

  return <ProjectClient meta={contentData.meta} html={html} />;
}
