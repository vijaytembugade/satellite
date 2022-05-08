import { useReducer } from 'react';
import { useAuth } from '../contexts';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Creatable from 'react-select/creatable';
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { toast } from 'react-toastify';
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

export const ProfileDetails = ({ close }) => {
  const {
    state: { user, profileData, profileId },
    dispatch: userDispatch,
  } = useAuth();

  const initialState = {
    uid: user?.uid || '',
    about: profileData?.about || '',
    email: user.email,
    github: profileData?.github || '',
    linkedIn: profileData?.linkedIn || '',
    peerlist: profileData?.peerlist || '',
    twitter: profileData?.twitter || '',
    appliedJobs: profileData?.appliedJobs || [],
    project: {
      first: profileData?.project?.first || '',
      second: profileData?.project?.second || '',
      third: profileData?.project?.third || '',
    },
    skills: profileData?.skills,
  };
  const profileReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_ABOUT': {
        return { ...state, about: action.payload };
      }
      case 'UPDATE_GITHUB': {
        return { ...state, github: action.payload };
      }
      case 'UPDATE_LINKEDIN': {
        return { ...state, linkedIn: action.payload };
      }
      case 'UPDATE_PEERLIST': {
        return { ...state, peerlist: action.payload };
      }
      case 'UPDATE_TWITTER': {
        return { ...state, twitter: action.payload };
      }
      case 'UPDATE_PROJECT': {
        return {
          ...state,
          project: {
            ...state.project,
            [action.payload.index]: action.payload.data,
          },
        };
      }
      case 'UPDATE_SKILLS': {
        return { ...state, skills: [...action.payload] };
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(profileReducer, initialState);

  async function handleSubmit(e) {
    if (profileData === undefined || profileData === null) {
      try {
        const docRef = await addDoc(collection(db, 'Users'), {
          ...state,
        });
        close();
        toast.success('Profile Added Successfully', {
          position: 'bottom-right',
          autoClose: 2000,
        });
      } catch (e) {
        console.error('Error adding document: ', e);
        toast.error('Error adding Profile', {
          position: 'bottom-right',
          autoClose: 2000,
        });
      }
    } else {
      try {
        const collectionRef = await doc(db, 'Users', profileId);
        updateDoc(collectionRef, { ...state });

        const unsb = onSnapshot(collectionRef, doc => {
          userDispatch({
            type: 'SET_PROFILE_DATA',
            payload: { data: doc.data(), profileId: doc.id },
          });
        });
        close();
        toast.success('Profile Updated Successfully', {
          position: 'bottom-right',
          autoClose: 2000,
        });
      } catch (err) {
        console.error(err);
        toast.error('Error Updating Profile', {
          position: 'bottom-right',
          autoClose: 2000,
        });
      }
    }
  }

  return (
    <Flex justify="center" alignItems="center" direction="column" gap="4" p="6">
      <FormControl width={{ base: '100%', md: '50%', xl: '40%' }}>
        <Text fontSize="2xl">Enter Social Accounts</Text>
        <FormLabel>
          <Text fontSize="1xl">About</Text>
          <Input
            placeholder="tell us more about yourself"
            isRequired
            value={state.about}
            onChange={e =>
              dispatch({ type: 'UPDATE_ABOUT', payload: e.target.value })
            }
          />
        </FormLabel>
        <FormLabel>
          <Text fontSize="1xl">Github</Text>
          <Input
            placeholder="Enter Github Link"
            isRequired
            value={state.github}
            onChange={e =>
              dispatch({ type: 'UPDATE_GITHUB', payload: e.target.value })
            }
          />
        </FormLabel>
        <FormLabel>
          <Text fontSize="1xl">LinkedIn</Text>
          <Input
            placeholder="Enter LinkedIn Link"
            isRequired
            value={state.linkedIn}
            onChange={e =>
              dispatch({ type: 'UPDATE_LINKEDIN', payload: e.target.value })
            }
          />
        </FormLabel>
        <FormLabel>
          <Text fontSize="1xl">PeerList</Text>
          <Input
            placeholder="Enter PeerList Link"
            isRequired
            value={state.peerlist}
            onChange={e =>
              dispatch({ type: 'UPDATE_PEERLIST', payload: e.target.value })
            }
          />
        </FormLabel>
        <FormLabel>
          <Text fontSize="1xl">Twitter</Text>
          <Input
            placeholder="Enter Twitter Link"
            isRequired
            value={state.twitter}
            onChange={e =>
              dispatch({ type: 'UPDATE_TWITTER', payload: e.target.value })
            }
          />
        </FormLabel>

        <Text fontSize="2xl">Add 3 Projects</Text>
        <FormLabel>
          <Text fontSize="1xl">First </Text>
          <Input
            placeholder="Enter First Project Link"
            value={state.project.first}
            onChange={e =>
              dispatch({
                type: 'UPDATE_PROJECT',
                payload: { index: 'first', data: e.target.value },
              })
            }
          />
        </FormLabel>
        <FormLabel>
          <Text fontSize="1xl">Second</Text>
          <Input
            placeholder="Enter Second Link"
            isRequired
            value={state.project.second}
            onChange={e =>
              dispatch({
                type: 'UPDATE_PROJECT',
                payload: { index: 'second', data: e.target.value },
              })
            }
          />
        </FormLabel>
        <FormLabel>
          <Text fontSize="1xl">Third</Text>
          <Input
            placeholder="Enter Third Link"
            isRequired
            value={state.project.third}
            onChange={e =>
              dispatch({
                type: 'UPDATE_PROJECT',
                payload: { index: 'third', data: e.target.value },
              })
            }
          />
        </FormLabel>
        <Box>
          <Creatable
            defaultValue={
              state?.skills?.length > 0
                ? state?.skills?.map(value => ({
                    value: value,
                    label: value,
                  }))
                : []
            }
            onChange={value =>
              dispatch({
                type: 'UPDATE_SKILLS',
                payload: value.map(item => item.value),
              })
            }
            options={options}
            isMulti={true}
            placeholder="Skills..."
          />
        </Box>
        <Flex gap="10" mt="2rem">
          <Button colorScheme="purple" variant="outline" onClick={close}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} colorScheme="purple">
            Submit
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  );
};
