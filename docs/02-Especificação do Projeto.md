# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

 - Beatriz Campos tem 22 anos, é estudante e jovem aprendiz, que sonha com um mundo mais tecnológico, sem muita burocracia e com uso mínimo de papeis (questão ambiental). É extremamente conectada as redes sociais como o Instagram, TikTok e Pinterest.

 - Bernardo Costa tem 40 anos, é formado em técnico eletrônica, computação e Sistema da Informação e é sócio de uma empresa de desenvolvimento de sistemas. No seu dia a dia, ele costuma usar o facebook, linkedin e aplicativos de bancos.

 - A empresa Bão de Minas é uma empresa do setor alimentício, voltada para comidas típicas de Minas Gerais oferecidas em forma de brunch. Ela está no mercado a 8 anos e utiliza o facebook, instagram e linkedin para divulgar seus serviços e produtos.

 - A empresa Açaí Legal é uma empresa do setor alimenticio voltada para a venda de cremes de açaí e sorvetes. Ela está no mercado a 10 anos e otiliza o facebook, intagram e linkein para divulgar os produtos e serviços da empresa.

## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Beatriz Campos      | Visualizar as empresas que possuo pontos ou beneficios| Escolher qual posso ir para economizar dinheiro |
|Beatriz Campos      | Visualizar empresas que fazem parte do sistema de beneficios                | Gastar menos tempo procurando lanchonetes, sorveterias, cafeterias que oferecem um sistema de retorno ao cliente.     |
| Beatriz Campos     | Manter um registro de consumo por setor de atuação da empresa | Visualizar onde consumo mais, se em sorveterias, cafeterias, etc e criar um padrão de consumo para compartilhar com meus amigos.       |
| Beatriz Campos     | Visualizar onde existem restaurantes com diversidade de gastronomia. | Para poder ir à cada um e engrandecer ainda mais seu conhecimento na área.                                                   |                          | Bernardo Costa     | Não ter que me preocupar em guardar meus cartões fidelidades (papel) | Porque sempre esqueço eles e acho chato ter a carteira cheia deles .                                                            |
| Bernardo Costa     | Que o estabelecimento saiba da minha fidelidade, usando um sistema online. | Pois, ao contrário dos cartões físicos, eu nunca esqueço meu celular, ficando mais fácil provar algo que eles tenham controle interno. |
| Bernardo Costa     | Lembrete de que meu benefício está para vencer. | Sempre me esqueço o prazo de validade de uma campanha de fidelização. |
| Bão de Minas       | Parar de perder cliente. | Crescer no mercado de brunch. |
| Bão de Minas       | Fidelizar cliente através da tecnologia. | Diminuir custos com gráficas. |
| Bão de Minas       | Um canal de comunicação. | Para manter os clientes já existente. |
| Açaí Legal         | Controle de comportamento do cliente (produtos mais comprados e frequência). | Adquirir estratégias voltadas a eles para fidelizar mais assertivamente. |
| Açai Legal         | Diferentes ferramentas de fidelização disponíveis na plataforma. | Para usar a que mais atende determinado comportamento do meu público, de acordo com a época. |
| Açai Legal         | Uma maneira de compartilhar um benefício adquirido. | Para que o cliente compartilhe e mais pessoa vejam o meu negócio. |
| Açai Legal         | Categorização de clientes. | Oferecer benefícios de acordo com a frequência de compra do cliente. |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
