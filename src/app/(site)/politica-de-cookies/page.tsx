import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <header className="relative flex h-[280px] w-full items-center bg-[url(/images/page-header-politica-de-cookies.jpg)] bg-cover bg-center">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50" />
        <div className="relative container mx-auto text-white">
          <h1 className="text-center text-4xl font-semibold">
            Política de cookies
          </h1>
        </div>
      </header>

      <div className="mx-auto my-8 w-full max-w-[920px] px-4 text-xl">
        <h2 className="indent-12 text-3xl font-bold">1. Introdução</h2>

        <p className="my-8 text-justify indent-12">
          A Bússola da Gestão apresenta por meio desta política, o conceito de
          cookies, o uso dos cookies, e as possibilidades de configurações de
          uso quando você utiliza o nosso site (https://bussoladagestao.com.br),
          incluindo qualquer outro formulário de mídia, canal de mídia e
          aplicativo para celular relacionado ou conectado ao site, visando
          proporcionar uma experiência ainda mais transparente. A qualquer
          momento o Titular poderá revogar a sua autorização quanto à utilização
          dos cookies, acessando as configurações de seu navegador. Contudo,
          caso o Titular não aceite alguns cookies das páginas da Bússola da
          Gestão, certas funcionalidades dos nossos serviços poderão não
          funcionar da maneira correta. Em caso de dúvidas sobre essa política
          de cookies, você pode entrar em contato com o nosso Encarregado de
          Proteção de dados por meio do endereço{' '}
          <a href="mailto:dpo@bussoladagestao.com.br">
            dpo@bussoladagestao.com.br
          </a>
          .
        </p>

        <h2 className="my-8 indent-12 text-3xl font-bold">
          2. Conceito de cookies
        </h2>

        <p className="my-8 text-justify indent-12">
          Cookie é um dado que um site coloca no seu dispositivo para lembrar de
          você quando você o visitar novamente. Assim, os cookies guardam
          informações relacionadas às suas preferências, idioma, localização,
          recorrência das suas sessões, e outras variáveis que nos ajudam a
          entender como o site está sendo usado, visando melhorar a experiência
          dos usuários.
        </p>

        <h2 className="my-8 indent-12 text-3xl font-bold">3. Uso de cookies</h2>

        <p className="my-8 text-justify indent-12">
          Utilizamos cookies próprios e de terceiros no site, os quais podem ser
          classificados quanto à sua temporalidade:
        </p>

        <ul className="my-8 flex list-disc flex-col gap-2 pl-12 text-justify">
          <li>
            <strong>Cookies estritamente necessários:</strong> Estes cookies são
            essenciais para o funcionamento do site. Uma vez que eles permitem a
            navegação e utilização das aplicações, bem como o acesso a áreas
            seguras do site. Assim, sem eles, o nosso site não funcionaria
            corretamente.
          </li>
          <li>
            <strong>Cookies de desempenho:</strong> Estes cookies permitem medir
            quantas vezes uma página foi visitada, bem como saber quais páginas
            são as mais e menos acessadas, de maneira anônima.
          </li>
          <li>
            <strong>Cookies funcionais:</strong> Estes cookies permitem lembrar
            das escolhas feitas pelos usuários do site e visam melhorar a
            facilidade de uso do site.
          </li>
          <li>
            <strong>Cookies de segmentação e e rastreamento:</strong>
            Estes cookies coletam informações de sua visita em nosso site, para
            que as propagandas sejam criadas com base no seu perfil e em seus
            interesses. Normalmente, estes cookies estão atrelados a cookies de
            terceiros. Se você não permitir estes cookies, continuará
            visualizando as propagandas, no entanto, as mesmas não serão
            personalizadas de acordo com as suas preferências.
          </li>
        </ul>

        <p className="my-8 text-justify indent-12">
          Você pode remover ou rejeitar os cookies nas configurações do seu
          navegador. No entanto, essa ação pode afetar a funcionalidade do site.
        </p>

        <p className="my-8 text-justify indent-12">
          Para realizar o gerenciamento de cookies diretamente em seu navegador,
          você pode consultar os links abaixo:
        </p>

        <ul className="my-8 flex list-disc flex-col gap-2 pl-12 text-justify">
          <li>
            <a
              href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=95647"
              target="_blank"
              rel="noreferrer"
            >
              Suporte do navegador Google Chrome
            </a>
          </li>
          <li>
            <a
              href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-yourcomputer?redirectlocale=en-US&redirectslug=Cookies"
              target="_blank"
              rel="noreferrer"
            >
              Suporte do navegador Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/search/results?query=cookies&isEnrichedQuery=false"
              target="_blank"
              rel="noreferrer"
            >
              Suporte do navegador Microsoft Edge / Internet Explorer
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/kb/index?q=cookies&src=globalnav_support&type=organic&page=search&locale=en_US"
              target="_blank"
              rel="noreferrer"
            >
              Suporte do navegador Safari
            </a>
          </li>
        </ul>

        <p className="my-8 text-justify indent-12">
          Para saber mais informações relacionadas ao tratamento de dados
          pessoais, você pode consultar o nosso{' '}
          <Link href="/aviso-de-privacidade">Aviso de Privacidade</Link>.
        </p>

        <p className="my-8 text-center text-sm opacity-80">
          Atualizado em 20/08/2025
        </p>
      </div>
    </main>
  );
}
