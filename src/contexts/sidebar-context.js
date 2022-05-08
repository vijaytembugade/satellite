import { createContext, useContext,useRef} from 'react';
import {useDisclosure,
    } from '@chakra-ui/react';

const SidebarContext = createContext(null);

const useSidebarContext = () => useContext(SidebarContext);

const SidebarProvider = ({ children }) => {
    const btnRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SidebarContext.Provider value={{ isOpen, onOpen, onClose,btnRef }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarProvider, useSidebarContext };