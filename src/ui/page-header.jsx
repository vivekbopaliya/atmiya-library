/* eslint-disable jsx-a11y/heading-has-content */
import Balance from "react-wrap-balancer";
import { cn } from "../lib/utils";

function PageHeader({ className, children, ...props }) {
  return (
    <section
      className={cn(
        "mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

function PageHeaderHeading({ className, ...props }) {
  return (
    <h1
      className={cn(
        "text-center text-4xl font-bold leading-tight tracking-tighter md:text-[5rem] lg:leading-[1.1]",
        className
      )}
      {...props}
    />
  );
}

function PageHeaderDescription({ className, ...props }) {
  return (
    <Balance
      className={cn(
        "max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl",
        className
      )}
      {...props}
    />
  );
}

function PageActions({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center space-x-4 py-4 md:pb-10",
        className
      )}
      {...props}
    />
  );
}

export { PageHeader, PageHeaderHeading, PageHeaderDescription, PageActions };
