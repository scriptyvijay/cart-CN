import React, { Component } from "react";

class CartItem extends Component {
	constructor() {
		super();
		this.state = {
			price: 999,
			title: "Phone",
			qty: 1,
			img: "",
		};
	}

	increaseQuantity = () => {
		if (this.state.qty <= 2) {
			this.setState((prevState) => {
				return {
					qty: prevState.qty + 1,
				};
			});
		}
	};

	decreaseQuantity = () => {
		if (this.state.qty !== 0) {
			this.setState((prevState) => {
				return {
					qty: prevState.qty - 1,
				};
			});
		}
	};

	render() {
		const { price, title, qty } = this.state;

		return (
			<div className="cart-item">
				<div className="left-block">
					<img style={styles.image} alt="" />
				</div>
				<div className="right-block">
					<div style={{ fontSize: 25 }}>{title}</div>
					<div style={{ color: "#777" }}>{price}</div>
					<div style={{ color: "#777" }}>Qty: {qty}</div>
					<div className="cart-item-actions">
						{/* Buttons */}

						<img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className="action-icons" alt="increase" onClick={this.increaseQuantity} />
						<img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" className="action-icons" alt="decrease" onClick={this.decreaseQuantity} />
						<img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" className="action-icons" alt="delete" />
					</div>
				</div>
			</div>
		);
	}
}

const styles = {
	image: {
		height: 110,
		width: 110,
		borderRadius: 4,
		background: "#777",
	},
};

export default CartItem;
