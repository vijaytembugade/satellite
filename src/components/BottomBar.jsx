import React, { useState } from 'react';
import { FormControl, Input, Button, Flex } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export const BottomBar = ({ id, user }) => {
  const [input, setInput] = useState('');

  const sendMessage = async e => {
    e.preventDefault();
    if (input !== '') {
      await addDoc(collection(db, `chats/${id}/messages`), {
        text: input,
        sender: user.email,
        timeAt: serverTimestamp(),
      });
    }
    setInput('');
  };

  return (
    <FormControl p={3} onSubmit={sendMessage} as="form">
      <Flex>
        <Input
          placeholder="Type a message..."
          autoComplete="off"
          onChange={e => setInput(e.target.value)}
          value={input}
        />
        <Button type="submit">
          <ArrowRightIcon />
        </Button>
      </Flex>
    </FormControl>
  );
};
