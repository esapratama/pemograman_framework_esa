// import { getFirestore, collection, getDocs, Firestore, getDoc, doc } from "firebase/firestore";
// import app from "./firebase";

// const db = getFirestore(app);

// export async function retrieveData(collectionName: string) {
//   const snapshot = await getDocs(collection(db, collectionName));
//   const data = snapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
//   return data;
// }

// export async function retrieveDataById(collectionName: string, id: string) {
//   const snapshot = await getDoc(doc(db, collectionName, id));
//   const data = snapshot.data();
//   return data;
// }

import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const docRef = doc(db, collectionName, id);
  const snapshot = await getDoc(docRef);
  
  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  }
  return null;
}