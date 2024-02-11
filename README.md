# Galeria de Fotos com React e Firebase

## Descrição

Esta é uma pequena aplicação de galeria de fotos desenvolvida em React, usando a biblioteca Firebase para armazenamento no Firebase Storage. A aplicação permite adicionar, listar e excluir imagens.

## Funcionalidades

- Adição de novas fotos.
- Listagem das fotos existentes.
- Exclusão de fotos.

## Configuração do Firebase

Certifique-se de ter configurado o Firebase no seu projeto. Isso inclui a criação de um projeto no [Console do Firebase](https://console.firebase.google.com/) e a obtenção das configurações necessárias.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Instale as dependências:

   ```bash
    cd nome-do-repositorio
    npm install

3. Configure as credenciais do Firebase:

    Crie um arquivo '.env' na raiz do projeto.
    Adicione suas credenciais do Firebase ao arquivo '.env':

   ```bash
    REACT_APP_FIREBASE_API_KEY= SuaAPIKeyAqui
    REACT_APP_FIREBASE_AUTH_DOMAIN= SeuAuthDomainAqui
    REACT_APP_FIREBASE_PROJECT_ID= SeuProjectIDAqui
    REACT_APP_FIREBASE_STORAGE_BUCKET= SeuStorageBucketAqui
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID= SeuMessagingSenderIDAqui
    REACT_APP_FIREBASE_APP_ID= SuaAppIDAqui

    Substitua os valores com suas próprias credenciais do Firebase.

3. Inicie o aplicativo:

   ```bash
    npm start

O aplicativo será iniciado no modo de desenvolvimento. Abra http://localhost:3000 para visualizá-lo no navegador.

## Contribuição

Sinta-se à vontade para contribuir, abrir issues ou fazer sugestões para melhorias.

## Licença

Este projeto está licenciado sob a Licença MIT.
