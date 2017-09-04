# myBooksApp [![Build Status](https://travis-ci.org/fernandoguedes/myBooksApp.svg?branch=master)](https://travis-ci.org/fernandoguedes/myBooksApp)
O `myBookApp` permite que você faça pesquisas de livros por título, descrição ou autor e favorite.

O app foi desenvolvido utilizando as seguintes tecnologias:

- AngularJS
- Bulma
- NodeJS
- CSS

O Angular como framework para o funcionamento da aplicação, o Bulma, framework CSS baseado em flexbox, NodeJS para build, CSS para pequenas alterações em cima do Bulma e para a animação do coração que favorita.

Os favoritos, conforme sugerido foi desenvolvido utilizando `localStorage` com uma única chave e a manipulação de JSON em forma de string.

O deploy é feito automaticamente via Travis, e os testes estão dentro de cada componente.