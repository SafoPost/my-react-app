import React from 'react';
import firebase from "firebase/app";
import 'firebase/auth';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyDCBWu1BLLIAYQLsu2zg5ml02GPmOaz2Z0",
  authDomain: "my-react-app-4d317.firebaseapp.com",
  databaseURL: "https://my-react-app-4d317.firebaseio.com",
  projectId: "my-react-app-4d317",
  storageBucket: "my-react-app-4d317.appspot.com",
  messagingSenderId: "867065070418",
  appId: "1:867065070418:web:04b80ad69216ad971f308b",
  measurementId: "G-HTGGVFXQQ5"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem} />
      { openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
