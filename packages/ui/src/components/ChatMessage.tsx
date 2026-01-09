import React from 'react';

export interface ChatMessageProps {
    role: 'user' | 'ai';
    children: React.ReactNode;
}

export function ChatMessage({ role, children }: ChatMessageProps) {
    const isUser = role === 'user';

    return (
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1`}>
            <div
                className={`
          p-3 rounded-lg max-w-[80%] 
          ${isUser
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-none'
                    }
        `}
            >
                {children}
            </div>
        </div>
    );
}
