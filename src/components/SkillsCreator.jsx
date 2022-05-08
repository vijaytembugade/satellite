import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Creatable from 'react-select/creatable';

const options = [
  { value: 'Javscript', label: 'Javscript' },
  { value: 'React', label: 'React' },
  { value: 'Html', label: 'Html' },
  { value: 'CSS', label: 'CSS' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Vuejs', label: 'Vuejs' },
  { value: 'C++', label: 'C++' },
  { value: 'C', label: 'C' },
  { value: 'Python', label: 'Python' },
  { value: 'NextJs', label: 'NextJs' },
  { value: 'Tailwind', label: 'Tailwind' },
  { value: 'Git', label: 'Git' },
];

function SkillsCreator({ skills, dispatch }) {
  console.log(skills);

  return (
    <Box my="2">
      <Text htmlFor="skills" mt="2">
        Please Select the Skills required
      </Text>
      <Creatable
        defaultValue={
          skills?.length > 0
            ? skills?.map(value => ({
                value: value,
                label: value,
              }))
            : []
        }
        onChange={value =>
          dispatch({
            type: 'SET_SKILLS',
            payload: value.map(item => item.value),
          })
        }
        options={options}
        isMulti={true}
        placeholder="Skills..."
      />
    </Box>
  );
}

export { SkillsCreator };
