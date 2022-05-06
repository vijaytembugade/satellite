import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useAuth } from '../contexts';

const useGoogleLogin = () => {
  const { dispatch } = useAuth();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;

      dispatch({
        type: 'LOGIN',
        payload: { email: user.email, name: user.displayName, uid: user.uid },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { signInWithGoogle };
};

export default useGoogleLogin;
