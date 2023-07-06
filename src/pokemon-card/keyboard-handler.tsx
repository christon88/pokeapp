import { useEffect } from "react";

type Props = {
  callback: () => void;
  keyboardKey: string;
  children: React.ReactNode;
};

export const KeyboardHandler: React.FC<Props> = ({
  callback,
  children,
  keyboardKey,
}) => {
  useEffect(() => {
    const handleEvent = (event: KeyboardEvent) => {
      if (event.key === keyboardKey) {
        callback();
      }
    };
    window.addEventListener("keyup", handleEvent);
    return () => window.removeEventListener("keyup", handleEvent);
  }, [callback]);

  return children;
};
