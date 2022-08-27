import { HeaderHome } from './components/Header'
import { HomeContainer, ListOfCoffee, OurCoffees } from './styles'
import coffeeCommun from '../../assets/Coffee.svg'
import { CardHome } from './components/Card'

export function Home() {
  const coffeeOptions = [
    {
      id: 1,
      foto: coffeeCommun,
      tipos: ['Tradicional', 'Com Leite'],
      nome: 'Expresso Tradicional',
      explicacao: 'O tradicional café feito com água quente e grãos moídos',
      preco: 9.9,
    },
    {
      id: 2,
      foto: coffeeCommun,
      tipos: ['Tradicional', 'Com Leite'],
      nome: 'Expresso Tradicional',
      explicacao: 'O tradicional café feito com água quente e grãos moídos',
      preco: 9.9,
    },
    {
      id: 3,
      foto: coffeeCommun,
      tipos: ['Tradicional', 'Com Leite'],
      nome: 'Expresso Tradicional',
      explicacao: 'O tradicional café feito com água quente e grãos moídos',
      preco: 9.9,
    },
    {
      id: 4,
      foto: coffeeCommun,
      tipos: ['Tradicional', 'Com Leite'],
      nome: 'Expresso Tradicional',
      explicacao: 'O tradicional café feito com água quente e grãos moídos',
      preco: 9.9,
    },
    {
      id: 5,
      foto: coffeeCommun,
      tipos: ['Tradicional', 'Com Leite'],
      nome: 'Expresso Tradicional',
      explicacao: 'O tradicional café feito com água quente e grãos moídos',
      preco: 9.9,
    },
  ]

  return (
    <HomeContainer>
      <HeaderHome />
      <OurCoffees>
        <strong>Nossos cafés</strong>
      </OurCoffees>

      <ListOfCoffee>
        {coffeeOptions.map((option) => {
          return (
            <CardHome
              key={option.id}
              foto={option.foto}
              tipos={option.tipos}
              nome={option.nome}
              explicacao={option.explicacao}
              preco={option.preco}
            />
          )
        })}
      </ListOfCoffee>
    </HomeContainer>
  )
}
