import { createGlobalStyle, css } from 'styled-components/macro';
import theme from './theme';

type ThemeType = typeof theme;

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-size: 1.6rem;
      font-family: 'Roboto', sans-serif;
      background: ${theme.colors.secondaryBlack};
      color: ${theme.colors.tertiaryGray};
    }
  `}


`;

export default GlobalStyles;
