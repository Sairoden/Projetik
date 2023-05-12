import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = collectionData => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    let ref = collection(db, collectionData);

    onSnapshot(ref, snapshot => {
      const results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setDocuments(results);
    });
  }, [collectionData]);

  return { documents };
};

// 5 ka na
