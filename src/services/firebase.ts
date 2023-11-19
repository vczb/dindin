import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZjkGpg1hY-7QK8R5w64V-s-CsxqsS5_c",
  authDomain: "dindin-c29cb.firebaseapp.com",
  projectId: "dindin-c29cb",
  storageBucket: "dindin-c29cb.appspot.com",
  messagingSenderId: "291366736553",
  appId: "1:291366736553:web:6a258d4965186fdd700fb8",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const DATABASE = window.location.host === "vczb.github.io" ? "store" : "test";

export type insertItemProps = {
  category: string;
  price: number;
  description: string;
  date: string;
};

export const insertItem = async ({
  category,
  price,
  description,
  date,
}: insertItemProps) => {
  return await setDoc(doc(db, DATABASE, Date.now().toString()), {
    category,
    price,
    description,
    date,
  });
};

export const getCollection = async () => {
  try {
    const collectionRef = collection(db, DATABASE);
    const querySnapshot = await getDocs(collectionRef);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inventory: any = [];

    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        inventory.push({
          id: doc.id,
          ...doc.data(),
        });
      }
    });

    return inventory;
  } catch (error) {
    console.error("Error getting inventory:", error);
    throw error; // You can handle the error as needed in your application
  }
};
