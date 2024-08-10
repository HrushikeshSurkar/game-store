import React, { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const TheWarrior = lazy(() => import("../games/TheWarrior/TheWarrior"));
const CodeCraft = lazy(() => import("../games/CodeCraft/CodeCraft"));
const TicTacToe = lazy(() => import("../games/TicTacToe/TicTacToe"));

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/contact", element: <Contact /> },
  { path: "/games/the-warrior", element: <TheWarrior /> },
  { path: "/games/code-craft", element: <CodeCraft /> },
  { path: "/games/tic-tac-toe", element: <TicTacToe /> },
];
