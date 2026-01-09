import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button({ className = '', variant = 'primary', ...props }: ButtonProps) {
    const baseStyles = "rounded-btn px-4 py-2 transition-colors font-medium border border-transparent";
    const variants = {
        primary: "bg-accent hover:bg-white text-accent-fg",
        secondary: "bg-surface hover:bg-border-subtle text-text-primary border-border-subtle",
        ghost: "hover:bg-surface text-text-muted hover:text-text-primary"
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
        <Button variant="secondary" className="w-full" {...props}>
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
