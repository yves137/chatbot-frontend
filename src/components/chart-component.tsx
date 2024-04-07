import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  MessageModel,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import dayjs from "dayjs";
import { useState } from "react";

interface IChartComponent {
  closeChart: () => void;
}

function ChartComponent({ closeChart }: IChartComponent) {
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<MessageModel[]>([
    {
      message:
        "Hello My name is BOT, I'm here to assist you on Question regarding to AUCA.",
      sentTime: dayjs().format("HH:mm:ss"),
      sender: "BOT",
      position: "first",
      direction: "incoming",
    },
  ]);

  const updateMessages = (msg: string, sender: "BOT" | "YOU") => {
    if (sender === "BOT")
      setMessages((msgs) => [
        ...msgs,
        {
          message: msg,
          sender,
          sentTime: dayjs().format("HH:mm:ss"),
          position: "normal",
          direction: "incoming",
        },
      ]);
    else if (sender === "YOU")
      setMessages((msgs) => [
        ...msgs,
        {
          message: msg,
          sender,
          sentTime: dayjs().format("HH:mm:ss"),
          position: "normal",
          direction: "outgoing",
        },
      ]);
  };

  const handleSendMessage = async (msg: string) => {
    if (
      !msg
        .replace(/&nbsp;/g, "")
        .replace(/<br>/g, "")
        .trim().length
    )
      return;

    updateMessages(msg, "YOU");
    setIsTyping(true);

    const response = await fetch("http://127.0.0.1:5000/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: msg }),
    })
      .then((data) => data.json())
      .then((data) => ({
        answer: data.answer as string,
      }))
      .catch(() => null);

    if (!response)
      updateMessages(
        "Sorry, There is something wrong with System, I can't provide you answer right now. Try Again!",
        "BOT"
      );
    else updateMessages(response.answer, "BOT");
    setIsTyping(false);
  };

  return (
    <div className="fixed right-4 bottom-10 w-72 h-80">
      <div className="flex justify-end bg-blue-600">
        <span
          className="bg-blue-500 font-bold px-2 text-lg text-red-600 rounded-mdtext-center hover:cursor-pointer hover:text-red-700"
          onClick={closeChart}
        >
          x
        </span>
      </div>
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={
              isTyping ? <TypingIndicator content="BOT is typing" /> : null
            }
          >
            {messages.map((msg, i) => (
              <Message model={msg} key={i} />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            onSend={handleSendMessage}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default ChartComponent;
