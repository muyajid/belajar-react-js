import React from "react";
import { MenuItem } from "./MenuItem";
export function MenuList( { foods, onDelete} ) {
    return (
        <div>
            <h1>Daftar Menu :</h1>
            {
                foods.map((data) => {
                     return <MenuItem key={data.id} name={data.name} price={data.price} image={data.image} id={data.id} onDelete={onDelete}/>
                })
            }
        </div>
    );
}