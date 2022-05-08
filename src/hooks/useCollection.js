import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const useCollection = (collection_name, uid) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, collection_name);

    getDocs(collectionRef).then(snapshot => {
      const newData = snapshot.docs.map(doc => ({id:doc.id,...doc.data()}));
      setDocuments(newData);
    });
  }, [collection_name, uid]);

  return { documents };
};

export default useCollection;
