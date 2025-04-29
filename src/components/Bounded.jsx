import clsx from "clsx";

export function Bounded({ as: Comp = "section", className, children, ...restProps }) {
  return (
    <Comp
      className={clsx(
        "px-6 py-10 md:py-16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className,
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">
        {children}
      </div>
    </Comp>
  );
}
