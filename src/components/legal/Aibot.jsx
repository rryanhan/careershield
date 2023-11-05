import {useState} from "react"
import "./aibot.css"
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react";
const API_KEY = "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"

const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
    "role": "system", "content": "Explain like I am 2 years old."
  }


const Aibot = () => {
    const [messages, setMessages] = useState([
        {
          message: "Inquries about the workplace? Ask me anything!",
          sentTime: "just now",
          sender: "ChatGPT"
        }
      ]);
      const [isTyping, setIsTyping] = useState(false);
    
      const handleSend = async (message) => {
        const newMessage = {
          message,
          direction: 'outgoing',
          sender: "user"
        };
    
        const newMessages = [...messages, newMessage];
        
        setMessages(newMessages);
    
        // Initial system message to determine ChatGPT functionality
        // How it responds, how it talks, etc.
        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
      };
    
      async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
        // Format messages for chatGPT API
        // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
        // So we need to reformat
    
        let apiMessages = chatMessages.map((messageObject) => {
          let role = "";
          if (messageObject.sender === "ChatGPT") {
            role = "assistant";
          } else {
            role = "user";
          }
          return { role: role, content: messageObject.message}
        });
    
    
        // Get the request body set up with the model we plan to use
        // and the messages which we formatted above. We add a system message in the front to'
        // determine how we want chatGPT to act. 
        const textChat = apiMessages[apiMessages.length - 1];

        const apiRequestBody = {
          "model": "gpt-3.5-turbo",
          "messages": [{"role": "user", content: textChat.content}]
        }
    
        await fetch("https://api.openai.com/v1/chat/completions", 
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(apiRequestBody)
        }).then((data) => {
          return data.json();
        }).then((data) => {
          console.log(data);
          setMessages([...chatMessages, {
            message: data.choices[0].message.content,
            sender: "ChatGPT"
          }]);
          setIsTyping(false);
        });
      }

  return (
    <div className="App">
      <div style={{ height: "500px", width: "1000px", marginTop:"100px", marginLeft:"auto", marginRight:"auto"}}>
        <MainContainer>
          <ChatContainer >       
            <MessageList
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="Legal is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput  placeholder="Type message here"  />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Aibot

//style={{ height: "500px", width: "1000px", marginTop:"100px", marginLeft:"auto", marginRight:"auto"}}
