import React, { useState, useRef, useEffect } from "react";
import { X, Send, User, Bot } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  isTyping?: boolean;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  const [isBotReplying, setIsBotReplying] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const typeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Initialize with welcome message when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "1",
          text: "Hello! I'm CAiRL's AI assistant. How can I help you today?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typingMessageId]);

  // Typewriter effect for bot messages
  const typewriterEffect = (
    text: string,
    messageId: string,
    callback?: () => void
  ) => {
    let index = 0;
    const speed = 20; // Faster typing speed for professional feel

    if (typeIntervalRef.current) {
      clearInterval(typeIntervalRef.current);
    }

    typeIntervalRef.current = setInterval(() => {
      if (index < text.length) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId
              ? { ...msg, text: text.substring(0, index + 1), isTyping: true }
              : msg
          )
        );
        index++;
      } else {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId ? { ...msg, text: text, isTyping: false } : msg
          )
        );
        setTypingMessageId(null);
        if (typeIntervalRef.current) {
          clearInterval(typeIntervalRef.current);
          typeIntervalRef.current = null;
        }
        if (callback) callback();
      }
    }, speed);
  };

  const callN8nWebhook = async (question: string) => {
    try {
      const chatbot_api = import.meta.env.VITE_CHATBOT_API_URL;
      const response = await fetch(chatbot_api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question,
          sessionId: Date.now().toString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error calling n8n webhook:", error);
      throw error;
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isBotReplying) return;

    setIsBotReplying(true);

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const question = inputValue;
    setInputValue("");

    const botResponseId = (Date.now() + 1).toString();
    const botTypingMessage: Message = {
      id: botResponseId,
      text: "", // Start with empty text
      sender: "bot",
      timestamp: new Date(),
      isTyping: true,
    };

    setMessages((prev) => [...prev, botTypingMessage]);
    setTypingMessageId(botResponseId);

    try {
      // Get response from n8n
      const n8nResponse = await callN8nWebhook(question);

      // Use typewriter effect with the response from n8n
      typewriterEffect(
        n8nResponse.answer ||
          n8nResponse.text ||
          "I couldn't find an answer to that question. Could you try rephrasing?",
        botResponseId,
        () => setIsBotReplying(false)
      );
    } catch (error) {
      console.error("Error:", error);
      // Fallback response on error, updating the typing message
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botResponseId
            ? {
                ...msg,
                text: "I'm having trouble connecting to the knowledge base. Please try again later.",
                isTyping: false,
              }
            : msg
        )
      );
      setTypingMessageId(null);
      setIsBotReplying(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessages([]);
    if (typeIntervalRef.current) {
      clearInterval(typeIntervalRef.current);
      typeIntervalRef.current = null;
    }
    setIsBotReplying(false);
    setTypingMessageId(null);
  };

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Cleanup effect for component unmount
  useEffect(() => {
    return () => {
      if (typeIntervalRef.current) {
        clearInterval(typeIntervalRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg z-40 hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none flex items-center justify-center"
          aria-label="Open chat"
        >
          <div className="relative">
            <Bot className="w-7 h-7 text-background" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-foreground"></span>
          </div>
        </button>
      )}

      {/* Chat interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-foreground border border-foreground/30 rounded-lg shadow-xl z-40 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-foreground rounded-t-lg flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176660/footer-logo_jgk1wb.png"
                  alt="CAiRL Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  CAiRL Assistant
                </h3>
                <p className="text-xs text-green-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="h-8 w-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 focus:outline-none"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-foreground">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-end ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  } mb-2 group relative`}
                >
                  {message.sender === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0 mr-2 overflow-hidden">
                      <img
                        src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176556/chat_icon_endzvg.png"
                        alt="CAiRL"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Message bubble and timestamp */}
                  <div className="relative max-w-[80%]">
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-sm ${
                        message.sender === "user"
                          ? "bg-background/70 text-foreground rounded-br-none shadow-sm"
                          : "bg-background/70 text-foreground rounded-bl-none shadow-sm"
                      }`}
                    >
                      {message.text ||
                        (message.isTyping && (
                          <span className="flex items-center space-x-1">
                            <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce delay-75"></span>
                            <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce delay-150"></span>
                          </span>
                        ))}
                    </div>

                    <span
                      className={`absolute text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                        message.sender === "user" ? "right-0" : "left-0"
                      } mt-1`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>

                  {/* User avatar */}
                  {message.sender === "user" && (
                    <div className="w-6 h-6 rounded-full bg-background/60 flex-shrink-0 ml-2 flex items-center justify-center">
                      <User className="w-5 h-5 text-foreground" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-secondary/20 bg-foreground">
            <div className="relative rounded-xl border border-input focus-within:border-primary focus-within:ring-1 focus-within:ring-ring transition-all">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={
                  isBotReplying
                    ? "Waiting for response..."
                    : "Message CAiRL Assistant..."
                }
                className="w-full px-4 py-3 pr-12 bg-background/70 text-foreground placeholder:text-muted-foreground rounded-xl text-sm focus:outline-none"
                disabled={isBotReplying}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isBotReplying}
                className={`
        absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-full 
        transition-colors
        ${
          inputValue.trim() && !isBotReplying
            ? "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80"
            : "bg-muted text-muted-foreground cursor-not-allowed"
        }
      `}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
