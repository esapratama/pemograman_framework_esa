import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  addDoc,
  where,
  updateDoc
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcryptjs";

const db = getFirestore(app);

export async function retrieveProduk(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signIn(email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    return data[0];
  } else {
    return null;
  }
}

export async function signUp(
  userData: any, 
  callback: (result: { status: boolean; message: string }) => void
) {
  try {
    if (!userData.email) {
      return callback({ status: false, message: "Email wajib diisi" });
    }
    if (userData.password.length < 6) {
      return callback({ status: false, message: "Password minimal 6 karakter" });
    }

    const q = query(collection(db, "users"), where("email", "==", userData.email));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      return callback({ status: false, message: "Email sudah terdaftar" });
    }

    const saltRounds = 10;
    userData.password = await bcrypt.hash(userData.password, saltRounds);
    
    userData.role = "member"; 

    await addDoc(collection(db, "users"), userData);
    callback({ status: true, message: "Registrasi Berhasil" });

  } catch (error: any) {
    callback({ status: false, message: error.message });
  }
}

export async function loginWithSocial(userData: any, callback: any) {
  try {
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email),
    );

    const querySnapshot = await getDocs(q);
    const data: any = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (data.length > 0) {
      userData.role = data[0].role;
      
      await updateDoc(doc(db, "users", data[0].id), userData);
      
      callback({
        status: true,
        message: "Login social media success",
        data: userData,
      });
    } else {

      userData.role = "member";
      
      await addDoc(collection(db, "users"), userData);
      callback({
        status: true,
        message: "Registration social media success",
        data: userData,
      });
    }
  } catch (error: any) {
    callback({
      status: false,
      message: "Failed to process social login",
    });
  }
}