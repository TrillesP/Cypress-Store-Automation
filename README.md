# Cypress Store Automation ☕
Projeto de loja de delivery ☕ em TypeScript com React forkeada do @gfatori [Link do Original](https://github.com/gfatori/react-coffee-delivery)

## Objetivo

Automação feita para testar meu conhecimento de Cypress numa aplicação real como um desafio de mapeamento de elementos numa página.

Visão inicial de testar ferramentas principais de uma página de compra, como:
- Se todos os produtos e elementos importantes da página inicial renderizam corretamente.
- Se a adição de produtos no carrinho funciona corretamente, com sua quantidade, valores e características adequadas.
- Se a página do carrinho é renderizada corretamente e funciona, do seu formulário de compra até seu botão de finalizar compra.
- Se o botão de finalizar compra só funciona após verificar a lógica de validação.
- Se a página final é renderizada corretamente com as informações de formulário corretas.

### Diferenciais:
- Utilização de arquivo de objeto separado para organização de constantes (.\cypress\fixtures\selectors.js).
- Como os elementos não apresentam ids ou classes intuitivos, foi necessario procurar elementos dentro de outros com `find()` por classes e por tipos de elementos, além de `first()` e `last()` para encontrar botões específicos.
- Para equivalência de valores foi utilizado `invoke` e `url` com assertions de 'eq', 'have.text' etc.
- Leitura do código em TypeScript para compreender a lógica do código de validação de formulário, montando código de teste em cima disso.

### Rodando a aplicação:
- Primeiro rode `npm install`.
- Depois `npm run dev`.
- Finalmente rode `npx cypress open` para abrir o Cypress e rodar os testes pretendidos. 
