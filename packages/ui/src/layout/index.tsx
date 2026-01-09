export function ChatLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {children}
        </div>
    );
}

export function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex flex-col">
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
