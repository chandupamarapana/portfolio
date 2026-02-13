export function SectionHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-12 rounded-full bg-primary" />
    </div>
  )
}
