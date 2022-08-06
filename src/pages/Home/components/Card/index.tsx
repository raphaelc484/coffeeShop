import { CardContainer } from './styles'

interface CoffeeProps {
  foto: string
  tipos: string[]
  nome: string
  explicacao: string
  preco: number
}

export function CardHome({
  foto,
  tipos,
  nome,
  explicacao,
  preco,
}: CoffeeProps) {
  return (
    <CardContainer>
      <img src={foto} alt={explicacao} />
      <ul>
        {tipos.map((tipo) => {
          return <li key={tipo}>{tipo}</li>
        })}
      </ul>
      <strong>{nome}</strong>
      <p>{explicacao}</p>
      <p>{preco}</p>
    </CardContainer>
  )
}
