import styled, { css } from 'styled-components/macro';
import backgroundSvg from '../../assets/background.svg';

type ContainerProps = {
  signed: boolean;
};

const containerModifiers = {
  signed: () => css`
    &::before {
      content: '';
      height: 100vh;
      width: 42rem;
      background: url(${backgroundSvg}) no-repeat;
      background-size: cover;
      position: absolute;
      right: -20rem;
      top: 0;
    }
  `,
};

export const Container = styled.main<ContainerProps>`
  ${({ signed }) => css`
    max-width: 120rem;
    height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 45.3rem;
    column-gap: 12rem;
    position: relative;

    ${signed && containerModifiers.signed()}
  `}
`;
