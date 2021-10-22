import { FormEvent, useState } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';

import * as S from './styles';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  const { user, signOut } = useAuth();

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    setIsSendingMessage(true);

    try {
      await api.post('messages', {
        message,
      });

      setMessage('');
    } finally {
      setIsSendingMessage(false);
    }
  }

  return (
    <S.Wrapper>
      <S.SignOutButton onClick={signOut}>
        <VscSignOut size={32} />
      </S.SignOutButton>

      <S.UserInformation>
        <S.UserImage>
          <img src={user?.avatar_url} alt={user?.name} />
        </S.UserImage>

        <S.UserName>{user?.name}</S.UserName>

        <S.UserGithub>
          <VscGithubInverted size={16} />

          {user?.login}
        </S.UserGithub>
      </S.UserInformation>

      <S.SendMessageForm onSubmit={handleSendMessage}>
        <label htmlFor='message'>Mensagem</label>

        <textarea
          name='message'
          id='message'
          placeholder='Qual sua expectativa para o evento?'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <button disabled={isSendingMessage} type='submit'>
          Enviar mensagem
        </button>
      </S.SendMessageForm>
    </S.Wrapper>
  );
}
