import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button({ className = '', variant = 'primary', ...props }: ButtonProps) {
    const baseStyles = "rounded-md px-4 py-2 transition-colors font-medium border border-transparent";
    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100",
        ghost: "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        />
    );
}

export function NewChatButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <Button variant="primary" className="w-full" {...props}>
            New Chat
        </Button>
    );
}

export function SendButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <Button variant="primary" className="px-6" {...props}>
            Send
        </Button>
    );
}
