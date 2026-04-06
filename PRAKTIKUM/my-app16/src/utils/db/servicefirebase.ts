import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  addDoc,
  where,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcryptjs";

const db = getFirestore(app);

// Fungsi untuk mengambil semua produk
export async function retrieveProduk(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

// Fungsi untuk mengambil data berdasarkan ID
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

// Fungsi pendaftaran User (Sign Up)
export async function signUp(
  userData: any, 
  callback: (result: { status: boolean; message: string }) => void
) {
  try {
    // 1. Validasi Input di sisi Server
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

    // 2. Hash Password
    const saltRounds = 10;
    userData.password = await bcrypt.hash(userData.password, saltRounds);
    
    // 3. Tambahkan Role Default "member"
    userData.role = "member"; 

    await addDoc(collection(db, "users"), userData);
    callback({ status: true, message: "Registrasi Berhasil" });

  } catch (error: any) {
    callback({ status: false, message: error.message });
  }
}