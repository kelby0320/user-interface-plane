export interface ChatHistoryItem {
    id: string | number;
    title: string;
}

export function ChatHistoryList({ items, onSelect }: { items: ChatHistoryItem[], onSelect?: (id: string | number) => void }) {
    return (
        <div className="px-2">
            {items.map((item) => (
                <div
                    key={item.id}
                    onClick={() => onSelect?.(item.id)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md cursor-pointer mb-1 truncate text-sm text-gray-700 dark:text-gray-300"
                >
                    {item.title}
                </div>
            ))}
        </div>
    );
}
