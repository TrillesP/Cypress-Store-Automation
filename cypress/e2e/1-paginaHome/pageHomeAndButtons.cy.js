/// <reference types="cypress" />

describe('testes de elementos e botões da página Home e Checkout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('verifica existência dos 15 modelos de café na página inicial', () => {
    cy.get('.sc-eKBdFk').find('.sc-GVOUr').should('have.length', 15)
    cy.get('.sc-eKBdFk')
      .find('.sc-GVOUr')
      .first()
      .should('contain', 'Americano')
    cy.get('.sc-eKBdFk')
      .find('.sc-GVOUr')
      .last()
      .should('contain', 'Mochaccino')
  })

  it('verifica existência e funcionalidade dos botões de adicionar ao carrinho e botão Home', () => {
    cy.get('.sc-eKBdFk').find('.sc-hlnMnd').should('have.length', 15)
    cy.get('.sc-eKBdFk').find('.sc-ZyCDH').should('have.length', 15)
    cy.get('.sc-eKBdFk').find('.sc-ZyCDH').first().should('have.text', ' 1 ')
    cy.get('.active > img').should('exist')
    cy.get('.sc-eCYdqJ').should('have.text', '0')

    cy.get(':nth-child(1) > .sc-TRNrF > .sc-hlnMnd').click()
    cy.get('.sc-eCYdqJ').should('have.text', '1')
  })

  it('verifica funcionamento botão de ir para o carrinho e botão Home', () => {
    cy.get('.sc-hKMtZM').click()
    cy.url().should('eq', 'http://localhost:5173/checkout')
    cy.contains('Complete seu pedido').should('exist')
    cy.get('[href="/"] > img').click()
    cy.url().should('eq', 'http://localhost:5173/')
    cy.contains('Encontre o café perfeito').should('exist')
  })

  it('verifica funcionamento de adição de múltiplas unidades de um produto ao carrinho e seu valor', () => {
    cy.get('.sc-eKBdFk').find('.sc-ZyCDH').first().should('have.text', ' 1 ')
    cy.get(':nth-child(1) > .sc-TRNrF > .sc-ZyCDH > :nth-child(3)').click()
    cy.get('.sc-eKBdFk').find('.sc-ZyCDH').first().should('have.text', ' 2 ')
    cy.get(':nth-child(1) > .sc-TRNrF > .sc-ZyCDH > :nth-child(3)').click()
    cy.get('.sc-eKBdFk').find('.sc-ZyCDH').first().should('have.text', ' 3 ')
    cy.get(':nth-child(1) > .sc-TRNrF > .sc-ZyCDH > :nth-child(1)').click()
    cy.get('.sc-eKBdFk').find('.sc-ZyCDH').first().should('have.text', ' 2 ')

    cy.get('.sc-eCYdqJ').should('have.text', '0')
    cy.get(':nth-child(1) > .sc-TRNrF > .sc-hlnMnd').click()
    cy.get('.sc-eCYdqJ').should('have.text', '1') // o número que aparece no carrinho é de produtos diferentes
    cy.get('.sc-hKMtZM').click()
    cy.url().should('eq', 'http://localhost:5173/checkout')
    cy.get('.sc-gXmSlM > span').should('have.text', ' 2 ') // aqui o número de unidades do produto
    cy.get('.sc-iIPllB > :nth-child(1) > span').should('contain', '19.98')
  })

  it('verifica botões na página Checkout de adição e remoção de unidades e o botão de remover produto do carrinho', () => {
    cy.get('.sc-eKBdFk').find('.sc-ZyCDH').first().should('have.text', ' 1 ')
    cy.get(':nth-child(1) > .sc-TRNrF > .sc-ZyCDH > :nth-child(3)').click()
    cy.get('.sc-eKBdFk').find('.sc-ZyCDH').first().should('have.text', ' 2 ')
    cy.get(':nth-child(1) > .sc-TRNrF > .sc-ZyCDH > :nth-child(3)').click()
    cy.get('.sc-eKBdFk').find('.sc-ZyCDH').first().should('have.text', ' 3 ')
    cy.get(':nth-child(1) > .sc-TRNrF > .sc-hlnMnd').click()
    cy.get('.sc-hKMtZM').click()
    cy.get('.sc-iIPllB > :nth-child(1) > span').should('have.text', 'R$ 29.97')
    cy.get('.sc-gXmSlM > :nth-child(1) > svg').click()
    cy.get('.sc-iIPllB > :nth-child(1) > span').should('have.text', 'R$ 19.98')
    cy.get('.sc-gXmSlM > :nth-child(1) > svg').click()
    cy.get('.sc-iIPllB > :nth-child(1) > span').should('have.text', 'R$ 9.99')
    cy.get('.sc-gXmSlM > :nth-child(3) > svg').click()
    cy.get('.sc-iIPllB > :nth-child(1) > span').should('have.text', 'R$ 19.98')
    cy.get('.sc-cCsOjp > span').click()
    cy.get(':nth-child(1) > span').should('have.text', 'R$ 0.00')
  })
})