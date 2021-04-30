# Calendário de Eventos

## Informações básicas do projeto
- O projeto todo foi desenvolvido com auxílio do framework React e Javascript/HTML/CSS.
- O editor escolhido para desenvolve-lo é o Visual Studio Code
- Conta com um Backend local (json server)

## Descrição
Esse projeto é uma solução com Frontend e Backend para o registro de eventos em um calendário, também possuindo funcionalidades de login para o usuário.

**Na parte do login de usuários, temos as funcionalidades:**
- [Login]
- [Cadastro de usuário]

O setor de login foi feito utilizando um servidor json para realizar um Backend local que salva os usuários cadastrados no ```db.json```, e quando for feito o login ele verifica com esses dados do backend para autorizar ou não o login do usuário. Após feito o login, o usuário terá o acesso permitido para utilizar a tela do calendário

**Agora falando mais da parte de eventos localizada na tela do calendário, temos as funcionalidades:**
- [Adição de eventos]
- [Edição de eventos]
- [Remoção de eventos]

O setor de eventos não foi utilizado Backend para dar suporte ao Frontend até o momento, sendo assim, os dados estão sendo salvos nas próprias variaveis instanciadas ao carregar a página. Essa tela de calendário será onde o usuário poderá criar seus eventos nas datas que escolher e ver as informações dos eventos marcados quando quiser, também será possível editar ou excluir qualquer evento existente

## Como iniciar o projeto
Para iniciar o projeto é preciso ter o Node instalado pois usaremos suas funcionalidades relacionadas ao npm. É possivel instala-lo através desse link: **https://nodejs.org/pt-br/download/**

Após instalar Node, é preciso instalar o npm, para isso rode:
```sh
npm install
```
Agora é preciso do json-server para rodar o Backend, e para isso será usado uma funcionalidade do próprio npm, portanto rode:
```sh
npm install json-server
```

Tendo o npm na versão e json-server instalado, rode o seguinte comando em um terminal para iniciar o Backend:
```sh
npm run server
```

E esse outro comando para inicar o Frontend em outro terminal:
```sh
npm start
```
**Agora sim esta tudo setado para utilizar a aplicação**

## Funcionalidades pendentes
Por enquanto esse projeto conta com duas funcionalidades pendentes, sendo elas:

- Toda a questão de gerenciamento de eventos ainda não possui um Backend para dar suporte aos eventos

## Testando a aplicação

- Essa é a tela inicial da aplicação, ela não aparecerá as informações do calendário enquanto o usuário não estiver logado, então para isso criaremos um novo cadastro

![alt text](https://i.imgur.com/GW30t7I.png)

- Escrevi um usuário teste contendo o username como "usuario" e senha como "senha123", agora basta realizar o cadastro

![alt text](https://i.imgur.com/7xdZ20l.png)

- Feito o cadastro, voltaremos para a tela de login

![alt text](https://i.imgur.com/cMNbz7Y.png)

- Colocando o mesmo username e senha que acabou de ser cadastrado é possível realizar o login para interagir com o calendário

![alt text](https://i.imgur.com/rZECCoH.png)

- Aqui temos um calendário contendo todas as funcionalidades de um calendário comum, então vamos criar um evento clicando em qualquer data desejada

![alt text](https://i.imgur.com/KXDibmB.png)

- E agora escrever as informações do evento para cria-lo na data selecionada

![alt text](https://i.imgur.com/8l2Ju2B.png)

- Prontinho, agora o evento está criado. Sendo também possível criar mais eventos em diferentes datas apenas repetindo o mesmo processo de criação

![alt text](https://i.imgur.com/lsgP1Sf.png)

- Ao clicar em **Excluir** ou **Editar**, o evento é excluído/editado, sendo possível escrever um novo evento em seu lugar ou apenas deixar a data sem evento algum

![alt text](https://i.imgur.com/v30h8BA.png)

## Finalidade do projeto
**Esse projeto foi realizado para o processo seletivo de desenvolvedor web da Tokenlab (https://www.tokenlab.com.br/pt/)**