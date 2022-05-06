import { signOut } from 'firebase/auth';
import { useAuth } from '../contexts';
import { auth } from '../firebase/config';

const useLogout = () => {
  const { dispatch } = useAuth();
  const logout = async () => {
    await signOut(auth);

    dispatch({ type: 'LOGOUT' });
  };
  return { logout };
};

export default useLogout;
