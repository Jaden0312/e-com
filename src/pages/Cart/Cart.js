import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
import top2 from '../../components/Assets/images/top2.jpg'
import outer1 from '../../components/Assets/images/outer1.jpg'
import pants1 from '../../components/Assets/images/pants1.jpg'
import { IoMdClose } from "react-icons/io";
import { connect } from 'react-redux';
import Cartlist from '../../components/Cartlist/Cartlist';

class Cart extends React.Component {
    render() {
        console.log(this.props)
        const subtotal = this.props.cart.reduce((total,item)=>{
            return total + item.price * item.qty;
        },0);

        console.log(subtotal)
        return (
            <>
                <div className='page-cart'>
                    <div className='section'>
                        <div className='container wide'>
                            <div className='wrap'>
                                <div className='heading'>
                                    <h1 className='title'>Cart</h1>
                                </div>
                                <div className='content'>
                                    <div className='cart-table'>
                                        <div className='product-list has-bg'>
                                            <div className='table-title'>
                                                <ul>
                                                    <li className='dotgrid'>
                                                        <div className='grouping wrapper'>
                                                            <span></span>
                                                            <span>Product</span>
                                                        </div>
                                                        <div className='grouping wrapper'>
                                                            <span>Price</span>
                                                            <span>Qty</span>
                                                            <span>Total</span>
                                                            <span></span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='table-content'>
                                                <ul>
                                                    {this.props.cart.map((item, index) => {
                                                        return <Cartlist key={index} name={item.name} image={item.image} price={item.price} old_price={item.old_price} qty={item.qty} id={item.id}/>
                                                    })}
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cart-total'>
                                        <div className='product-list has-bg'>
                                            <div className='grouping'>
                                                <div className='add-note'>
                                                    <textarea rows='3' placeholder='Additional note +'></textarea>
                                                </div>
                                                <div className='sub-total'>
                                                    <div className='sub-pricing'>
                                                        <span>Subtotal</span>
                                                        <span className='sub-total-price'>₩{subtotal}</span>
                                                    </div>
                                                    <div className='sub-terms'>
                                                        <input type='checkbox' className='checker' id='terms'></input>
                                                        <label for='terms'> I agree to <Link to='/' className='grey-link'>Terms & Conditions</Link></label>
                                                    </div>
                                                    <div className='button'>
                                                        <Link to='/' className='secondary-btn'>Checkout</Link>
                                                    </div>
                                                </div>
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
};

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

export default connectToStore(Cart);