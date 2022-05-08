import { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const JobContext = createContext(null);

const useJobContext = () => useContext(JobContext);

const JobProvider = ({ children }) => {
  const [jobsData, setJobsData] = useState([]);
  console.log(jobsData);

  useEffect(() => {
    const collectionRef = collection(db, 'Jobs');
    getDocs(collectionRef).then(snapshot => {
      const newData = snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      }));
      setJobsData([...newData]);
    });
  }, []);

  return (
    <JobContext.Provider value={{ jobsData, setJobsData }}>
      {children}
    </JobContext.Provider>
  );
};

export { JobProvider, useJobContext };
