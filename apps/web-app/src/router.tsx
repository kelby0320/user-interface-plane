import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChatPage } from './ChatPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <div className="h-screen flex items-center justify-center text-gray-500">Select a chat to begin</div>,
    },
    {
        path: "/chat",
        element: <ChatPage />,
        children: [
            {
                path: ":session_id",
                element: null
            }
        ]
    }
]);

export function AppRouter() {
    return <RouterProvider router={router} />;
}
