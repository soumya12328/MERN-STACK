'use client'
import { Send, Trash2 } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react'

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: inputValue,
            sender: 'user',
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
    };

    const deleteMessage = (id) => {
        setMessages(messages.filter(msg => msg.id !== id));
    };

    return (
        <div className='bg-gray-100 min-h-screen p-4'>
            <div className='max-w-2xl mx-auto'>
                <h1 className='text-3xl font-bold text-center mb-6'>Chat App</h1>
                
                <div className='bg-white rounded-lg shadow-lg p-6 h-[500px] flex flex-col'>
                    {/* Messages */}
                    <div className='flex-1 overflow-y-auto border rounded-lg p-4 bg-gray-50 mb-4 space-y-3'>
                        {messages.length === 0 ? (
                            <p className='text-gray-400 text-center mt-20'>No messages yet</p>
                        ) : (
                            <>
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} gap-2`}
                                    >
                                        <div
                                            className={`max-w-xs px-4 py-2 rounded-lg ${
                                                msg.sender === 'user'
                                                    ? 'bg-blue-500 text-white'
                                                    : 'bg-gray-300 text-black'
                                            }`}
                                        >
                                            {msg.text}
                                        </div>
                                        <button
                                            onClick={() => deleteMessage(msg.id)}
                                            className='text-red-500 hover:text-red-700 self-center'
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </>
                        )}
                    </div>

                    {/* Input */}
                    <div className='flex gap-2'>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Type message..."
                            className='flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        <button
                            onClick={handleSendMessage}
                            className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatApp
