import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import io from 'socket.io-client';
import { Logo } from '../Logo';

import * as S from './styles';

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

let messagesQueue: Message[] = [];

const socket = io('http://localhost:4000');

socket.on('new_message', (newMessage) => {
  messagesQueue.push(newMessage);
});

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    api.get<Message[]>('messages/last3').then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prevState) =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean)
        );

        messagesQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <S.Wrapper>
      <Logo />

      <S.MessageList>
        {messages.map((message) => {
          return (
            <S.Message key={message.id}>
              <S.MessageContent>{message.text}</S.MessageContent>

              <S.MessageUser>
                <S.UserImage>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </S.UserImage>

                <span>{message.user.name}</span>
              </S.MessageUser>
            </S.Message>
          );
        })}
      </S.MessageList>
    </S.Wrapper>
  );
}
