import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 16rem;
  max-height: 19.375rem;
  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
