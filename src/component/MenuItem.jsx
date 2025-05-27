import { ButtonDelete } from "./ButtonDelete";
import { ItemBody } from "./ItemBody";
import { ItemImage } from "./ItemImage";

export function MenuItem( {name, price, image, id, onDelete}) {
    return (
        <div className="menu-item">
            <ItemImage image={image} />
            <ItemBody name={name} price= {price}/>
            <ButtonDelete id = {id} onDelete = { onDelete }/>
        </div>
    )
}