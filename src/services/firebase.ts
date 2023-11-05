import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

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

type insertItemProps = {
  category: string;
  price: number;
  description: string;
};

export const insertItem = async ({
  category,
  price,
  description,
}: insertItemProps) => {
  return await setDoc(doc(db, "store", Date.now().toString()), {
    category,
    price,
    description,
  });
};
