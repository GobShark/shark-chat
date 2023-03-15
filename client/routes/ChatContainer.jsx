import React, { useState, useEffect } from "react";

import Header from "../components/Header.jsx";
import LBar from "../components/LBar.jsx";
import ChatWindow from "../components/ChatWindow.jsx";
import ChatBubble from "../components/ChatBubble.jsx";

import { userCredentialsStore } from "../store.js";

export default function ChatContainer() {
  userCredentialsStore((state) => {
    console.log(state);
  });

  return (
    <div>
        <Header />
      <div>
      <LBar />
        {/* <ChatWindow /> */}
      </div>
    </div>
  )
}