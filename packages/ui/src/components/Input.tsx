import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export function Input({ className = '', ...props }: InputProps) {
    return (
        <input
            className={`rounded-btn border border-border-subtle bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent ${className}`}
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
