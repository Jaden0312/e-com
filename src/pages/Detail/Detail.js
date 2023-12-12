import React from 'react';
import './Detail.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaStar,FaRegShareSquare,FaRegQuestionCircle } from "react-icons/fa";
import { CiHeart,CiDeliveryTruck,CiGift } from "react-icons/ci";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { connect } from 'react-redux';
import withRouter from '../../components/routes/withRouter';
import { addToCart } from '../../store/actions';


// function withParams(Component) {
//     return props => <Component {...props} params={useParams()} />        
// }

class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            product: {},
            qty: 1,
        }
    }
    componentDidMount() {
        fetch(`http://localhost:3000/allProducts/${this.props.router.params.ProductId}`)
            .then(reponse => reponse.json())
            .then(product => {
                this.setState(
                    () => ({
                        product: product
                    })
                )
            } )
    }
    

    handleAddToCart = () => {
        const newCartList = {
            id: this.state.product.id,
            name: this.state.product.name,
            price: this.state.product.new_price,
            qty: this.state.qty,
            image: this.state.product.image,
        }
        console.log(newCartList);
        console.log(this.props);
        // const cartItem = this.props.cart;
        // if(cartItem.find(item => item.id === newCartList.id)){
        //     item.qty += 1
        //     return this.props.addNewCartList(newCartList);
        // } else {
        //     return this.props.addNewCartList(newCartList);
        // }
        this.props.addNewCartList(newCartList);
    }

    increaseQty = () => {
        const currentQty = this.state.qty;
        this.setState({
            qty: currentQty + 1
        })
    }

    decreaseQty = () => {
        const currentQty = this.state.qty;
        this.setState({
            qty: currentQty <= 1 ? currentQty : currentQty - 1,
        })
    }

    render() {
        // console.log(this.props);
        const { params } = this.props;
        // console.log(this.props.router.params);
        console.log(this.state.product);
        // let { item } = this.state.product;
        // console.log(item);
        return (
            <>
                <div>
                    <div className='section'>
                        <div className='container'>
                            <div className='wrap'>
                                <div className='product dotgrid'>
                                    <div className='wrapper'>
                                        <div className='image'>
                                            <div className='outer-main'>
                                                <div className='main-image'>
                                                    <div className='item'><img src={this.state.product.image}></img></div>
                                                </div>
                                            </div>
                                            <div className='outer-thumb ob-cover'>
                                                <div className='thumbnail-image'>
                                                    <div className='wrap'>
                                                        <div className='item'>
                                                            <div className='thumb-wrap'><img src={this.state.product.image}></img></div>
                                                            <div className='thumb-wrap'><img src={this.state.product.image}></img></div>
                                                            <div className='thumb-wrap'><img src={this.state.product.image}></img></div>
                                                            <div className='thumb-wrap'><img src={this.state.product.image}></img></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='summary'>
                                            <div className='entry'>
                                                <h1 className='title'>{this.state.product.name}</h1>
                                                <div className='product-group'>
                                                    <div className='product-price'>
                                                        <span className='current'>₩{this.state.product.new_price}</span>
                                                        <div className='wrap'>
                                                            <span className='before'>₩{this.state.product.old_price}</span>
                                                            <span className='discount'>-25%</span>
                                                        </div>
                                                    </div>
                                                    <div className='product-rating'>
                                                        <span>
                                                            <FaStar />
                                                            <span>4.8</span>
                                                        </span>
                                                        <Link to='/'>3 Reviews</Link>
                                                    </div>
                                                </div>
                                                <div className='product-color'>
                                                    <span>Colors:</span>
                                                    <div className='wrap'>
                                                        <button className='grey selected'></button>
                                                        <button className='black'></button>
                                                        <button className='brown'></button>
                                                    </div>
                                                </div>
                                                <div className='product-size'>
                                                    <span>Size:</span>
                                                    <div className='wrap'>
                                                        <button disabled>S</button>
                                                        <button>M</button>
                                                        <button className='selected'>L</button>
                                                        <button>XL</button>
                                                    </div>
                                                </div>
                                                {/* <div className='product-stock'>
                                                    <div className='wrap'>
                                                        <strong>201</strong>
                                                        <span className='grey-color'>in stock</span>
                                                        <CiCircleCheck />
                                                    </div>
                                                </div> */}
                                                <div className='product-action'>
                                                    <div className='qty'>
                                                        <button className='decrease' onClick={this.decreaseQty}>-</button>
                                                        <input type='text' value={this.state.qty}></input>
                                                        <button className='increase' onClick={this.increaseQty}>+</button>
                                                    </div>
                                                    <div className='addcart button'>
                                                        <button type='submit' className='primary-btn' onClick={this.handleAddToCart}>Add to cart</button>
                                                    </div>
                                                    <div className='buynow button'>
                                                        <button type='submit' className='secondary-btn'>Buy Now</button>
                                                    </div>
                                                </div>
                                                <div className='product-control list-inline'>
                                                    <ul>
                                                        <li><Link to='/'><CiHeart className='i' /><span>Add to wishlist</span></Link></li>
                                                        <li><Link to='/'><FaArrowRightArrowLeft /><span>Compare</span></Link></li>
                                                        <li><Link to='/'><FaRegShareSquare /><span>Share</span></Link></li>
                                                        <li><Link to='/'><FaRegQuestionCircle /><span>Ask Question</span></Link></li>
                                                    </ul>
                                                </div>
                                                <div className='shipping'>
                                                    <ul>
                                                        <li>
                                                            <CiGift className='i'/>
                                                            <span>무료 배송 & 반품:</span>
                                                            <span className='grey-color'> ₩50,000 이상 구매 시 무료</span>
                                                        </li>
                                                        <li>
                                                            <CiDeliveryTruck className='i'/>
                                                            <span>예상 배송 시간:</span>
                                                            <span className='grey-color'> 01-07 Dec,2023</span>
                                                        </li>
                                                    </ul>
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

// export default () => (<Detail params={useParams()}/>);

const mapStateToProps = (state) => {
     return {
        cart: state.cart,
     };
   };

const mapDispatchToProps = (dispatch) => {
    return {
        addNewCartList: (items) => dispatch(addToCart(items)),
    }
};

const connectToStore = connect(mapStateToProps,mapDispatchToProps);

export default connectToStore(withRouter(Detail));
