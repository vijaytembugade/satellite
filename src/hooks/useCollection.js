import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const useCollection = (collection_name, uid) => {
  const [documents, setDocuments] = useState([]);

  console.log(uid);

  useEffect(() => {
    const collectionRef = collection(db, collection_name);

    getDocs(collectionRef).then(snapshot => {
      const newData = snapshot.docs.map(doc => doc.data());
      setDocuments(newData);
    });
  }, [collection_name, uid]);

  return { documents };
};

export default useCollection;
