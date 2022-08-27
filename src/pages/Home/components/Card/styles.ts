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

  margin-bottom: 2.5rem;

  img {
    margin-top: calc(0px - 1.5rem - 6px);
  }

  ul {
    list-style-type: none;
    display: inline-flex;
    gap: 0.5rem;
    margin: 1rem 0 1rem 0;

    li {
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      border-radius: 100px;
      padding: 0.2rem 0.5rem 0.2rem 0.5rem;
    }
  }

  strong {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-family: 'Roboto';
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    text-align: center;
    margin: 0 0.875rem 2rem 0.875rem;
    padding: 0;
  }
`

export const BuyBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  p {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    font-size: 0.875rem;
  }

  strong {
    margin: 0;
    font-family: 'Baloo 2';
    font-size: 1.5rem;
  }
`
