import markdownToHtml from "@/lib/markdownToHtml";
import Navbar from "@/components/sections/Navbar";
import Waves from "@/components/ui/Waves/Waves";

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
  const { content, meta } = getProjectBySlug(slug);
  const html = await markdownToHtml(content);

  return (
    <div className="bg-zinc-900 relative z-0 min-h-screen">
      <Waves
        lineColor="#333"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        className="z-[-1]"
      />
      <Navbar />
      <div className="container text-white mx-auto pt-24 py-8 px-6">
        <h1 className="text-4xl font-bold mb-4">{meta.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
