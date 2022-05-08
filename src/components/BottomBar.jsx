import React, { useState } from 'react';
import { FormControl, Input, Button, Flex } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import EmojiPicker from 'emoji-picker-react';

export const BottomBar = ({ id, user }) => {
  const [input, setInput] = useState('');
  const [toggle, settoggle] = useState(false);

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
  // const [emoji,setEmoji] = useState("");

  const onEmojiClick = async (event, emojiObject) => {
    // setInput(emojiObject.emoji)
    settoggle(false)
    await addDoc(collection(db, `chats/${id}/messages`), {
      text: emojiObject.emoji,
      sender: user.email,
      timeAt: serverTimestamp(),
    });
   
    // sendEmoji()
  };

  return (
    <FormControl p={3} onSubmit={sendMessage} as="form">
      <Flex style={{ position: 'relative'}}>
        <Input
          placeholder="Type a message..."
          autoComplete="off"
          onChange={e => setInput(e.target.value)}
          value={input}
        />
        <div style={{ position: 'absolute', bottom: '4rem',right:"1rem" }}>
          {toggle && (
            <EmojiPicker
              style={{ overflowX: 'hidden' }}
              onEmojiClick={onEmojiClick}
              disableAutoFocus={true}
              // skinTone={SKIN_TONE_MEDIUM_DARK}
              groupNames={{ smileys_people: 'PEOPLE' }}
              native
            />
          )}
        </div>
        <button onClick={() => settoggle(prev => !prev)}>😀</button>
        <Button type="submit">
          <ArrowRightIcon />
        </Button>
      </Flex>
    </FormControl>
  );
};
