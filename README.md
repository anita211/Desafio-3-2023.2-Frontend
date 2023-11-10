# Desafio 3 - React JS

Este desafio tem como objetivo a implementação de uma plataforma web utilizando a biblioteca React JS. Você deve criar um quadro de tarefas (Kanban) que permita a criação de tarefas, a definição de um responsável, um prazo e a coluna que a tarefa se encontra. O quadro deve ser dividido em 3 colunas: "A fazer", "Em andamento" e "Concluído".

O visual da página deve seguir a [identidade visual](https://www.figma.com/file/5hI8n63ukVifZdQ7hNJ5IW/Kanban?type=design&node-id=0%3A1&mode=design&t=GS9du2LtmIzZ9EUc-1). Você pode utilizar qualquer ferramenta ou biblioteca para estilizar a página, o importante é que o resultado final seja o mais próximo possível do layout fornecido e que a funcionalidade seja implementada utilizando React JS.

Caso surjam dúvidas, você pode utilizar o canal da capacitação no Slack, contatar algum membro do seu squad ou pedir ajuda.

Você deve realizar um fork deste repositório para a sua conta pessoal no GitHub. A entrega só será considerada válida se estiver incluída em uma release no GitHub. Caso você não saiba como realizar um fork, commit, push e criar uma release no GitHub, será necessário pesquisar ou pedir ajuda. A autonomia também será avaliada neste desafio.

## Requisitos Funcionais

- A tela deve ser implementada de acordo com o layout fornecido.
- O quadro deve ser dividido em 3 colunas: "A fazer", "Em andamento" e "Concluído".
  - Ele deve iniciar vazio e as tarefas devem ser adicionadas pelo usuário.
  - O usuário pode adicionar uma tarefa em qualquer uma das colunas.
- O cartão de tarefa deve conter as seguintes informações:
  - Título da tarefa
  - Descrição da tarefa
  - Responsável pela tarefa
  - Prazo para conclusão da tarefa
- Ao clicar no botão de criar tarefa, um novo cartão deve aparecer na coluna desejada, porém ele não deverá ser adicionado ao quadro de forma definitiva até que o usuário clique no botão de salvar.
  - O usuário pode cancelar a criação da tarefa clicando no botão de cancelar.

## Requisitos Não-Funcionais

- O projeto deve ser implementado utilizando React JS com seus respectivos hooks (useState, useEffect, etc).
- O uso de bibliotecas externas (MUI, SASS, React Bootstrap, etc) é permitido, porém o uso de ferramentas que modifique o funcionamento do React JS (React Redux por exemplo) não é permitido.
- O projeto pode ser escrito em JavaScript ou TypeScript.
- O projeto React deve ser criado utilizando o vite.
- O código do projeto deve ser organizado, indentado e legível. Tão importante quanto um programa funcional é um código-fonte fácil de modificar e entender.

## Desafios Extras

- Adicionar uma funcionalidade de edição de tarefas.
- Adicionar uma funcionalidade de exclusão de tarefas.
- Adicionar uma funcionalidade de drag and drop para mover as tarefas entre as colunas.
- Adicionar uma funcionalidade de persistência de dados utilizando o LocalStorage ou um backend se preferir.

## Entrega

- A entrega do desafio deve ser feita por meio de uma Release no GitHub.
  - Crie a release no seu repositório pessoal e envie o arquivo ZIP pelo Google Classroom.
  - Não inclua a pasta `node_modules` no arquivo ZIP, mas envie todos os outros arquivos, incluindo o `package.json`.
- O trainee não deve excluir o repositório nem a release após a entrega, pois a utilização do GitHub será avaliada.
