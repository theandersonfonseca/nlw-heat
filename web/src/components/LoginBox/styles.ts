import styled, { css } from 'styled-components/macro';
import girlImg from '../../assets/banner-girl.png';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;
    background: #17171a url(${girlImg}) no-repeat top center;
    padding: 44rem 8rem 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;

    &::before {
      content: '';
      width: 90rem;
      height: 90rem;
      position: absolute;
      background: radial-gradient(
        50% 50% at 50% 50%,
        #ff3d6e 0%,
        rgba(18, 18, 20, 0) 100%
      );
      transform: translate(-60%, -50%);
    }

    & strong {
      font-size: ${theme.font.sizes.huge};
      line-height: 3.6rem;
      display: block;
    }
  `}
`;

export const SignWithGithubButton = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.yellow};
    margin-top: ${theme.spacings.medium};
    padding: 0 ${theme.spacings.large};
    height: 5.6rem;
    color: ${theme.colors.primaryBlack};
    font-size: ${theme.font.sizes.small};
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & svg {
      margin-right: ${theme.font.sizes.medium};
    }

    &:hover {
      filter: brightness(0.9);
    }
  `}
`;
