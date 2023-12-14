import React from 'react';
import './GlobalCart.css'
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { connect } from 'react-redux';
import withRouter from '../../components/routes/withRouter';
import { deleteList, increaseCartQty } from '../../store/actions';
import GlobalCartList from '../GlobalCartList/GlobalCartList';

class GlobalCart extends React.Component {
    constructor() {
        super();
        this.state = {
            overlay: 'overlay',
            cartToggle: 'cart-menu',
        }
    }

    openCart = () => {
        this.setState({
            cartToggle: this.state.cartToggle === 'cart-menu' ? 'cart-menu active' : 'cart-menu',
            overlay: this.state.overlay === 'overlay' ? 'overlay active' : 'overlay',
        })
    }

    closeCart = () => {
        this.setState({
            cartToggle: this.state.cartToggle === 'cart-menu active' ? 'cart-menu' : 'cart-menu active',
            overlay: this.state.overlay === 'overlay active' ? 'overlay' : 'overlay active',
        })
    }

    render() {
        const subtotal = this.props.cart.reduce((total,item)=>{
            return total + item.price * item.qty;
        },0);
        console.log(subtotal)
        console.log(this.props)

        return (
            <>
                <div className={this.state.overlay}></div>
                <div id='data-cart' className={this.state.cartToggle}>
                    <div className='wrap'>
                        <Link to='/' className='close-trigger' onClick={this.closeCart}>
                            <IoMdClose />
                        </Link>
                        <div className='scrollto cart-outer'>
                            <div className='wrapper'>
                                <div className='cart-list'>
                                    <div className='wrapper'>
                                        <div className='cart-header'>
                                            <h3>Shopping Cart</h3>
                                        </div>
                                        <div className='cart-body scrollto'>
                                            <div className='product-list'>
                                                <div className='wrapper'>
                                                    <ul>
                                                        {this.props.cart.map((item, index) => {
                                                            return <GlobalCartList key={index} name={item.name} image={item.image} price={item.price} old_price={item.old_price} qty={item.qty} id={item.id} />
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='cart-footer'>
                                            <div className='math-pricing'>
                                                <ul>
                                                    <li>
                                                        <span>Subtotal</span>
                                                        <span className='value'></span>
                                                    </li>
                                                    <li className='total'>
                                                        <span>Total</span>
                                                        <span className='value'>₩{subtotal}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='button'>
                                                <Link to='/' className='secondary-btn'>Checkout</Link>
                                                <Link to='/Cart' className='grey-link' onClick={this.closeCart}>View Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(withRouter(GlobalCart));