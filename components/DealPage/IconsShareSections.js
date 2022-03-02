import React, { useState } from "react";

function IconsShareSections({ icons }) {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  return icons.map((icon) => {
    const Component = icon.component;

    return (
      <div
        onMouseEnter={() => {
          setHoveredIcon(icon.type);
        }}
        onMouseLeave={() => {
          setHoveredIcon(null);
        }}
      >
        <Component
          color={hoveredIcon === icon.type ? icon.selectedColor : "#A5A8AB"}
        />
      </div>
    );
  });
}

export default IconsShareSections;
