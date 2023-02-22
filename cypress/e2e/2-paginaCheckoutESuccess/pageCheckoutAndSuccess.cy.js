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

  it('testa funcionalidade dos inputs', () => {
    
  })

  it('testa necessidade de preenchimento obrigatório de 6 inputs para botão funcionar', () => {
    
  })

  it('verifica botões de seleção de forma de pagamento', () => {
    
  })

  it('checa informações de input sendo demonstradas corretamente em checkout success', () => {
    
  })
})