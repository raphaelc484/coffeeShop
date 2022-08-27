import styled from 'styled-components'

export const HomeContainer = styled.div``

export const OurCoffees = styled.div`
  display: flex;
  max-width: 70rem;
  margin: auto;
  padding: 2rem 0 3.375rem 0;

  strong {
    font-family: 'Baloo 2';
    font-size: 2rem;
  }
`

export const ListOfCoffee = styled.div`
  max-width: 70rem;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
