/// <reference types="cypress" />

import { selectors } from '../../fixtures/selectors'

describe('testes de elementos e botões da página Home e Checkout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('verifica existência dos 15 modelos de café na página inicial', () => {
    cy.get(selectors.e.allProducts)
      .find(selectors.e.allCoffees)
      .should('have.length', 15)
    cy.get(selectors.e.allProducts)
      .find(selectors.e.allCoffees)
      .first()
      .should('contain', 'Americano')
    cy.get(selectors.e.allProducts)
      .find(selectors.e.allCoffees)
      .last()
      .should('contain', 'Mochaccino')
  })
  
  it('verifica existência e funcionalidade dos botões de adicionar ao carrinho e botão Home', () => {
    cy.get(selectors.e.allProducts)
      .find(selectors.buttons.addToCartButton)
      .should('have.length', 15)
    cy.get(selectors.e.allProducts)
      .find(selectors.e.addOrRemove)
      .should('have.length', 15)
    cy.get(selectors.e.allProducts)
      .find(selectors.e.addOrRemove)
      .first()
      .should('have.text', ' 1 ')
    cy.get(selectors.buttons.homeButton).should('exist')
    cy.get(selectors.values.productsInCart).should('have.text', '0')

    // abaixo, adiciona item no carrinho

    cy.get(selectors.e.allProducts)
      .find(selectors.buttons.addToCartButton)
      .first()
      .click()
    cy.get(selectors.values.productsInCart).should('have.text', '1')
  })

  it('verifica funcionamento botão de ir para o carrinho e botão Home', () => {
    cy.get(selectors.buttons.goToCartButton).click()
    cy.url().should('eq', 'http://localhost:5173/checkout')
    cy.contains('Complete seu pedido').should('exist')
    cy.get(selectors.buttons.homeButton).click()
    cy.url().should('eq', 'http://localhost:5173/')
    cy.contains('Encontre o café perfeito').should('exist')
  })

  it('verifica funcionamento de adição de múltiplas unidades de um produto ao carrinho e seu valor', () => {
    cy.get(selectors.e.allProducts)
      .find(selectors.e.addOrRemove)
      .first()
      .should('have.text', ' 1 ')
    cy.get(selectors.e.allProducts)
      .find(selectors.e.addOrRemove)
      .first()
      .find('button')
      .last() // último botão adiciona uma unidade do produto
      .click()
    cy.get(selectors.e.allProducts)
      .find(selectors.e.addOrRemove)
      .first()
      .should('have.text', ' 2 ')
    cy.get(selectors.e.allProducts)
      .find(selectors.e.addOrRemove)
      .first()
      .find('button')
      .last() // adiciona mais uma
      .click()
    cy.get(selectors.e.allProducts)
      .find(selectors.e.addOrRemove)
      .first()
      .should('have.text', ' 3 ')
    cy.get(selectors.e.allProducts)
      .find(selectors.e.addOrRemove)
      .first()
      .find('button')
      .first() // primeiro botão remove uma unidade do produto
      .click()
    cy.get(selectors.e.allProducts)
      .find(selectors.e.addOrRemove)
      .first()
      .should('have.text', ' 2 ')

    cy.get(selectors.values.productsInCart).should('have.text', '0')
    cy.get(selectors.e.allProducts)
      .find(selectors.buttons.addToCartButton)
      .first()
      .click() // adiciona ao carrinho
    cy.get(selectors.values.productsInCart).should('have.text', '1') // o número que aparece no carrinho é de produtos diferentes
    cy.get(selectors.buttons.goToCartButton).click()
    cy.url().should('eq', 'http://localhost:5173/checkout')
    cy.get(selectors.e.addOrRemoveCheckout).should('have.text', ' 2 ') // aqui o número de unidades do produto
    cy.get(selectors.e.infoCart)
      .find(selectors.values.totalValue)
      .first()
      .should('have.text', 'Total de ItemsR$ 19.98')
  })

  it('verifica botões na página Checkout de adição e remoção de unidades e o botão de remover produto do carrinho', () => {
    cy.get(selectors.e.allProducts)
      .find(selectors.e.addOrRemove)
      .first()
      .should('have.text', ' 1 ')
    cy.get(selectors.e.allProducts)
      .find(selectors.e.addOrRemove)
      .first()
      .find('button')
      .last() // adiciona uma unidade
      .click()
    cy.get(selectors.e.allProducts)
      .find(selectors.e.addOrRemove)
      .first()
      .should('have.text', ' 2 ')
    cy.get(selectors.e.allProducts)
      .find(selectors.e.addOrRemove)
      .first()
      .find('button')
      .last() // adiciona uma unidade
      .click()
    cy.get(selectors.e.allProducts)
      .find(selectors.e.addOrRemove)
      .first()
      .should('have.text', ' 3 ')
    cy.get(selectors.e.allProducts)
      .find(selectors.buttons.addToCartButton)
      .first()
      .click() // adiciona ao carrinho
    cy.get(selectors.buttons.goToCartButton).click()

    // vai para página do carrinho

    cy.get(selectors.e.infoCart)
      .find(selectors.values.totalValue)
      .first()
      .should('have.text', 'Total de ItemsR$ 29.97')
    cy.get(selectors.e.addOrRemoveCheckout).find('button').first().click()
    cy.get(selectors.e.infoCart)
      .find(selectors.values.totalValue)
      .first()
      .should('have.text', 'Total de ItemsR$ 19.98')
    cy.get(selectors.e.addOrRemoveCheckout).find('button').first().click()
    cy.get(selectors.e.infoCart)
      .find(selectors.values.totalValue)
      .first()
      .should('have.text', 'Total de ItemsR$ 9.99')
    cy.get(selectors.e.addOrRemoveCheckout).find('button').last().click()
    cy.get(selectors.e.infoCart)
      .find(selectors.values.totalValue)
      .first()
      .should('have.text', 'Total de ItemsR$ 19.98')
    cy.get(selectors.buttons.removeItem).click()
    cy.get(selectors.e.infoCart)
      .find(selectors.values.totalValue)
      .first()
      .should('have.text', 'Total de ItemsR$ 0.00')
  })
})