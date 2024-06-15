interface Props {
  title: string;
}

export default function SectionHeader({ title }: Props) {
  return (
    <div className="flex items-center space-x-2 mb-8">
      <span className="size-3 bg-primary rounded-full" />
      <span className="font-bold text-sm lg:text-lg uppercase">{title}</span>
      <span className="size-3 bg-primary rounded-full" />
    </div>
  );
}
