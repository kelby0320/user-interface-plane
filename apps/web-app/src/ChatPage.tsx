import { useParams } from 'react-router-dom';
import {
    ChatLayout,
    Sidebar,
    ChatArea,
    NewChatButton,
    SearchInput,
    ChatHistoryList,
    ChatMessage,
    MessageInput,
    SendButton
} from '@acme/ui';

export function ChatPage() {
    const { session_id } = useParams();

    // Placeholder data
    const historyItems = [1, 2, 3, 4].map(i => ({ id: i, title: `Chat ${i}` }));

    return (
        <ChatLayout>
            <Sidebar>
                <div className="p-4">
                    <NewChatButton />
                </div>
                <div className="px-4 pb-4">
                    <SearchInput />
                </div>
                <div className="flex-1 overflow-y-auto">
                    <ChatHistoryList items={historyItems} />
                </div>
            </Sidebar>
            <ChatArea>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {session_id ? (
                        <div className="text-center text-gray-500 mt-10">Browsing session: {session_id}</div>
                    ) : (
                        <div className="space-y-4">
                            <ChatMessage role="user">User Message</ChatMessage>
                            <ChatMessage role="ai">AI Response</ChatMessage>
                        </div>
                    )}
                </div>
                <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
                    <div className="flex gap-2">
                        <MessageInput />
                        <SendButton />
                    </div>
                </div>
            </ChatArea>
        </ChatLayout>
    );
}
