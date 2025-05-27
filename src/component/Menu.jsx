import React from "react";
import { MenuList } from "./MenuList";
import sendData from "../utility/Data";
import MenuInput from "./MenuInput";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: sendData()
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddMenuHandler = this.onAddMenuHandler.bind(this);
  }

  onDeleteHandler(id) {
    const foods = this.state.foods.filter((food) => food.id !== id);
    this.setState({ foods });
  }

  onAddMenuHandler({ name, price, imageUrl }) {
    this.setState((prevState) => ({
      foods: [
        ...prevState.foods,
        {
          id: +new Date(),
          name,
          price,
          image: imageUrl // harus pakai 'image' karena di MenuItem juga pakai image
        }
      ]
    }));
  }

  render() {
    return (
      <div className="menu-app">
        <h1>Warung Padang</h1>
        <h2>Tambah Menu</h2>
        <MenuInput addMenu={this.onAddMenuHandler} />
        <h2>Daftar Menu:</h2>
        <MenuList foods={this.state.foods} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}
