export function ButtonDelete({ id, onDelete}) {
    return (
        <button id={id} onClick={() => onDelete(id)}>X</button>
    )
}