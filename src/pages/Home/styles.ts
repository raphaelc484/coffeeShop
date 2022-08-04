import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  padding: 5.875rem 0 5.875rem 0;
`

export const HomeHeader = styled.div`
  margin-right: 3.5rem;

  strong {
    font-family: 'Baloo 2';
    font-size: 3rem;
    line-height: 3.9rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.3rem;
    line-height: 1.6rem;
  }
`

export const HomePublicity = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  margin-top: 3rem;

  p {
    display: flex;
    align-items: center;

    gap: 0.75rem;

    font-size: 1rem;
    line-height: 1.3rem;

    svg {
      color: ${(props) => props.theme.background};
      padding: 0.5rem;
      border-radius: 1000px;

      &.shopcart {
        background: ${(props) => props.theme['yellow-dark']};
      }

      &.package {
        background: ${(props) => props.theme['base-text']};
      }

      &.timer {
        background: ${(props) => props.theme.yellow};
      }

      &.coffee {
        background: ${(props) => props.theme.purple};
      }
    }
  }
`
