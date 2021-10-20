import { VscGithubInverted } from 'react-icons/vsc';
import { useAuth } from '../../hooks/useAuth';

import * as S from './styles';

export function LoginBox() {
  const { signInUrl } = useAuth();

  return (
    <S.Wrapper>
      <strong>Entre e compartilhe sua mensagem</strong>

      <S.SignWithGithubButton href={signInUrl}>
        <VscGithubInverted size={24} />
        Entrar com Github
      </S.SignWithGithubButton>
    </S.Wrapper>
  );
}
