import styled from 'styled-components'

export const HeaderContainer = styled.div`
  max-width: 70rem;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.background};

  img {
    margin-left: 0;
  }
`

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 2rem 0;

  p {
    background: ${(props) => props.theme['purple-light']};

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 0.75rem;
    padding: 0.5rem;
    border-radius: 6px;

    color: ${(props) => props.theme.purple};

    strong {
      margin-left: 0.25rem;
    }
  }

  nav {
    display: flex;

    background: ${(props) => props.theme['yellow-light']};
    margin-right: 0.75rem;
    padding: 0.5rem;
    border-radius: 6px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
