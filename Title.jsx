import React from "react";

export default function Title({ classes, text }) {
  return (
    <div>
      <h1 className={!classes ? "title text-center" : classes}>
        {!text ? "Title" : text}
      </h1>
    </div>
  );
}
