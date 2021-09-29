import { render, screen } from "@testing-library/react";
import App from "./App";
import AllPosts from "./AllPosts";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const MockAllPosts = () => {
  return (
    <BrowserRouter>
      <AllPosts />
    </BrowserRouter>
  );
};

it("should render app component title", async () => {
  render(<App />);
  const title = screen.getByTestId("title");
  expect(title).toBeInTheDocument();
});
it("should render the first book from the list", async () => {
  render(<MockAllPosts />);
  const firstBook = await screen.findByTestId("list-item-0");
  expect(firstBook).toBeInTheDocument();
});
it("should render 20 book details in the list", async () => {
  render(<MockAllPosts />);
  const allBooks = await screen.findAllByTestId(/list-item/i);
  expect(allBooks.length).toBe(20);
});
it("should render title for all the book details in the list", async () => {
  render(<MockAllPosts />);
  const allBookswithTitle = await screen.findAllByTestId(/post-title/i);
  expect(allBookswithTitle.length).toBe(20);
});
