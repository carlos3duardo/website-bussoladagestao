export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-primary-500 ring-primary-500 bg-primary-500/10 block rounded-full px-2.5 py-1.5 text-xs leading-none font-bold uppercase ring">
      {children}
    </h2>
  );
}
