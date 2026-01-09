import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export function Input({ className = '', ...props }: InputProps) {
    return (
        <input
            className={`rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            {...props}
        />
    );
}

export function SearchInput(props: InputProps) {
    return (
        <Input
            placeholder="Search..."
            className="w-full"
            {...props}
        />
    );
}

export function MessageInput(props: InputProps) {
    return (
        <Input
            placeholder="Type a message..."
            className="flex-1 px-4 text-base"
            {...props}
        />
    );
}
