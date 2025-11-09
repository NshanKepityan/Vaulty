export default function SectionHeaderHighliteLeft({ highlight, title }: { highlight: string; title?: string }) {
return (
  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
    {highlight && <span className="text-cyan-300">{highlight}</span>}{" "}
	{title}
  </h2>
)}