import * as React from "react";

export function Breadcrumb({ children, separator = ">", className, style }) {
  const childrenArray = React.Children.toArray(children);

  const withSeparatorChildren = childrenArray.map((child, index) => {
    if (index === childrenArray.length - 1) {
      const x = React.cloneElement(child, {
        ...child.props,
        isTheLast: true,
      });

      return x;
    }

    return [child, " ", <span key={index}>{separator}</span>, " "];
  });

  return (
    <nav aria-label="Breadcrumb" className={className} style={style}>
      <ol>{withSeparatorChildren}</ol>
    </nav>
  );
}

Breadcrumb.Item = function Item({
  children,
  href,
  className,
  style,
  isTheLast = false,
}) {
  const ariaCurrent = isTheLast ? "page" : undefined;
  return (
    <li className={className} style={style}>
      <a href={href} aria-current={ariaCurrent}>
        {children}
      </a>
    </li>
  );
};
