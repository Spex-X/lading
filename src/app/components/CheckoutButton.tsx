"use client";

import { AnchorHTMLAttributes, PropsWithChildren, useMemo, type MouseEventHandler } from "react";

type Props = PropsWithChildren<
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    hrefBase: string;
  }
>;

export default function CheckoutButton({ hrefBase, children, onClick, ...rest }: Props) {
  const href = useMemo(() => {
    if (typeof window === "undefined") return hrefBase;
    const current = window.location.search.replace(/^\?/, "");
    if (!current) return hrefBase;
    const joiner = hrefBase.includes("?") ? "&" : "?";
    return `${hrefBase}${joiner}${current}`;
  }, [hrefBase]);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    try {
      // Track Meta Pixel InitiateCheckout if available
      // @ts-ignore
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        // @ts-ignore
        window.fbq("track", "InitiateCheckout");
      }
    } catch {}
    onClick?.(e);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
