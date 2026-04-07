import { render, screen } from "@testing-library/react";
import Kategori from "@/pages/produk";
import React from "react";

jest.mock("swr", () => ({
  __esModule: true,
  default: () => ({
    data: null,
    error: null,
    isLoading: false,
  }),
}));

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/produk",
      push: jest.fn(),
      events: { on: jest.fn(), off: jest.fn() },
      isReady: true,
    };
  },
}));

describe("Product Page Unit Test", () => {
  it("seharusnya merender halaman produk dengan benar", () => {
    const dataDummy = [
      { id: "1", name: "Produk A", price: 10000, image: "/img.jpg", category: "A" }
    ];
    
    const { container } = render(<Kategori produk={dataDummy} />);

    const title = screen.getByTestId("title");
    expect(title.textContent).toBe("Daftar Produk");

    expect(container).toMatchSnapshot();
  });
});