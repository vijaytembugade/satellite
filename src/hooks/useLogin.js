import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useAuth } from '../contexts';

const useLogin = () => {
  const { state, dispatch } = useAuth();

  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch({
        type: 'LOGIN',
        payload: {
          email: res.user.email,
          uid: res.user.uid,
          name: res.user.displayName,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { login };
};

export { useLogin };
