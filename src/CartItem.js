import React from 'react'
import styles from './style';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            Qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        this.testing();
    }

    testing() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('done');
            }, 5000)
        })
        promise.then(() => {
            this.setState({ Qty: this.state.Qty + 10 })
            this.setState({ Qty: this.state.Qty + 10 })
            this.setState({ Qty: this.state.Qty + 10 })

            console.log('state:', this.state);
        })
    }


    increaseQuantity = () => {
        // this.setState({
        //     Qty: this.state.Qty + 1
        // })
        this.setState((prevState) => {
            return {
                Qty: prevState.Qty + 1
            }
        }, () => {
            console.log('this.state is: ', this.state);
        })
        console.log(this.state);
    }

    decreaseQuantity = () => {
        const { Qty } = this.state;
        if (Qty <= 1) {
            alert("Can't be negative")
            return;
        }

        this.setState((prevState) => {
            return {
                Qty: prevState.Qty - 1
            }
        })

        console.log(this.state);
    }

    render() {
        const { price, title, Qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}> {title} </div>
                    <div style={{ color: "gray" }}> {price} </div>
                    <div style={{ color: "gray" }} > {Qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase qty"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                            onClick={this.increaseQuantity}>
                        </img>

                        <img
                            alt="decrease qty"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/1828/1828906.svg"
                            onClick={this.decreaseQuantity}>
                        </img>

                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg">
                        </img>

                    </div>

                </div>
            </div >
        )
    }
}

export default CartItem;