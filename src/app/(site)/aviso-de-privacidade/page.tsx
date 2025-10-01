import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <header className="relative flex h-[280px] w-full items-center bg-[url(/images/page-header-aviso-de-privacidade.jpg)] bg-cover bg-center">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50" />
        <div className="relative container mx-auto text-white">
          <h1 className="text-center text-4xl font-semibold">
            Aviso de privacidade e proteção de dados pessoais
          </h1>
        </div>
      </header>

      <div className="mx-auto my-8 w-full max-w-[920px] px-4 text-xl">
        <p className="my-8 text-justify indent-12">
          A BÚSSOLA DO GESTOR LTDA., de natureza Sociedade Empresária Limitada,
          sob CNPJ nº 53.495.402/0001-70, com sede na Av. Rio Grande do Sul, nº
          1345, Sala 210/211 Caixa Postal 248, CEP 58.030-020, Bairro dos
          Estados, João Pessoa, PB, apresenta neste &quot;AVISO DE
          PRIVACIDADE&quot;, voltado para os clientes e ao público em geral, os
          detalhes sobre a obtenção e utilização dos dados pessoais deixados
          pelo Titular ou coletados automaticamente na utilização dos diversos
          sites e serviços da Bússola da Gestão.
        </p>

        <p className="my-8 text-justify indent-12">
          Em caso de dúvidas sobre o aviso de privacidade, sugestões ou
          requisições, por favor, entre em contato com o nosso Encarregado de
          Proteção de Dados por meio do endereço de e-mail:
          dpo@bussoladagestao.com.br.
        </p>

        <h2 className="my-8 indent-12 text-3xl font-bold">
          1. Termos e definições
        </h2>

        <p className="my-8 text-justify indent-12">
          Para um melhor entendimento deste aviso de privacidade, é necessário
          conhecer alguns termos e definições importantes, conforme apresentado
          a seguir:
        </p>

        <ul className="my-8 flex list-disc flex-col gap-2 pl-12 text-justify">
          <li>
            <strong>LGPD:</strong> Denominada como Lei Geral de Proteção de
            Dados (Lei 13.709/2018), é responsável pela regulamentação do
            tratamento de dados pessoais no Brasil.
          </li>
          <li>
            <strong>Dados pessoais:</strong> Qualquer informação relacionada a
            pessoa natural identificada ou identificável. Tendo como exemplos:
            Nome, sobrenome, estado civil, local e data de nascimento, cargo,
            e-mail, telefone e outros.
          </li>
          <li>
            <strong>Dados pessoais sensívels:</strong> São os dados pessoais
            referentes à origem racial ou étnica, convicção religiosa, opinião
            política, filiação a sindicato ou a organização de caráter
            religioso, filosófico ou político, dado referente à saúde ou à vida
            sexual, dado genético ou biométrico, quando vinculado a uma pessoa
            natural.
          </li>
          <li>
            <strong>Titular do dado:</strong> Pessoa natural a quem se referem
            os dados pessoais que são objeto de tratamento. Tendo como exemplos:
            Beneficiários, potenciais clientes, colaboradores, fornecedores,
            terceiros e outros.
          </li>
          <li>
            <strong>Tratamento de dados:</strong> Qualquer operação realizada
            com dados pessoais, tais como: coleta, produção, recepção,
            classificação, utilização, acesso, reprodução, transmissão,
            distribuição, processamento, arquivamento, armazenamento,
            eliminação, avaliação ou controle da informação, modificação,
            comunicação, transferência, difusão ou extração.
          </li>
          <li>
            <strong>Anonimização:</strong> É a utilização de meios técnicos
            razoáveis e disponíveis no momento do tratamento, por meio dos quais
            um dado perde a possibilidade de associação, direta ou indireta, a
            um indivíduo.
          </li>
          <li>
            <strong>Pseudonimização:</strong> Processo de tratamento por meio do
            qual um dado perde a possibilidade de associação, direta ou
            indireta, a um indivíduo, senão pelo uso de informação adicional
            mantida separadamente pelo controlador em ambiente controlado e
            seguro.
          </li>
        </ul>

        <h2 className="my-8 indent-12 text-3xl font-bold">
          2. Coleta de dados
        </h2>

        <p className="my-8 text-justify indent-12">
          Para a prestação dos serviços da Bússola da Gestão, os dados poderão
          ser coletados de três formas, sendo:
        </p>

        <ul className="my-8 flex list-disc flex-col gap-2 pl-12 text-justify">
          <li>
            <strong>Dados pessoais fornecidos diretamente pelo titular:</strong>{' '}
            Serão coletados todos os dados pessoais fornecidos ao acessar um dos
            nossos canais de atendimento ou ao contratar os serviços da Bússola
            da Gestão.
          </li>
          <li>
            <strong>Dados pessoais fornecidos por terceiros:</strong> A coleta
            de dados pode se dá por intermédio de terceiros, sejam parceiros ou
            prestadores de serviços, que possuam relacionamento com o titular.
            Além disso, a Bússola da Gestão pode coletar os dados de bases
            públicas, disponibilizados por autoridades ou terceiros, ou ainda de
            dados tornados públicos pelo titular em websites e redes sociais,
            respeitando a privacidade.
          </li>
          <li>
            <strong>Dados pessoais coletados de forma automática:</strong>{' '}
            Coleta de dados de forma automática por meio de tecnologias padrões
            que são utilizadas com o propósito de melhorar a experiência de
            navegação do Titular nos serviços da empresa, de acordo com suas
            buscas e preferências, tendo como exemplo, os <em>cookies</em>.
          </li>
        </ul>

        <p className="my-8 text-justify indent-12">
          O Titular poderá acessar, atualizar e complementar seus dados, bem
          como solicitar a exclusão dos seus dados coletados pela Bússola da
          Gestão, por meio do e-mail: dpo@bussoladagestao.com.br.
        </p>

        <h2 className="my-8 indent-12 text-3xl font-bold">
          3. Utilização de dados pessoais
        </h2>

        <p className="my-8 text-justify indent-12">
          A utilização dos dados pessoais tratados pela Bússola da Gestão
          depende do relacionamento do Titular com a empresa e pode ter diversas
          finalidades. Assim, segue abaixo as principais finalidades de
          utilização dos dados pessoais:
        </p>

        <ul className="my-8 flex list-disc flex-col gap-2 pl-12 text-justify">
          <li>
            A finalidade predominante da utilização dos dados pessoais é o
            vínculo contratual. Para isso, os dados são utilizados para garantir
            a conformidade dos serviços ofertados ao titular.
          </li>
          <li>
            A Bússola da Gestão pode tratar os dados pessoais para obrigação
            legal ou regulatória.
          </li>
          <li>
            Com o consentimento do titular, os dados podem ser utilizados para
            fins publicitários, como para o envio de informações de marcas,
            produtos, promoções e descontos da Bússola da Gestão, bem como para
            a divulgação de eventos ou para a realização de pesquisas
            relacionadas às suas atividades. Caso não deseje mais receber
            informativos publicitários da Bússola da Gestão, a qualquer momento
            o Titular pode contatar a empresa por meio do Encarregado de
            Proteção de Dados, através e-mail: dpo@bussoladagestao.com.br.
          </li>
          <li>
            A empresa poderá tratar dados pessoais com base em seu legítimo
            interesse, respeitando o limite do quanto é esperado pelo Titular,
            considerando os seus interesses, direitos e liberdades fundamentais.
          </li>
        </ul>

        <h2 className="my-8 indent-12 text-3xl font-bold">
          4. Direito dos titulares
        </h2>

        <p className="my-8 text-justify indent-12">
          De acordo com a legislação nacional aplicável à proteção de dados, são
          direitos dos titulares de dados que podem ser solicitados à Bússola da
          Gestão:
        </p>

        <ul className="my-8 flex list-disc flex-col gap-2 pl-12 text-justify">
          <li>Confirmação da existência de tratamento de dados pessoais;</li>
          <li>Acesso aos dados tratados;</li>
          <li>Correção dos dados incompletos, inexatos ou desatualizados;</li>
          <li>
            Providências para anonimização, bloqueio ou eliminação de dados
            pessoais desnecessários, excessivos ou tratados;
          </li>
          <li>
            Portabilidade dos dados pessoais a outro fornecedor de serviço ou
            produto, mediante requisição expressa.
          </li>
          <li>
            Eliminação dos dados pessoais tratados com o consentimento do
            titular, observadas as exceções (art. 16, LGPD);
          </li>
          <li>
            Recebimento das informações das entidades públicas e privadas com as
            quais a Bússola da Gestão compartilha dados;
          </li>
          <li>
            Informações sobre a possibilidade de não fornecer consentimento e
            sobre as consequências da negativa;
          </li>
          <li>
            Revogação do consentimento, nos termos do § 5º do art. 8º da LGPD.
          </li>
        </ul>

        <p className="my-8 text-justify indent-12">
          As solicitações referentes aos dados pessoais poderão ser realizadas
          por meio do envio de requisição para o Encarregado de Dados da Bússola
          da Gestão via e-mail: dpo@bussoladagestao.com.br. O atendimento a
          estas solicitações será avaliado com base na legislação aplicável pela
          Bússola da Gestão, e na impossibilidade de atendimento, as respostas
          serão justificadas. A Bússola da Gestão procurará atender às
          solicitações no menor tempo possível, contudo, solicitações que
          requerem um maior tempo para análise, como a complexidade das ações da
          solicitação, podem atrasar ou impedir a sua rápida resposta.
        </p>

        <h2 className="my-8 indent-12 text-3xl font-bold">5. Cookies</h2>

        <p className="my-8 text-justify indent-12">
          Um cookie é um dado que um site coloca no seu dispositivo para lembrar
          de você quando você o visitar novamente.
        </p>

        <p className="my-8 text-justify indent-12">
          Para saber mais sobre o gerenciamento de cookies diretamente em seu
          navegador, você pode consultar os links abaixo:
        </p>

        <ul className="my-8 flex list-disc flex-col gap-2 pl-12 text-justify">
          <li>
            <Link
              href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=95647"
              target="_blank"
              rel="noreferrer"
            >
              Suporte do navegador Google Chrome
            </Link>
          </li>
          <li>
            <Link
              href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-yourcomputer?redirectlocale=en-US&redirectslug=Cookies"
              target="_blank"
              rel="noreferrer"
            >
              Suporte do navegador Mozilla Firefox
            </Link>
          </li>
          <li>
            <Link
              href="https://support.microsoft.com/search/results?query=cookies&isEnrichedQuery=false"
              target="_blank"
              rel="noreferrer"
            >
              Suporte do navegador Microsoft Edge / Internet Explorer
            </Link>
          </li>
          <li>
            <Link
              href="https://support.apple.com/kb/index?q=cookies&src=globalnav_support&type=organic&page=search&locale=en_US"
              target="_blank"
              rel="noreferrer"
            >
              Suporte do navegador Safari
            </Link>
          </li>
        </ul>

        <p className="my-8 text-justify indent-12">
          A qualquer momento o Titular poderá revogar a sua autorização quanto à
          utilização dos cookies, acessando as configurações de seu navegador.
          Contudo, caso o Titular não aceite alguns cookies das páginas da
          Bússola da Gestão, certas funcionalidades dos nossos serviços poderão
          não funcionar da maneira correta.
        </p>

        <h2 className="my-8 indent-12 text-3xl font-bold">
          6. Compartilhamento de dados
        </h2>

        <p className="my-8 text-justify indent-12">
          A Bússola da Gestão poderá compartilhar os dados coletadas nas
          seguintes hipóteses:
        </p>

        <ul className="my-8 flex list-disc flex-col gap-2 pl-12 text-justify">
          <li>
            Com empresas parceiras e fornecedores para possibilitar a prestação
            dos serviços aos Titulares;
          </li>
          <li>
            Com autoridades, entidades governamentais ou outros terceiros, para
            cumprir com obrigações legais ou regulamentares, incluindo o
            cumprimento a qualquer lei aplicável, processo judicial ou
            administrativo, bem como para a proteção dos interesses da Bússola
            da Gestão e titulares dos dados pessoais;
          </li>
          <li>
            No caso de transferência de informações para a continuidade dos
            serviços referentes às transações comerciais como fusões, aquisições
            por outra empresa, ou venda de todo ou parte dos ativos da Bússola
            da Gestão.
          </li>
        </ul>

        <h2 className="my-8 indent-12 text-3xl font-bold">
          7. Transferência internacional de dados
        </h2>

        <p className="my-8 text-justify indent-12">
          Os dados pessoais podem ser transferidos para outros países por
          empresas parceiras ou fornecedores da Bússola da Gestão que hospedam
          dados no exterior, respeitando a legislação e/ou regulação vigentes.
        </p>

        <h2 className="my-8 indent-12 text-3xl font-bold">
          8. Retenção de dados
        </h2>

        <p className="my-8 text-justify indent-12">
          Os dados tratados pela Bússola da Gestão serão eliminados quando
          deixarem de ser úteis para as finalidades para os quais foram
          coletados, ou, quando o Titular solicitar a sua exclusão, exceto se a
          sua manutenção for expressamente autorizada por lei ou regulação
          aplicável para o exercício de direito de defesa em processo judicial,
          administrativo ou arbitral, ou ainda, em determinadas situações, no
          legítimo interesse da Bússola da Gestão para evitar fraudes e outras
          violações à legislação.
        </p>

        <h2 className="my-8 indent-12 text-3xl font-bold">
          9. Proteção de dados pessoais
        </h2>

        <p className="my-8 text-justify indent-12">
          A Bússola da Gestão adota medidas de segurança técnicas,
          administrativa e físicas dos seus dados pessoais, o que inclui:
        </p>

        <ul className="my-8 flex list-disc flex-col gap-2 pl-12 text-justify">
          <li>Proteção contra acesso não autorizado e utilização indevida.</li>
          <li>
            Acesso restrito de pessoas ao local onde são armazenadas as
            informações pessoais.
          </li>
          <li>
            Colaboradores, prestadores de serviço e fornecedores que possuem
            contato com os dados pessoais devem se comprometer em manter o
            sigilo dos dados. Assim, a quebra do sigilo acarretará
            responsabilidade civil e o responsável será responsabilizado nos
            moldes da legislação aplicável.
          </li>
        </ul>

        <p className="my-8 text-justify indent-12">
          Além da adoção das medidas técnicas e físicas, a Bússola da Gestão
          também adota medidas administrativas visando a proteção dos dados
          pessoais, por meio de comitês de governança e privacidade dos dados
          pessoais relativos às atividades e processos da empresa.
        </p>

        <p className="my-8 text-justify indent-12">
          Mesmo com essas medidas de segurança, nenhuma transmissão de
          informações é totalmente segura, o que pode acarretar em incidências
          na privacidade e proteção dos dados, de modo que a Bússola da Gestão
          não pode garantir integralmente que todos os dados recebidos ou
          enviados não sejam alvos de acessos indevidos oriundos de métodos
          criados para essa finalidade.
        </p>

        <h2 className="my-8 indent-12 text-3xl font-bold">
          Aviso de atualizações
        </h2>

        <p className="my-8 text-justify indent-12">
          Este Aviso de Privacidade pode ser alterado a qualquer momento pela
          Bússola da Gestão, devido a seu exclusivo critério, aprimoramento da
          segurança, melhoria dos nossos serviços ou para atendimento das
          obrigações legais, regulatórias ou administrativas.
        </p>

        <h2 className="my-8 indent-12 text-3xl font-bold">
          Legislação aplicável
        </h2>

        <p className="my-8 text-justify indent-12">
          Este Aviso de Privacidade é regido, interpretado e executado de acordo
          com as leis da República Federativa do Brasil, especialmente a Lei nº
          13.709/2018.
        </p>

        <p className="my-8 text-center text-sm opacity-80">
          Atualizado em 20/08/2025
        </p>
      </div>
    </main>
  );
}
