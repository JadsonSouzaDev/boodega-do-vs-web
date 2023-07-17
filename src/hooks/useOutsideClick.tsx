import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: { (): void; (): void; }) => {
  const ref = useRef<any>();

  useEffect(() => {
    const handleClick = (event: { target: any; }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return ref;
};
