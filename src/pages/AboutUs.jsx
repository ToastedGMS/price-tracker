import React from 'react';
import styles from './stylesheets/AboutUs.module.css';

const AboutUs = () => {
	return (
		<div className={styles.container}>
			<section>
				<h1>Sobre o PreçoRadar</h1>

				<h3>O que é o PreçoRadar?</h3>
				<p>
					<strong>PreçoRadar</strong> é uma plataforma que torna os preços de
					bens essenciais mais transparentes e acessíveis para a população. O
					projeto monitora diariamente o valor de itens como café, arroz e
					feijão nos principais supermercados da região de Belo Horizonte. Com
					isso, oferece um panorama claro e confiável da evolução de preços no
					dia a dia do consumidor.
				</p>

				<h3>Por que criei este projeto?</h3>
				<p>
					O PreçoRadar nasceu da necessidade de combater a desinformação e dar
					às pessoas o poder de entender a realidade da sua ida ao mercado. Em
					vez de depender de afirmações políticas, manchetes vagas ou folhetos
					publicitários, o usuário tem acesso direto aos dados reais. É um
					exemplo prático de como a tecnologia pode ser usada para empoderar o
					consumidor e apoiar decisões mais conscientes.
				</p>

				<h3>O que você pode fazer com o PreçoRadar?</h3>
				<p>
					Qualquer pessoa pode acompanhar tendências de preços ao longo do
					tempo, comparar mercados, identificar oportunidades de economia e se
					informar sobre a realidade do custo de vida. Para empresas,
					jornalistas ou analistas de mercado, é uma ferramenta que transforma
					dados brutos em insights práticos e de fácil visualização.
				</p>

				<h3>Resultados concretos e visão futura</h3>
				<p>
					Hoje, o PreçoRadar coleta dados todos os dias de forma automática e
					entrega visualizações acessíveis e interativas. O site é responsivo,
					leve, e fácil de usar, mesmo para quem não tem familiaridade com
					tecnologia. Meus próximos passos incluem filtros por região, inclusão
					de novos produtos e fontes de dados, além de recursos extras para
					análise mais profunda. A missão continua sendo clara: colocar a
					informação certa na palma das suas mãos.
				</p>

				<details className={styles.dropdown}>
					<summary>Para devs e recrutadores</summary>
					<div className={styles.dropdownContent}>
						<h3>Como o PreçoRadar funciona?</h3>
						<p>
							O PreçoRadar é uma aplicação full-stack que automatiza o processo
							de coleta, armazenamento e visualização de preços de produtos
							essenciais. A arquitetura do projeto foi pensada para ser
							escalável, modular e de fácil manutenção.
						</p>

						<p>
							A coleta de dados é feita diariamente por meio de{'  '}
							<strong>web scrapers</strong>
							{'  '}
							personalizados às características técnicas de cada supermercado.
							As informações dos produtos são adquiridas diretamente das APIs
							públicas ou semiabertas dos supermercados, quando disponíveis.;
						</p>

						<p>
							Os dados coletados incluem nome do produto, marca, preço,
							supermercado, disponibilidade e data de coleta. Essas informações
							são normalizadas e salvas em um banco de dados{' '}
							<strong>PostgreSQL</strong> através do
							<strong>Prisma ORM</strong>, com validações e transformações para
							garantir consistência e integridade.
						</p>

						<p>
							O back-end é construído com <strong>Express.js</strong>, servindo
							uma API REST clara e documentada que permite consultas de preços
							médios, históricos por produto, variações por supermercado e
							listagens dos dados mais recentes. A API é usada tanto pelo
							front-end quanto em testes internos. Esta API pode fácilmente ser
							escalada para entregar dados mais específicos ou complexos, como
							consultas por região ou por categoria de produtos.
						</p>

						<p>
							No front-end, utilizo <strong>React</strong> com{' '}
							<strong>TanStack Query</strong>
							para consumo eficiente da API e cache inteligente dos dados. A
							visualização gráfica de tendências é feita com{' '}
							<strong>Recharts</strong>, e a navegação é gerenciada com{' '}
							<strong>React Router DOM</strong>. A interface é responsiva, com
							foco em acessibilidade e performance, e construída com{' '}
							<strong>Vite</strong>
							para um ambiente de build moderno.
						</p>

						<p>
							Além disso, os scrapers são executados diariamente por meio de
							agendamentos automatizados (cron jobs), hospedados na plataforma{' '}
							<strong>Railway</strong>, que também gerencia o deploy do
							front-end, back-end e banco de dados. Isso garante que todo o
							sistema esteja integrado e funcione com mínima intervenção manual.
						</p>

						<p>
							Esse ecossistema foi pensado para facilitar futuras expansões:
							novos supermercados podem ser adicionados com rapidez, a modelagem
							de dados permite análises flexíveis e o código está organizado
							para facilitar testes, refatorações e manutenção.
						</p>
					</div>
				</details>
			</section>
		</div>
	);
};

export default AboutUs;
