import { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './auth-context';

const JobContext = createContext(null);

const useJobContext = () => useContext(JobContext);

const JobProvider = ({ children }) => {
  const {
    state: { isLoggedIn },
  } = useAuth();

  const [jobsData, setJobsData] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      const collectionRef = collection(db, 'Jobs');
      getDocs(collectionRef).then(snapshot => {
        const newData = snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }));
        setJobsData([...newData]);
      });
    }
  }, [isLoggedIn]);
  return (
    <JobContext.Provider value={{ jobsData, setJobsData }}>
      {children}
    </JobContext.Provider>
  );
};

export { JobProvider, useJobContext };
