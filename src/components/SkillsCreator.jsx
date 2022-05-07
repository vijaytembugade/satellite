import { Box, FormLabel } from '@chakra-ui/react';
import React, { useState } from 'react';
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

function SkillsCreator() {
  const [selectedOption, setSelectedOption] = useState([]);

  return (
    <Box my="2">
      <FormLabel htmlFor="skills" mt="2">
        Please Select the Skills required
      </FormLabel>
      <Creatable
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isMulti={true}
        placeholder="Skills..."
      />
    </Box>
  );
}

export { SkillsCreator };
