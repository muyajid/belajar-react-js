import React from "react";
import { MenuItem } from "./MenuItem";

export function MenuList({ foods, onDelete }) {
  return (
    <div>
      {foods.map((data) => (
        <MenuItem
          key={data.id}
          id={data.id}
          name={data.name}
          price={data.price}
          image={data.image}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
