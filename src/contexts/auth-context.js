import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { auth, db } from '../firebase/config';

const AuthContext = createContext();

const initialState = {
  user: null,
  isLoggedIn: false,
  profileData: null,
  profileId: null,
};
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return { ...state, user: action.payload, isLoggedIn: true };
    }
    case 'LOGOUT': {
      return { ...state, user: null, isLoggedIn: false };
    }
    case 'SET_PROFILE_DATA': {
      return {
        ...state,
        profileData: action.payload.data,
        profileId: action.payload.profileId,
      };
    }
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { isLoggedIn, user } = state;

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

  useEffect(() => {
    if (isLoggedIn) {
      const collectionRef = collection(db, 'Users');
      const q = query(collectionRef, where('uid', '==', user?.uid));

      getDocs(q).then(snapshot => {
        const newData = snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }));

        console.log(newData);
        dispatch({
          type: 'SET_PROFILE_DATA',
          payload: { data: newData[0].data, profileId: newData[0].id },
        });
      });
    }
  }, [isLoggedIn, user]);

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
