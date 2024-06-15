"use client";

import { PropsWithChildren } from "react";
import { Button as HButton } from "@headlessui/react";
import classNames from "classnames";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
  variant?: "outlined" | "contained";
  rounded?: boolean;
  color?: "white" | "dark" | "primary";
  size?: "md" | "lg";
  disabled?: boolean;
}

export default function Button({
  onClick = () => null,
  children,
  className,
  variant = "outlined",
  rounded = false,
  color = "white",
  size = "md",
  disabled = false,
}: Props) {
  return (
    <HButton
      disabled={disabled}
      className={classNames(
        "inline-flex items-center transition-all hover:text-primary disabled:!opacity-20",
        size === "md" ? "px-5 py-1.5 text-sm" : "px-8 py-2",
        rounded ? "rounded-3xl" : "rounded-lg",
        variant === "outlined"
          ? `${
              size === "md" ? "border" : "border-2"
            } text-${color} border-${color} ${
              color === "primary"
                ? "hover:border-white"
                : "hover:border-primary"
            }`
          : `hover:bg-primary bg-${color} text-${
              color === "dark" ? "white" : "dark"
            } hover:text-white`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </HButton>
  );
}
