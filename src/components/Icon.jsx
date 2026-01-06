import React from "react";

const Icon = ({ name, className = "", ...props }) => {
  try {
    const IconSVG = require(`../assets/icons/${name}.svg`).default;
    return <IconSVG className={className} {...props} />;
  } catch (e) {
    console.error(`Icon "${name}" not found.`);
    return null;
  }
};

export default Icon;
