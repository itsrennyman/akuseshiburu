import * as React from "react";

export function Breadcrumb({ children, separator = ">", className, style }) {
  const childrenArray = React.Children.toArray(children);

  const withSeparatorChildren = childrenArray.map((child, index) => {
    if (index === childrenArray.length - 1) {
      return React.cloneElement(child, {
        ...child.props,
        "aria-current": "page",
      });
    }

    return [child, " ", <span key={index}>{separator}</span>, " "];
  });

  return (
    <nav aria-label="Breadcrumb" className={className} style={style}>
      <ol>{withSeparatorChildren}</ol>
    </nav>
  );
}

Breadcrumb.Item = function Item({ children, href, className, style }) {
  return (
    <li className={className} style={style}>
      <a href={href}>{children}</a>
    </li>
  );
};
