// __tests__/OrderCard.test.tsx
import { Colors } from "@/constants/Colors";
import OrderCard from "@/ui_Components/OrderCard";
import { render } from "@testing-library/react-native";
import React from "react";

describe("OrderCard", () => {
  const baseProps = {
    id: "12345",
    date: "Jan 20, 2025 10:30 AM",
    totalAmount: 49.99,
  };

  it("renders order ID, date, and total amount", () => {
    const { getByText } = render(
      <OrderCard
        {...baseProps}
        status="confirmed"
        items={[{ image: "https://picsum.photos/200", quantity: 1 }]}
      />
    );

    expect(getByText("Order #12345")).toBeTruthy();
    expect(getByText("Jan 20, 2025 10:30 AM")).toBeTruthy();
    expect(getByText("$49.99")).toBeTruthy();
  });

  it("renders correct status badge color for delivered", () => {
    const { getByText } = render(
      <OrderCard
        {...baseProps}
        status="delivered"
        items={[]}
      />
    );

    const statusText = getByText("DELIVERED");
    // Check if the style includes success color
    expect(
      statusText.parent?.props.style.find((s: any) => s.backgroundColor === Colors.success)
    ).toBeTruthy();
  });

  it("renders quantity badge when item quantity > 1", () => {
    const { getByText } = render(
      <OrderCard
        {...baseProps}
        status="processing"
        items={[{ image: "https://picsum.photos/201", quantity: 3 }]}
      />
    );

    expect(getByText("3")).toBeTruthy();
  });

  it("renders +more items badge when more than 3 items", () => {
    const { getByText } = render(
      <OrderCard
        {...baseProps}
        status="shipped"
        items={[
          { image: "https://picsum.photos/200", quantity: 1 },
          { image: "https://picsum.photos/201", quantity: 1 },
          { image: "https://picsum.photos/202", quantity: 1 },
          { image: "https://picsum.photos/203", quantity: 1 },
        ]}
      />
    );

    expect(getByText("+1")).toBeTruthy();
  });

  it("renders fallback package icon when no items", () => {
    const { UNSAFE_getByType } = render(
      <OrderCard
        {...baseProps}
        status="cancelled"
        items={[]}
      />
    );

    // Lucide Package icon renders as a function component
    expect(UNSAFE_getByType(require("lucide-react-native").Package)).toBeTruthy();
  });
});
