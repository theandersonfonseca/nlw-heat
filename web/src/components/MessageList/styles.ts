import styled, { css } from 'styled-components/macro';
import { Wrapper as Logo } from '../Logo/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  ${Logo} {
    & svg {
      height: 2.8rem;
      margin: 3.2rem 0;
    }
  }
`;

export const MessageList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  flex: 1;
  justify-content: center;
`;

export const MessageContent = styled.p`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  flex: 1;
  justify-content: center;
`;

export const Message = styled.li`
  max-width: 44rem;

  &:nth-child(2) {
    margin-left: 8rem;
  }
`;

export const MessageUser = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;

    & span {
      margin-left: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const UserImage = styled.div`
  ${({ theme }) => css`
    padding: 0.1rem;
    background: linear-gradient(104.3deg, #ff008e 0.48%, #ffcd1e 100%);
    border-radius: 50%;
    line-height: 0;
    width: 3.5rem;
    height: 3.5rem;

    & img {
      width: 100%;
      display: block;
      border-radius: 50%;
      border: 0.4rem solid ${theme.colors.secondaryBlack};
    }
  `}
`;
