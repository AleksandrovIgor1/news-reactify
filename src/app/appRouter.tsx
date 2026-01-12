import { createBrowserRouter } from "react-router";
import BaseLayout from "./layout/BaseLayout";
import { MainPage } from "@/pages/main";
import { NewsPage } from "@/pages/news";

export const appRouter = createBrowserRouter([
    {
        element: <BaseLayout />,
        errorElement: <div>Error</div>,
        children: [{ path: '/', element: <MainPage /> }, { path: '/news/:id', element: <NewsPage /> },]
    }
]);
