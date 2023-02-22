/// <reference types="cypress" />

import { selectors } from '../../fixtures/selectors'

describe('testes de elementos e botões da página e Checkout e Checkout Success', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/checkout/')
  })

  it('verifica existência dos 7 inputs, seus placeholders e botão de confirmar pedido', () => {
    cy.get(selectors.inputs.inputSection).find('input').should('have.length', 7);
    cy.get(selectors.inputs.ZIP)
      .invoke('attr', 'placeholder')
      .should('eq', 'CEP');
    cy.get(selectors.inputs.address)
      .invoke('attr', 'placeholder')
      .should('eq', 'Rua');
    cy.get(selectors.inputs.num)
      .invoke('attr', 'placeholder')
      .should('eq', 'Número');
    cy.get(selectors.inputs.additionalInfo)
      .invoke('attr', 'placeholder')
      .should(
        'eq',
        'Complemento                                                 Opcional',
      );
    cy.get(selectors.inputs.neighborhood)
      .invoke('attr', 'placeholder')
      .should('eq', 'Bairro')
    cy.get(selectors.inputs.city)
      .invoke('attr', 'placeholder')
      .should('eq', 'Cidade')
    cy.get(selectors.inputs.state)
      .invoke('attr', 'placeholder')
      .should('eq', 'UF')

    cy.get(selectors.buttons.confirmCheckout).should('exist').and('be.disabled')
  })

  it('testa necessidade de preenchimento obrigatório de 6 inputs e método de pagamento para botão funcionar', () => {
    cy.get(selectors.buttons.confirmCheckout).should('exist').and('be.disabled')
    cy.get(selectors.inputs.ZIP).type('12345678') // minimo 8 digitos
    cy.get(selectors.inputs.address).type('Rua do Abacate') // minimo 5 digitos, max 150
    cy.get(selectors.inputs.num).type('12345') // min 1, max 5
    cy.get(selectors.inputs.neighborhood).type('Bairro das Frutas') // min 5, max 120
    cy.get(selectors.inputs.city).type('Fruteira') // min 3, max 120
    cy.get(selectors.inputs.state).type('FR') // exatamente 2 digitos
    cy.get(selectors.buttons.confirmCheckout).should('be.disabled') // ainda precisa selecionar forma de pagamento
    cy.get(selectors.buttons.paymentOptions).first().click() // selecionou uma forma de pagamento
    cy.get(selectors.buttons.confirmCheckout).should('not.be.disabled') // agora muda pra enabled
  })

  it('verifica botões de seleção de forma de pagamento', () => {
    cy.get(selectors.buttons.paymentOptions).first().click()
    cy.get(selectors.buttons.paymentOptions)
      .first()
      .invoke('attr', 'class')
      .should('contain', 'selected')
    cy.get(selectors.buttons.paymentOptions).last().click()
    cy.get(selectors.buttons.paymentOptions)
      .first()
      .invoke('attr', 'class')
      .should('not.contain', 'selected')
    cy.get(selectors.buttons.paymentOptions)
      .last()
      .invoke('attr', 'class')
      .should('contain', 'selected')
  })

  it('checa informações de input sendo demonstradas corretamente em checkout success', () => {
    cy.url().should('eq', 'http://localhost:5173/checkout/')
    cy.get(selectors.inputs.ZIP).type('12345678')
    cy.get(selectors.inputs.address).type('Rua do Abacate')
    cy.get(selectors.inputs.num).type('12345')
    cy.get(selectors.inputs.neighborhood).type('Bairro das Frutas')
    cy.get(selectors.inputs.city).type('Fruteira')
    cy.get(selectors.inputs.state).type('FR')
    cy.get(selectors.buttons.paymentOptions).first().click()
    cy.get(selectors.buttons.confirmCheckout).click()

    // foi para página de confirmação

    cy.url().should('eq', 'http://localhost:5173/checkout-success')
    cy.get(selectors.e.infoShip)
      .first()
      .should(
        'have.text',
        'Entrega em Rua do Abacate, 12345Bairro das Frutas - Fruteira, FR',
      )
    cy.get(selectors.e.infoShip)
      .last()
      .should('have.text', 'Pagamento na entregaCartão de crédito')
  })
})