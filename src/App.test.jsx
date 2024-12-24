import { it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

// Switch between v7.1.1(or any other v7) and v6.28.1, then run npm install
import { RouterProvider, createMemoryRouter } from "react-router-dom";


it("renders", () => {
  const router = createMemoryRouter(
    [
      {path: "/", element: <App />}
    ],
    {
      initialEntries: ["/"],
      initialIndex: 0,
    }
  );

  const { container } = render(<RouterProvider router={router} />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        href="/"
      >
        Link to be rendered
      </a>
    </div>
  `);
});
