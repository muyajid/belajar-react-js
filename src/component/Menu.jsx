import { MenuList } from "./MenuList";
import sendData from "../utility/Data";
import React from "react";
// export function Menu() {
//     const food = sendData();
//     return (
//         <>
//         <MenuList foods = {food} />
//         </>
//     )
// }

export class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            foods: sendData()
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const foods = this.state.foods.filter((food) => food.id !== id);
        this.setState({ foods });
    }
    render() {
        return (
            <div className="menu">
                <MenuList foods={this.state.foods} onDelete={this.onDeleteHandler} />
            </div>
        )
    }
}