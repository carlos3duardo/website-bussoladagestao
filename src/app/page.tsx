import { Footer, Header } from '@/components';

export default function Home() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="bg-slate-300 p-4">main</main>
      <Footer />
    </div>
  );
}
