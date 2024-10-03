import { useSelector } from 'react-redux'

import * as S from './styles'

import { paraReal } from '../Produto'

import { RootReducer } from '../../store'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  const cesta = 'caminho/para/imagem/placeholder.png'

  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <img alt="" src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
