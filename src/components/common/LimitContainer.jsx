const widthBySize = {
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

export default function LimitContainer({
  children,
  className = "",
  size = "7xl",
  as: Tag = "div",
}) {
  const maxWidthClass = widthBySize[size] || widthBySize["7xl"];

  return (
    <Tag className={`${maxWidthClass} mx-auto w-full ${className}`}>
      {children}
    </Tag>
  );
}
