import './../globals.css';

import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';

import { ScreenSizeViewer } from '@/components/ui';

import AppProviders from '../providers';
import { Footer, Header } from './components';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.APP_NAME || 'Teste DISC - Bússola da Gestão'}`,
    default: process.env.APP_NAME || 'Teste DISC - Bússola da Gestão',
  },
  description:
    'Transformando negócios com educação e inovação. Junte-se a nós para alcançar novos patamares de sucesso.',
  applicationName: 'Bússola da Gestão',
  generator: 'Next.js',
  keywords: [
    'Bússola',
    'Gestão',
    'Gestor',
    'Cultura Vencedora',
    'Inovação',
    'Diagnóstico empresarial',
    'Avaliação de Desempenho',
    'Universidade Corporativa',
    'Net Promoter Score',
    'PDI',
    'Plano de Desenvolvimento Individual',
    'Feedbacks',
    '1:1',
    'DISC',
    'Business Model Canvas',
  ],
  referrer: 'same-origin',
  creator: 'Bússola da Gestão',
  authors: [
    { name: 'Carlos Eduardo', url: 'https://github.com/carlos3duardo' },
  ],
  openGraph: {
    type: 'website',
    title: 'Bússola da Gestão',
    description: 'Transformando negócios com educação e inovação.',
    siteName: 'Bússola da Gestão',
    locale: 'pt-BR',
    url: process.env.APP_URL,
    countryName: 'Brazil',
    images: `${process.env.APP_URL}/images/thumbnail.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bússola da Gestão',
    description: 'Transformando negócios com educação e inovação.',
    images: `${process.env.APP_URL}/images/thumbnail.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${rubik.variable} ${inter.variable} antialiased`}>
        <AppProviders>
          <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
            <Header />
            {children}
            <Footer />
          </div>
          <ScreenSizeViewer />
        </AppProviders>
      </body>
    </html>
  );
}
