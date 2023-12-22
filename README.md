Boas vindas ao nosso desafio de integração front-end e back-end!

Que tal encarar um desafio durante o recesso escolar (13/12/2023 a 09/01/2023)?

Este desafio foi concebido para avaliar suas habilidades na integração de uma aplicação front-end com uma aplicação back-end, utilizando JavaScript ou Typescript no lado do servidor. Além disso, espera-se o uso do Docker para facilitar a implantação, juntamente com um banco de dados relacional para a persistência de dados. É importante destacar que a dockerização deve englobar tanto o front-end quanto o back-end. 

O desafio também envolve a implementação de um sistema de autenticação, operações CRUD para pessoas usuárias e a capacidade de realizar upload de imagens. Estamos animados para ver o que você já consegue criar!

PRÉ REQUISITOS
Certifique-se de ter as seguintes ferramentas disponíveis em sua máquina antes de começar:
Docker
Node.js

INSTRUÇÕES GERAIS
Crie um repositório no GitHub para este desafio. Não se esqueça de editar a privacidade do repositório para público.
Crie uma aplicação front-end usando a biblioteca ou framework de sua escolha (React, Vue, Angular, etc).

A aplicação deve conter, no mínimo:

Uma página de login.

Uma página principal que redireciona os usuários para diferentes seções com base em seus papéis.

Crie um servidor backend usando JavaScript com Node.js.

Utilize o Docker para containerizar ambas as aplicações.

Implemente um CRUD genérico para pessoas usuárias, permitindo que a pessoa administradora cadastre, edite e remova pessoas usuárias. As pessoas usuárias só podem editar seus próprios dados.

REQUISITOS ESPECÍFICOS

Req 1: Página de Login e Redirecionamento

Implemente uma página de login no front-end. Após o login bem-sucedido, redirecione as pessoas usuárias para a página principal com base em seus papéis (pessoa administradora ou cliente).
Essa página principal deve trazer a foto, o nome e alguma outra informação, como a cidade e estado, Lembre-se de que apenas a pessoa administradora consegue ver os dados das pessoas clientes. Caso o login tenha sido feito por uma pessoa cliente, esta poderá ver apenas seus próprios dados. Ressaltamos a necessidade de haver padronização entre as informações.

Req 2: CRUD de Clientes

Administradores devem poder cadastrar, editar e remover clientes. Clientes só podem editar seus próprios dados.

Req 3: Autenticação

Implemente um sistema de autenticação utilizando tokens JsonWebToken (JWT). Ao fazer login, atribua um token JWT à pessoa usuária e use-o para autenticação em chamadas subsequentes.

Req 4: Dockerização da Aplicação

Agora que o front e o back-end já estão inicializados, crie o s Dockerfile de cada projeto e faça a orquestração dos containers com o docker-compose.

REQUISITOS BÔNUS

Para aquelas pessoas que desejarem incorporar mais funcionalidades e aplicar os conceitos estudados no módulo, deixaremos como requisitos bônus o desenvolvimento da aplicação em Typescript, bem como a utilização de um ORM para a interação entre o banco de dados e o back-end. Adicionalmente, você tem a liberdade de criar funcionalidades extras para sua aplicação, como pesquisa, relatórios, dashboards, entre outras.

CONFIGURAÇÃO DO BANCO DE DADOS

Configure o banco de dados e crie tabelas necessárias para armazenar dados de pessoas usuárias.

ENTREGA

Você pode realizar este desafio individualmente ou em um grupo de até três pessoas estudantes.
O prazo final para a entrega do desafio é 10/01/2024. Para registrar sua entrega, é só enviar o link do repositório nesta thread. Após sua entrega, aproveite a oportunidade para realizar um code review nos projetos dos outros participantes!
Forneça um arquivo README.md detalhando como configurar e executar a aplicação completa utilizando o Docker. Inclua instruções para construir e executar os containers Docker para o front-end, back-end e banco de dados.
Certifique-se de explicar como realizar o login, como as pessoas usuárias são redirecionadas com base em seus papéis e como funciona o CRUD de pessoas usuárias.

Ao final do projeto sugerimos fazer o deploy da aplicação, para que o link seja disponibilizado a toda a comunidade. Não é obrigatório, mas é legal mostrar o aprendizado das ferramentas de deploy.
Deve-se gravar um vídeo de 3 a 10 minutos para apresentar o projeto, e o link deve ser disponibilizado no README. Aproveite esse momento para treinar suas soft skills através do seu pitch de apresentação, apresentar os conhecimentos adquiridos, falar sobre o desenvolvimento do projeto e, quem sabe, mostrar um pouco da aplicação funcionando!

CRITÉRIOS DE AVALIAÇÃO

Você será avaliado com base na implementação completa dos requisitos, na organização do código, na clareza da documentação e na eficácia da solução proposta.
Além disso, esta é uma aplicação bem interessante e completa, que pode ser divulgada no Linkedin. Que tal criar uma logo e uma identidade visual para personalizar ainda mais seu projeto?
Boa sorte! Caso tenha alguma dúvida, não hesite em entrar em contato.

LÓGICA LOGIN

-recebe email, password
-procura no banco de dados email, compara senha de input com a senha do banco.
-se não achar o email, ou achar mas a senha não bater, retorna erro.
-se achar o email e a senha bater, retorna token de validação