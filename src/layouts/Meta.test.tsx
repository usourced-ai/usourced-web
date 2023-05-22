import { render, waitFor } from "@testing-library/react";
import type { ReactNode } from "react";

import { AppConfig } from "@/config/AppConfig";
import { Meta } from "@/layouts/Meta";

// Mock `next/head`: https://bradgarropy.com/blog/mocking-nextjs
jest.mock(
  "next/head",
  () =>
    function Head(props: { children: ReactNode }) {
      return props.children;
    }
);

describe("Meta component", () => {
  describe("Render method", () => {
    it("should a page title", async () => {
      const title = "Random title";

      render(<Meta title={title} description="Random description" />);

      await waitFor(() => {
        expect(document.title).toEqual(`${title} | ${AppConfig.site_name}`);
      });
    });
  });
});
