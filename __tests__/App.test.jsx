// __tests__/App.test.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import React from "react";
import '@testing-library/jest-dom';

// Mock GoogleGenAI so real API is never called
jest.mock("@google/genai", () => {
  return {
    GoogleGenAI: jest.fn().mockImplementation(() => {
      return {
        generate: jest.fn().mockResolvedValue("```<h1>Generated Code</h1>```"),
      };
    }),
  };
});

describe("App Component", () => {
  test("renders prompt input field", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/describe your website in detail/i);
    expect(input).toBeInTheDocument();
  });

  test("allows user to type prompt", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/describe your website in detail/i);
    await userEvent.type(input, "Create a landing page");
    expect(input.value).toBe("Create a landing page");
  });

});
