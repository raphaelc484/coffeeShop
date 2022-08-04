import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme.background};

  max-width: 70rem;
  margin: auto;
  display: flex;
  flex-direction: column;
`
