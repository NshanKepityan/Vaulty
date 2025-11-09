export default function SectionHeader({ title, highlight }: { title: string; highlight?: string }) {
return (
  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
    {title}{" "}
    {highlight && <span className="text-cyan-300">{highlight}</span>}
  </h2>
);
}