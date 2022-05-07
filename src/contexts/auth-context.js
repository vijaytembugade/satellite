import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { auth } from '../firebase/config';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    user: null,
    isLoggedIn: false,
  };
  const authReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN': {
        return { ...state, user: action.payload, isLoggedIn: true };
      }
      case 'LOGOUT': {
        return { ...state, user: null, isLoggedIn: false };
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch({
          type: 'LOGIN',
          payload: {
            email: user?.email,
            name: user?.displayName,
            uid: user?.uid,
            photo: user?.photoURL,
          },
        });
      } else {
        dispatch({ type: 'LOGOUT' });
      }
    });

    return () => unsub();
  }, []);

  console.log(state);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('Erorr in useAuth!');
  }

  return context;
};

export { useAuth, AuthProvider };
