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
          p-3 rounded-panel max-w-[80%] 
          ${isUser
                        ? 'bg-surface text-text-primary rounded-tr-none'
                        : 'bg-transparent text-text-primary pl-0'
                    }
        `}
            >
                {children}
            </div>
        </div>
    );
}
