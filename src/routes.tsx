import { RouteObject } from "react-router-dom";

import Home from "./components/page/Home";
import Blogs from "./components/page/blogs/Blogs";
import { BlogDetail } from "./components/page/blogs/BlogDetail";
import Researches from "./components/page/researches/Researches";
import { ResearchesDetail } from "./components/page/researches/ResearchesDetail";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      {
        path: "blogs",
        children: [
          { index: true, element: <Blogs /> },
          { path: ":id", element: <BlogDetail /> },
        ],
      },
      {
        path: "researches",
        children: [
          { index: true, element: <Researches /> },
          { path: ":id", element: <ResearchesDetail /> },
        ],
      },
      {
        path: "*",
        element: <h1>Route Not Found!!</h1>,
      },
    ],
  },
];
