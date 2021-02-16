<h1 align="center">Welcome to backend-agenda-tel 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/vhnakai" target="_blank">
    <img alt="Twitter: vhnakai" src="https://img.shields.io/twitter/follow/vhnakai.svg?style=social" />
  </a>
</p>

> Restful Client using Express, Squilize and Sqlite

## Comandos

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```sh
# Clone este repositório
$ git clone <https://github.com/vhnakai/desafio-backend-moura>

# Acesse a pasta do projeto no terminal/cmd
$ cd desafio-backend-moura

# Instale as dependências
$ npm install

# Execute as migrações ao banco de dados
$ npm run sequelize db:migrate

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

#### Rotas da API

Ação | Protocolo HTTP | Rota
----- | -------------- | -----
Listagem de contatos | GET | '/phonebook'
Cadastro de um contato | POST | '/phonebook'
Atualizar informações de um contato | PUT | '/phonebook/:id'
Apagar um contato | DELETE | '/phonebook/:id'

## Autor

👤 **vhnakai**

* Twitter: [@vhnakai](https://twitter.com/vhnakai)
* Github: [@vhnakai](https://github.com/vhnakai)
* LinkedIn: [@vitor-hugo-nakai](https://linkedin.com/in/vitor-hugo-nakai)

## Show your support

Dê um ⭐️ se este projeto te ajudou!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_