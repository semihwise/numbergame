import { initializeApp } from "firebase/app";
import {  getFirestore} from 'firebase/firestore/lite';



const firebase =()=> { 
    const firebaseConfig = {
        apiKey: "AIzaSyCY15k_YctqvWKkMXs0u1MpVOHnv2JlS0k",
        authDomain: "sayioyunu-d7ad2.firebaseapp.com",
        projectId: "sayioyunu-d7ad2",
        storageBucket: "sayioyunu-d7ad2.appspot.com",
        messagingSenderId: "1052142411748",
        appId: "1:1052142411748:web:829d7c2b8feca0ee6571f1",
        measurementId: "G-RZ7T1LEHDX"
      };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    return db;
}
export default firebase; 


