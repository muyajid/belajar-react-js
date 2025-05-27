import React from "react";

class MenuInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      imageUrl: ''
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onPriceChangeEventHandler = this.onPriceChangeEventHandler.bind(this);
    this.onImageUrlChangeEventHandler = this.onImageUrlChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState({ name: event.target.value });
  }

  onPriceChangeEventHandler(event) {
    this.setState({ price: event.target.value });
  }

  onImageUrlChangeEventHandler(event) {
    this.setState({ imageUrl: event.target.value });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addMenu(this.state);
    this.setState({ name: '', price: '', imageUrl: '' });
  }

  render() {
    return (
      <form className="menu-input" onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
        <input type="text" placeholder="Price" value={this.state.price} onChange={this.onPriceChangeEventHandler} />
        <input type="text" placeholder="Image URL" value={this.state.imageUrl} onChange={this.onImageUrlChangeEventHandler} />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default MenuInput;
