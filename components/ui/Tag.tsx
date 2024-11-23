import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Tag = (props: HtmlHTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...restProps } = props;

  return (
    <div
      className={twMerge(
        "inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center",
        className
      )}
      {...restProps}
    >
      <span>&#10038;</span>
      <span className="text-sm ">{children}</span>
    </div>
  );
};

export default Tag;
