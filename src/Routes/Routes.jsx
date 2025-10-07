import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage.jsx/ErrorPage';
import Home from '../Pages/Home/Home';
import ListedBooks from '../Pages/Listed Books/ListedBooks';
import PageToRead from '../Pages/Page To Read/PageToRead';
import BookDetails from '../Pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, path: "/", Component: Home },
      { path: "/listed-books", Component: ListedBooks },
      { path: "/page-to-read", Component: PageToRead },
      {
        path: "/book-details/:id",
        Component: BookDetails,
        loader: () => fetch("/BookData.json")
      }
    ]
  },
]);