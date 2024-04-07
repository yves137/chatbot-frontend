import { useState } from "react";
import ChartComponent from "./components/chart-component";
import { ChatboxIcon } from "./components/chatbox-icon";
import HomePage from "./page/homepage";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChat = () => {
    setIsOpen(true);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HomePage />
      {!isOpen && <ChatboxIcon openChart={handleOpenChat} />}
      {isOpen && <ChartComponent closeChart={handleCloseChat} />}
    </>
  );
}

export default App;
