import React, { useState, useRef, useEffect } from "react";
import { X, Send, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  isTyping?: boolean;
}

const questions = [
  "What is CAiRL's mission?",
  "How does CAiRL collaborate with startups?",
  "What sectors does CAiRL focus on?",
  "How can I collaborate with CAiRL?",
  "Does CAiRL provide AI education or training programs?",
  "How does CAiRL ensure ethical AI development?",
  "How can I apply for grants or funding at CAiRL?",
  "What are CAiRL's future goals for AI in India?",
  "How can I stay updated with CAiRL's initiatives?",
];

const answers = [
  "CAiRL's mission is to advance AI research and innovation in India through collaborative partnerships, cutting-edge research, and practical applications that address real-world challenges.",
  "CAiRL partners with startups through incubators like T-Hub, where we offer mentorship, resources, and connections to industry leaders.",
  "CAiRL focuses on multiple sectors including healthcare, agriculture, education, manufacturing, and public services.",
  "You can collaborate with CAiRL as a research partner, startup, academic institution, or individual researcher.",
  "Yes, CAiRL offers various educational programs including workshops, bootcamps, and certificate courses.",
  "CAiRL ensures ethical AI development through an Ethics Committee, promoting transparency, fairness, and impact assessments.",
  "Visit our website's Funding section for information on current grants, eligibility, and application procedures.",
  "CAiRL aims to make India a global AI hub with responsible governance, local solutions, and talent development.",
  "Subscribe to our newsletter, follow us on social media, and check our website for the latest updates.",
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showFAQs, setShowFAQs] = useState(true);
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Get welcome message
  const getWelcomeMessage = () => {
    return "Hello! I'm CAiRL's AI assistant. I'm here to help you learn about our research, programs, and collaboration opportunities. Please select a question from below:";
  };

  // Initialize messages when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "1",
          text: getWelcomeMessage(),
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      setShowFAQs(true);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();

    console.log(typingMessageId);
  }, [messages]);

  // Typewriter effect for bot messages
  const typewriterEffect = (
    text: string,
    messageId: string,
    callback?: () => void
  ) => {
    let index = 0;
    const speed = 30; // Typing speed in milliseconds

    const typeInterval = setInterval(() => {
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
        clearInterval(typeInterval);
        if (callback) callback();
      }
    }, speed);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setShowFAQs(false);

    // Process user input and generate response
    const userInput = inputValue.toLowerCase();
    let botResponseText =
      "Thank you for your question! I understand you're asking about CAiRL. For the best answers, please select from the questions below, as I have detailed information prepared for those topics.";

    // Check if user input matches any of our questions
    const questionIndex = questions.findIndex(
      (q) =>
        userInput.includes(q.toLowerCase().substring(0, 10)) ||
        q.toLowerCase().includes(userInput.substring(0, 10))
    );

    if (questionIndex !== -1) {
      botResponseText = answers[questionIndex];
    }

    // Simulate bot response with typewriter effect
    setTimeout(() => {
      const botResponseId = (Date.now() + 1).toString();
      const botResponse: Message = {
        id: botResponseId,
        text: "",
        sender: "bot",
        timestamp: new Date(),
        isTyping: true,
      };

      setMessages((prev) => [...prev, botResponse]);
      setTypingMessageId(botResponseId);

      // Start typewriter effect
      typewriterEffect(botResponseText, botResponseId, () => {
        setShowFAQs(true); // Show FAQs after typing is complete
      });
    }, 1000);
  };

  const handleFAQClick = (questionIndex: number) => {
    const question = questions[questionIndex];
    const answer = answers[questionIndex];

    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setShowFAQs(false);

    // Simulate bot response with typewriter effect
    setTimeout(() => {
      const botResponseId = (Date.now() + 1).toString();
      const botMessage: Message = {
        id: botResponseId,
        text: "",
        sender: "bot",
        timestamp: new Date(),
        isTyping: true,
      };

      setMessages((prev) => [...prev, botMessage]);
      setTypingMessageId(botResponseId);

      // Start typewriter effect
      typewriterEffect(answer, botResponseId, () => {
        setShowFAQs(true); // Show FAQs after typing is complete
      });
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset state when closing
    setMessages([]);
    setShowFAQs(true);
  };

  return (
    <>
      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-background p-0 rounded-full shadow-lg z-40 hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none"
          aria-label="Open chat"
        >
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176556/chat_icon_endzvg.png"
            alt="Chat icon"
            className="w-14 h-14 rounded-full object-cover border-2 border-border"
          />
        </button>
      )}

      {/* Chat interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 w-96 h-[600px] bg-background border border-border rounded-lg shadow-xl z-40 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-secondary">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <img
                  src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176660/footer-logo_jgk1wb.png"
                  alt="CAiRL Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex flex-col justify-center mt-6">
                <h3 className="text-base font-medium text-secondary-foreground leading-tight">
                  CAiRL Assistant
                </h3>
                <p className="text-xs text-muted-foreground mt-0.2">
                  AI Research & Innovation
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="h-9 w-9 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center flex-shrink-0 border border-border">
                      <img
                        src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176556/chat_icon_endzvg.png"
                        alt="Chat icon"
                        className="w-6 h-6 object-contain rounded-full"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-secondary text-secondary-foreground rounded-bl-sm"
                    }`}
                  >
                    {message.text}
                    {message.sender === "bot" && message.isTyping && (
                      <span className="inline-block w-2 h-4 bg-muted-foreground ml-1 animate-pulse"></span>
                    )}
                  </div>
                  {message.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-secondary-foreground" />
                    </div>
                  )}
                </div>
              ))}

              {/* FAQ Section - Shows all questions after every bot response */}
              {showFAQs &&
                messages.length > 0 &&
                messages[messages.length - 1].sender === "bot" && (
                  <div className="space-y-3 mt-4 p-3 bg-secondary rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <p className="font-medium">Select a question:</p>
                    </div>
                    <div className="space-y-2">
                      {questions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleFAQClick(index)}
                          className="w-full text-left p-3 bg-background hover:bg-accent border border-border hover:border-ring rounded-lg text-sm transition-all duration-200 hover:shadow-sm"
                        >
                          <span className="text-foreground">{question}</span>
                        </button>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        Or type your own question below ↓
                      </p>
                    </div>
                  </div>
                )}
            </div>
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-secondary">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue(e.target.value)
                }
                onKeyPress={handleKeyPress}
                placeholder="Type your question here..."
                className="flex-1 px-3 py-2 bg-input border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed transition-colors flex items-center justify-center"
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
