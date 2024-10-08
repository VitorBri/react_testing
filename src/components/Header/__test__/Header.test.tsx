import React from 'react'
import { screen } from '@testing-library/react'
import Header from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('Teste para o componente header', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.findByText('EBAC Games')).toBeInTheDocument()
  })
})
