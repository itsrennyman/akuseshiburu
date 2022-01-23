import * as React from "react";
import { flushSync } from "react-dom";

export function Toggle({
  onToggle,
  className,
  style,
  isToggled = false,
  disabled = false,
}) {
  const [state, setState] = React.useState(isToggled);

  const handleToggle = () => {
    flushSync(() => {
      setState((prev) => !prev);
    });

    onToggle?.(state);
  };

  return (
    <button
      type="button"
      disabled={disabled}
      aria-pressed={state}
      aria-disabled={disabled}
      aria-label="Toggle"
      onClick={handleToggle}
      className={className}
      style={style}
    >
      {state ? "On" : "Off"}
    </button>
  );
}
