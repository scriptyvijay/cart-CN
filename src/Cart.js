import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
	constructor() {
		super();
		this.state = {
			products: [
				{
					price: 99,
					title: "Watch",
					qty: 1,
					img: "",
					id: 1,
				},
				{
					price: 999,
					title: "Mobile Phone",
					qty: 10,
					img: "",
					id: 2,
				},
				{
					price: 999,
					title: "Laptop",
					qty: 4,
					img: "",
					id: 3,
				},
			],
		};
		// this.increaseQuantity = this.increaseQuantity.bind(this);
		// this.testing();
	}
	handleIncreaseQuantity = (product) => {
		const { products } = this.state;
		const index = products.indexOf(product);

		products[index].qty += 1;

		this.setState({
			products,
		});
	};

	handleDecreaseQuantity = (product) => {
		const { products } = this.state;
		const index = products.indexOf(product);

		if (product.qty >= 2) {
			products[index].qty -= 1;

			this.setState({
				products,
			});
		}
	};

	handleDeleteProduct = (id) => {
		const { products } = this.state;
		const item = products.filter((item) => {
			return item.id !== id;
		});
		this.setState({
			products: item,
		});
	};
	render() {
		const { products } = this.state;
		return (
			<div className="cart">
				{products.map((product) => {
					return (
						<CartItem
							product={product}
							key={product.id}
							onIncreaseQuantity={this.handleIncreaseQuantity}
							onDecreaseQuantity={this.handleDecreaseQuantity}
							onDeleteProduct={this.handleDeleteProduct}
						/>
					);
				})}
			</div>
		);
	}
}

export default Cart;
