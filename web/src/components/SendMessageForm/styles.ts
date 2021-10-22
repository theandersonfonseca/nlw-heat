import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: #1b1b1f;
    padding: ${theme.spacings.small};
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
  `}
`;

export const SignOutButton = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    color: ${theme.colors.secondaryGray};
    position: absolute;
    left: 2.4rem;
    top: 2.4rem;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  `}
`;

export const UserInformation = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImage = styled.div`
  ${({ theme }) => css`
    padding: 0.3rem;
    background: linear-gradient(100deg, #ff008e 0%, #ffcd1e 100%);
    border-radius: 50%;
    line-height: 0;

    & img {
      width: 9.4rem;
      height: 9.4rem;
      border-radius: 50%;
      border: 0.6rem solid ${theme.colors.secondaryBlack};
    }
  `}
`;

export const UserName = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 3rem;
    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const UserGithub = styled.strong`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.xxsmall};
    color: ${theme.colors.secondaryGray};

    & svg {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;

export const SendMessageForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    margin-top: ${theme.spacings.xlarge};
    background: ${theme.colors.tertiaryBlack};

    & label {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
      font-size: ${theme.font.sizes.xlarge};
      background: #29292e;
      font-weight: bold;
      text-align: left;
    }

    & textarea {
      background: transparent;
      border: 0;
      padding: ${theme.spacings.small};
      resize: none;
      height: 16rem;
      color: ${theme.colors.tertiaryGray};
      font-size: ${theme.font.sizes.medium};
      line-height: 2.4rem;

      &:focus {
        outline: 0;
      }

      &::placeholder {
        color: #8d8d99;
      }
    }

    & button {
      align-self: flex-end;
      border: 0;
      background: ${theme.colors.pink};
      margin: ${theme.spacings.small};
      cursor: pointer;
      padding: 0 ${theme.spacings.medium};
      height: 4rem;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`;
