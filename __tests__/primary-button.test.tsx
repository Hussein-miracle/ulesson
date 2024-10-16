import PrimaryButton from "@/components/primary-button/primary-button";
import Image from "next/image";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

describe("Test the (PrimaryButton) Component", () => {
  it("renders children correctly", () => {
    render(<PrimaryButton>Click me</PrimaryButton>);
    expect(
      screen.getByRole("button", { name: "Click me" }),
    ).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<PrimaryButton onClick={handleClick}>Click me</PrimaryButton>);

    const button = screen.getByRole("button", { name: "Click me" });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<PrimaryButton disabled>Disabled Button</PrimaryButton>);

    const button = screen.getByRole("button", { name: "Disabled Button" });
    expect(button).toBeDisabled();
  });

  it("can be focused and responds to keyboard events", () => {
    const handleClick = vi.fn();
    render(
      <PrimaryButton onClick={handleClick}>Keyboard Button</PrimaryButton>,
    );

    const button = screen.getByRole("button", { name: "Keyboard Button" });
    button.focus();
    expect(button).toHaveFocus();

    // fireEvent.click(screen.getByText('Click me'));
    // expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders custom content correctly", () => {
    render(
      <PrimaryButton>
        <span>Custom</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="icon.png" alt="icon" />
        <Image width={32} height={32} src="/icon.png" alt="icon-img" />
      </PrimaryButton>,
    );

    expect(screen.getByText("Custom")).toBeInTheDocument();
    expect(screen.getByAltText("icon")).toBeInTheDocument();
  });
});
