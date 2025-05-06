import React from "react";

export const Total = ({ parts }) => {
  return (
    <h2>
      Total exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </h2>
  );
};
