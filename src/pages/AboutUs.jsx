import React from 'react';
import styles from './stylesheets/AboutUs.module.css';

const AboutUs = () => {
	return (
		<div className={styles.container}>
			<section>
				<h1>Sobre o PreçoRadar</h1>

				<h3>O que é o PreçoRadar?</h3>
				<p>
					<strong>PreçoRadar</strong> é uma plataforma de monitoramento de
					preços criada para trazer clareza e transparência ao custo de bens
					essenciais no Brasil. Trata-se de um projeto independente que coleta
					diariamente dados de preços de itens básicos como café, arroz e
					feijão, a partir dos principais supermercados da região de Belo
					Horizonte.
				</p>

				<h3>Por que criei este projeto?</h3>
				<p>
					A ideia surgiu da frustração com declarações políticas enganosas e da
					falta de dados acessíveis e verificáveis sobre os preços reais pagos
					pelos consumidores. Utilizando web scraping e armazenamento em banco
					de dados, o PreçoRadar permite que qualquer pessoa — cidadãos,
					jornalistas, analistas ou consumidores atentos — acompanhe a variação
					de preços ao longo do tempo, compare mercados e tire suas próprias
					conclusões com base em dados reais.
				</p>

				<h3>O que você pode fazer com o PreçoRadar?</h3>
				<p>
					É possível visualizar preços médios por produto, consultar valores
					específicos por supermercado, acompanhar tendências históricas e
					verificar as atualizações diárias. Seja para economizar, identificar
					padrões de mercado ou apenas se manter informado, o PreçoRadar coloca
					os dados certos nas suas mãos.
				</p>

				<h3>Stack e tecnologias utilizadas</h3>
				<p>
					Para recrutadores e desenvolvedores, este projeto também é uma vitrine
					das minhas habilidades full-stack. Toda a aplicação foi desenvolvida
					por mim, usando <strong>React</strong> com
					<strong>TanStack Query</strong> para gerenciamento de dados no
					front-end, <strong>Recharts</strong> para visualização gráfica, e
					<strong>React Router DOM</strong> para navegação. O build da aplicação
					é feito com <strong>Vite</strong>, garantindo performance e
					modernidade. No back-end, utilizo <strong>Express</strong> com
					<strong>Prisma ORM</strong> para interação com banco de dados
					PostgreSQL. O deploy é feito através da plataforma{' '}
					<strong>Railway</strong>, que garante interações rápidas entre o
					Front-End, Back-End e base de dados. Este projeto reflete não só
					minhas competências técnicas, mas também meu compromisso com a
					transparência, a usabilidade e o impacto social positivo.
				</p>

				<h3>Desafios técnicos enfrentados</h3>
				<p>
					Durante o desenvolvimento, enfrentei desafios como integração com APIs
					instáveis de supermercados, estruturação de dados para comparações
					eficientes e automação de coleta diária. Essas dificuldades foram
					superadas com técnicas modernas de scraping e uso estratégico do ORM
					para modelagem flexível dos dados coletados.
				</p>

				<h3>Estado atual e planos futuros</h3>
				<p>
					O PreçoRadar está em constante evolução. A coleta automatizada é feita
					com scripts controlados por agendamentos diários, garantindo dados
					sempre atualizados. Além disso, o design foi pensado para funcionar
					bem em dispositivos móveis e oferece gráficos interativos para
					facilitar a análise de tendências. Pretendo futuramente incluir testes
					automatizados, filtros por bairro/região e novas fontes de dados.
					Também está nos planos a captação de preços de demais tipos de
					produtos e demais mercados. O objetivo final é estabelecer uma
					plataforma útil, seja para o dia a dia do consumidor ou para quem
					precisa de dados confiáveis e atualizados.
				</p>
			</section>
		</div>
	);
};

export default AboutUs;
