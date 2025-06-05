import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react'; // Optional: use your icon

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed md:bottom-6 bottom-1 right-6 z-50 flex flex-col items-end">
      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-80 h-96 bg-white border border-gray-300 rounded-xl shadow-xl overflow-hidden flex flex-col"
          >
            <div className="bg-blue-600 text-white p-3 font-semibold">
              Chat with us
            </div>
            <div className="flex-1 p-3 text-gray-600 text-sm overflow-y-auto">
              <p>Hello! How can I help you today?</p>
              <p className="mt-2 italic">[Dummy chatbot placeholder]</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="hover:-translate-y-2 bg-white cursor-pointer text-white rounded-full  transition-all duration-300"
        aria-label="Toggle Chat"
      >
        {/* <MessageCircle size={24} /> */}
        <img src="/kai.webp" alt="" className='w-20' />
      </button>
    </div>
  );
};

export default ChatbotWidget;
