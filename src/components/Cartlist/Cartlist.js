import React from 'react';
import './Cartlist.css'
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { connect } from 'react-redux';
import withRouter from '../../components/routes/withRouter';

class Cartlist extends React.Component {
    
    deleteItem = (id) => {
        console.log(id);

    }

    render() {
        // console.log(this.props.cart)
        return (
            <>
                <li className='dotgrid'>
                    <div className='grouping wrapper'>
                        {/* <div className='cart-number'>{this.props.id}</div> */}
                        <div className='thumbnail ob-cover'>
                            <Link to='/'>
                                <img src={ this.props.image }></img>
                            </Link>
                        </div>
                        <div className='variants'>
                            <h4 className='dot-title'><Link to='/'>{ this.props.name }</Link></h4>
                            <div className='color grey-color'>
                                <span>Color:</span>
                                <span>Black</span>
                            </div>
                            <div className='size grey-color'>
                                <span>Size:</span>
                                <span>L</span>
                            </div>
                        </div>
                    </div>
                    <div className='grouping wrapper'>
                        <div className='price'>₩{ this.props.price }</div>
                        <div className='quantity'>
                            <div className='control'>
                                <button>-</button>
                                <input type='text' value={this.props.qty}></input>
                                <button>+</button>
                            </div>
                        </div>
                        <div className='price-sub'>₩{ this.props.price }</div>
                        <a className='item-remove'>
                            <IoMdClose onClick={() => this.deleteItem(this.props)}/>
                        </a>
                    </div>

                </li>
            </>
        )
    }
}

// export default Cartlist;

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

export default connectToStore(withRouter(Cartlist));