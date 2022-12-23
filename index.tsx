import React from "react";
import clsx from "clsx";
import { useRef } from "react";
import { type AriaButtonProps, useButton } from "react-aria";

const WIDTH_MAPS = {
  max: "w-max",
  full: "w-full",
};

const SIZE_MAPS = {
  xs: "px-2.5 py-1.5 text-xs rounded",
  sm: "px-3 py-1.5 text-sm rounded-md",
  base: "px-4 py-2 text-sm rounded-md",
  lg: "px-4 py-2 text-md rounded-lg",
};

const VARIANT_MAPS = {
  primary: {
    filled: "bg-primary text-white focus:ring-primary",
    outlined:
      "bg-white hover:bg-gray-50 text-primary focus:ring-primary !border-primary",
  },
  secondary: {
    filled: "bg-neutral text-white focus:ring-neutral",
    outlined:
      "bg-secondary hover:bg-gray-50 text-gray-700 focus:ring-neutral !border-neutral",
  },
  error: {
    filled: "bg-error hover:opacity-{2} text-white focus:ring-error",
    outlined:
      "bg-white hover:bg-gray-50 text-error focus:ring-error !border-error",
  },
};

interface ButtonProps {
  variant?: keyof typeof VARIANT_MAPS;
  style?: "filled" | "outlined";
  size?: keyof typeof SIZE_MAPS;
  width?: keyof typeof WIDTH_MAPS;
  isDisabled?: boolean;
  children: React.ReactNode;
}

export function Button(props: AriaButtonProps & ButtonProps) {
  const ref = useRef<HTMLButtonElement | null>(null);

  const {
    variant = "primary",
    isDisabled,
    style = "filled",
    width = "full",
    size = "base",
    type = "button",
    children,
  } = props;
  const { buttonProps } = useButton(props, ref);

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center border border-transparent font-medium shadow-sm outline-none transition-all hover:opacity-90 hover:shadow-md focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed",
        {
          "cursor-not-allowed opacity-60 hover:opacity-75 focus:ring-0":
            isDisabled,
        },
        WIDTH_MAPS[width],
        VARIANT_MAPS[variant][style],
        SIZE_MAPS[size],
      )}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
