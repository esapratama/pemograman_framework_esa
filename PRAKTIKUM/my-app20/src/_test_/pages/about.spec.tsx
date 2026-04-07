// src/_test_/pages/about.spec.tsx
import { render, screen } from "@testing-library/react";
import AboutPage from "@/pages/about";

describe("About Page", () => {
  it("renders correctly", () => {
    const page = render(<AboutPage />);
    
    // Memenuhi kriteria getByTestId dan toBe()
    const title = screen.getByTestId("title");
    expect(title.textContent).toBe("About Page"); 
    
    // Memenuhi kriteria Snapshot
    expect(page).toMatchSnapshot();
  });
});