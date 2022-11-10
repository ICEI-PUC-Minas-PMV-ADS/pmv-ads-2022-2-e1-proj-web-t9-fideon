# Programação de Funcionalidades
<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

- **Tela Inicial/Login**
- **Formulário de Cadastro**
- **Tela Usuário Empresa**
- **Tela Usuário Cliente**

# Tela Inicial/Login

Na tela inicial, temos um menu categorizado (menu) em "Para Empresas" onde explica para a empresa o objetivo do FideOn, "Vantagens" que mostra a ambos usuários as vantagens de ter o FideOn, "Sobre" mostra os dados dos desenvolvedores do sistema, "Veja no Mapa" traz a localização, através de uma API do MAPS, das empresas que usam o FideOn e o botão "Login" para que o usuário entre na sua página de navegação. Ao clicar nos itens de menu superior, o conteúdo é mostrado na própria página.

**Tela Inicial - Menu**
![Figura 1 - Tela Inicial - Menu](img/menu-inicial.PNG)

**Tela Incial - Para empresas**
![Figura 2 - Tela Inicial - Para Empresas](img/para-empresas.PNG)

**Tela Inicial - Vantagens**
![Figura 3 - Tela Inicial - Vantagens](img/vantagens.PNG)


**Tela Inicial - Veja no Mapa**
![Figura 3 - Tela Inicial - Veja no Mapa](img/menu-vejamapa.PNG)

**Tela Inicial - Sobre**
![Figura 3 - Tela Inicial - Sobre](img/menu-sobre.PNG)

**Tela Inicial - Login**

O login está por popup, ou seja, quando o usuário clica para logar, o formulário é aberto na própria página.

Imagem.

Código utilizado para o Popup:

**Funcionalidades Contempladas**

A página contempla as Funcionalidades: 

- RF-001: O site deve apresentar na página principal um breve relato do objetivo do sitema, um menu categorizado com"Para empresas", "Vantagens" e um botão de login.
- RF-006: O site deve permitir visualizar as informações de contatos do amntedor do site.
- RNF-002: O site deverá ser responsivo, permitindo a visualização em um celular de forma adequada.

# Tela cadastro usuário cliente

A tela de cadastro usuário cliente é utilizada somente pelo cliente da empresa ter acesso ao sistema FideOn e visualizar, a priori, as empresas da sua região e os beneficios que elas oferecem.

É um formula´rio Simples, onde a pessoa preenche seus dados pessoaias, como Nome, Sobrenome, E-mail, CPF e genêro.

**Tela Cadastro**

Imagem

**Funcionalidades Contempladas**

O formulario contempla a funcionalidade:

- RF-012: O sistemadeve categorizaros clientes por genero e idade (seja por relatório ou dashboard na telainicial.
- RNF-002: O site deverá ser responsivo, permitindo a visualização em um celular de forma adequada.

O formulário irá auxiliar essa categorização de clientes.

# Tela usuário empresa

A tela usuário empresa é onde a empresa visualizará tudo o que o sistema FideOn oferece. Nela temos um menu lateral contendo: 

- Inicio: que volta pra tela inicial da empresa;
- Clientes: Neles temos os submenus Cadastro, para cadastrar novos clientes, Perfil, para a empresa identificar o perfil do seu público e comentário, para a empresa ver os comentário feitos em relação ao seus produtos;
- Ferramentas: também é dividido em submenus com as principais formas de fidelização que a empresa pode oferecer ao seu cliente, como: Cartão Fidelidade, CashBack, Categorização e Comunicação, uma forma da empresa se manter mais conectada ao cliente;
- Cad. Produtos: A empresa poderá cadastrar todos os produtos que ela possui em seu estabelecimento, para ter uma base na hora de oferecer uma fidelização ao seu cliente;
- Relatórios: A empresa vai conseguiR visualizar relatorios de Vendas, Ferramentas e Feedbacks, colocados como submenus;
- Atendimento: Aqui ficará os contatos para suporte ao sistema.

Tambem temos uma menu dopdraw superior, onde conterá informações do usuário logado, como:

- Serviço Prestado: Aqui virá a atividade que a empresa exerce;
- Telefone: telefone de contato da empresa;
- CNPJ: Cadastro Nacional de Pessoa Juridixa da empresa;
- Número do Cliente: número de identificação do cliente, oferecido pelo sistema;
- Endereço: endereço da empresa:
- Sair: Botão para deslogar do sistema.

**Tela Usuário Empresa**

Aqui virá uma imagem

**Funcionalidades Contempladas**

A tela usuário empresa contempla as seguintes funcionalidade:

- RF-009: O sistema deve oferecer um menu adicional que permita ao usuário (empresa) visualizar as formas de fidelização que ele pode oferecer ao cliente.
- RNF-002: O site deverá ser responsivo, permitindo a visualização em um celular de forma adequada.

# Tela usuário cliente

A tela usuário cliente é onde o cliente da empresa visualizará tudo o que as empresas podem oferecer pra ele. Nela temos um menu lateral contendo: 

- Inicio: que volta pra tela inicial da empresa;
- Empresas: ;
- Benefícios: ;
- Relatórios: O cliente vai conseguiR visualizar relatorios de Benefícios adquiridos;
- Comentário: O cliente poderá realizar comentários a respeito da empresa que ele adquiriu um benefício;;
- Atendimento: Aqui ficará os contatos para suporte ao sistema.

Tambem temos uma menu dopdraw superior, onde conterá informações do usuário logado, como:

- Número do Cliente: número de identificação do cliente, oferecido pelo sistema;
- Endereço: endereço da empresa:
- Sair: Botão para deslogar do sistema.

**Tela Usuário Empresa**

Aqui virá uma imagem

**Funcionalidades Contempladas**

A tela usuário empresa contempla as seguintes funcionalidade:

- RF-00
- RNF-002: O site deverá ser responsivo, permitindo a visualização em um celular de forma adequada.


**Observação para construção desta etapa**

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
