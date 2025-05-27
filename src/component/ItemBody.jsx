export function ItemBody( {name, price} ) {
    return (
        <div className="item-body">
            <ul>
                <li>{name}</li>
                <li>{price}</li>
            </ul>
        </div>
    )
}