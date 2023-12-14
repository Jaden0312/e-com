import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoPersonOutline, IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Item from '../Item/Item';
import { connect } from 'react-redux';
import withRouter from '../../components/routes/withRouter';
import GlobalCartList from '../GlobalCartList/GlobalCartList';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            mobileMenuToggle: 'mobile-menu',
            subMenuToggle: 'has-child',
            searchBtn: 'search-float',
            overlay: 'overlay',
            cartToggle: 'cart-menu',
            top: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/top')
            .then(reponse => reponse.json())
            .then(top => {
                this.setState(
                    () => ({
                        top: top
                    })
                )
            })
    }

    sideMenuToggle = () => {
        this.setState({
            mobileMenuToggle: this.state.mobileMenuToggle === 'mobile-menu active' ? 'mobile-menu' : 'mobile-menu active',
            overlay: this.state.overlay === 'overlay' ? 'overlay active' : 'overlay',
        })
    }
    toggleProductMenu = () => {
        this.setState({
            subMenuToggle: this.state.subMenuToggle === 'has-child' ? 'has-child active' : 'has-child',
        })
    }
    toggleSearchBox = () => {
        this.setState({
            searchBtn: this.state.searchBtn === 'search-float' ? 'search-float active' : 'search-float',
            overlay: this.state.overlay === 'overlay' ? 'overlay active' : 'overlay',
        })
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
        console.log(this.props);
        const cartLength = this.props.cart.reduce((total,item)=>{
            return total + item.qty;
        },0);
        const subtotal = this.props.cart.reduce((total,item)=>{
            return total + item.price * item.qty;
        },0);
        return (
            <>
                <div>
                    <header>
                        <div className='inner-header'>
                            <div className='container wide'>
                                <div className='wrap'>
                                    <div className='header-left'>
                                        <div className='menu-bar'>
                                            <Link to='/' className="menu-trigger"><HiOutlineMenuAlt1 onClick={this.sideMenuToggle} /></Link>
                                        </div>
                                        <div className='list-inline'>
                                            <ul>
                                                <li><Link to='/Login'><IoPersonOutline /></Link></li>
                                                <li><Link to='/'><span className='item-floating'>7</span>
                                                    <FaRegStar />
                                                </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='header-center'>
                                        <nav className='menu'>
                                            <ul>
                                                <li><Link to='/'><span>HOME</span></Link></li>
                                                <li><Link to='/'>
                                                    <span>PRODUCTS</span>
                                                    <FaCaretDown />
                                                </Link>
                                                    <ul className='sub-mega'>
                                                        <li>
                                                            <div className='container'>
                                                                <div className='wrapper'>
                                                                    <div className='mega-content'>
                                                                        <div className='dotgrid'>
                                                                            <div className='wrapper'>
                                                                                {this.state.top.map((item, index) => {
                                                                                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                                                                                })}
                                                                            </div>
                                                                        </div>
                                                                        <div className='links'>
                                                                            <div className='list-block'>
                                                                                <Link to='/Outer'><h3 className='dot-title'>Outer</h3></Link>
                                                                                <ul>
                                                                                    <li><Link to='/'>점퍼</Link></li>
                                                                                    <li><Link to='/'>패딩</Link></li>
                                                                                    <li><Link to='/'>코트</Link></li>
                                                                                    <li><Link to='/'>자켓</Link></li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className='list-block'>
                                                                                <Link to='/Outer'><h3 className='dot-title'>Top</h3></Link>
                                                                                <ul>
                                                                                    <li><Link to='/'>니트</Link></li>
                                                                                    <li><Link to='/'>긴팔</Link></li>
                                                                                    <li><Link to='/'>가디건</Link></li>
                                                                                    <li><Link to='/'>후드/맨투맨</Link></li>
                                                                                    <li><Link to='/'>반팔</Link></li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className='list-block'>
                                                                                <Link to='/Outer'><h3 className='dot-title'>Pants</h3></Link>
                                                                                <ul>
                                                                                    <li><Link to='/'>와이드</Link></li>
                                                                                    <li><Link to='/'>슬랙스</Link></li>
                                                                                    <li><Link to='/'>데님</Link></li>
                                                                                    <li><Link to='/'>반바지</Link></li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className='list-block'>
                                                                                <Link to='/Outer'><h3 className='dot-title'>Shoes</h3></Link>
                                                                                <ul>
                                                                                    <li><Link to='/'>스니커즈</Link></li>
                                                                                    <li><Link to='/'>로퍼</Link></li>
                                                                                    <li><Link to='/'>구두</Link></li>
                                                                                    <li><Link to='/'>샌들/슬리퍼</Link></li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className='list-block'>
                                                                                <Link to='/Outer'><h3 className='dot-title'>Acc</h3></Link>
                                                                                <ul>
                                                                                    <li><Link to='/'>안경/시계</Link></li>
                                                                                    <li><Link to='/'>가방/장갑</Link></li>
                                                                                    <li><Link to='/'>팔찌/반지</Link></li>
                                                                                    <li><Link to='/'>기타</Link></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li><Link to='/Detail'><span>NEW</span></Link></li>
                                                <li><Link to='/'><span>BEST</span></Link></li>
                                            </ul>
                                        </nav>
                                        <div className='branding'><Link to='/'>TheEcomes</Link></div>
                                    </div>
                                    <div className='header-right'>
                                        <div className='list-inline'>
                                            <ul>
                                                <li onClick={this.toggleSearchBox}><Link to='/'><IoSearchOutline /></Link></li>
                                                <li onClick={this.openCart}><Link><span className='item-floating'>{cartLength}</span><BsHandbag /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='search-float' className={this.state.searchBtn}>
                                <div className='container-wide'>
                                    <form className='search' action=''>
                                        <IoSearchOutline />
                                        <input type='search' className='input' id='' placeholder='Search products'></input>
                                        <IoCloseOutline onClick={this.toggleSearchBox} />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <div className={this.state.overlay}></div>
                <div id='mobile-menu' className={this.state.mobileMenuToggle}>
                    <div className='wrap'>
                        <Link to='/' className='close-trigger'>
                            <IoCloseOutline onClick={this.sideMenuToggle} />
                        </Link>
                        <div className='main-menu scrollto'>
                            <nav className='nav-wrapper'>
                                <ul>
                                    <li><Link to='/'><span>HOME</span></Link></li>
                                    <li className={this.state.subMenuToggle}><Link to='/'>
                                        <span>PRODUCTS</span>
                                        <span className='child-trigger' onClick={this.toggleProductMenu}><FaCaretDown /></span>
                                    </Link>
                                        <ul className='sub-menu list-block'>
                                            <li><Link to='/'><h4>Outer</h4></Link></li>
                                            <li><Link to='/'>점퍼</Link></li>
                                            <li><Link to='/'>패딩</Link></li>
                                            <li><Link to='/'>코트</Link></li>
                                            <li><Link to='/'>자켓</Link></li>
                                            <li><Link to='/'><h4>Top</h4></Link></li>
                                            <li><Link to='/'>니트</Link></li>
                                            <li><Link to='/'>긴팔</Link></li>
                                            <li><Link to='/'>가디건</Link></li>
                                            <li><Link to='/'>후드/맨투맨</Link></li>
                                            <li><Link to='/'>반팔</Link></li>
                                            <li><Link to='/'><h4>Pants</h4></Link></li>
                                            <li><Link to='/'>와이드</Link></li>
                                            <li><Link to='/'>슬랙스</Link></li>
                                            <li><Link to='/'>데님</Link></li>
                                            <li><Link to='/'>반바지</Link></li>
                                            <li><Link to='/'><h4>Shoes</h4></Link></li>
                                            <li><Link to='/'>스니커즈</Link></li>
                                            <li><Link to='/'>로퍼</Link></li>
                                            <li><Link to='/'>구두</Link></li>
                                            <li><Link to='/'>샌들/슬리퍼</Link></li>
                                            <li><Link to='/'><h4>Acc</h4></Link></li>
                                            <li><Link to='/'>안경/시계</Link></li>
                                            <li><Link to='/'>가방/장갑</Link></li>
                                            <li><Link to='/'>팔찌/반지</Link></li>
                                            <li><Link to='/'>기타</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to='/'><span>NEW</span></Link></li>
                                    <li><Link to='/'><span>BEST</span></Link></li>
                                </ul>
                            </nav>
                            <div className='button'>
                                <Link to='/' className='secondary-btn'>Login</Link>
                                <Link to='/' className='primary-btn'>Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.overlay}></div>
                <div id='data-cart' className={this.state.cartToggle}>
                    <div className='wrap'>
                        <Link className='close-trigger' onClick={this.closeCart}>
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


// export default Header;

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

export default connectToStore(withRouter(Header));