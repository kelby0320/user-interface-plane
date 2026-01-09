export function ChatLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen w-full bg-main text-text-primary font-sans">
            {children}
        </div>
    );
}

export function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-64 border-r border-border-subtle bg-sidebar flex flex-col">
            {children}
        </div>
    );
}

export function ChatArea({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex-1 flex flex-col relative">
            {children}
        </div>
    );
}
