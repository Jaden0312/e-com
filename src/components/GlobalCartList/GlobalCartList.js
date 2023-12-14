import React from 'react';
import './GlobalCartList.css'
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { connect } from 'react-redux';
import withRouter from '../../components/routes/withRouter';
import { deleteList, increaseCartQty } from '../../store/actions';

class GlobalCartList extends React.Component {
    
    deleteItem = (id) => {
        console.log(id);
        this.props.deleteItemList(id);
    }

    increaseQty = (id) => {
        console.log(id);
        this.props.increaseCartQty(id)
    }
    render() {
        return (
            <>
                <li>
                    <div className='grouping'>
                        <div className='quantity'>
                            <div className='control'>
                                <button>-</button>
                                <input type='text' value={this.props.qty}></input>
                                <button>+</button>
                            </div>
                        </div>
                        <div className='thumbnail'>
                            <Link to='/'>
                                <img src={this.props.image}></img>
                            </Link>
                        </div>
                    </div>
                    <div className='variants'>
                        <h4 className='dot-title'><Link to='/'>{this.props.name}</Link></h4>
                        <div className='color grey-color'>
                            <span>Color:</span>
                            <span>Black</span>
                        </div>
                        <div className='size grey-color'>
                            <span>Size:</span>
                            <span>L</span>
                        </div>
                        <div className='price'>₩{this.props.price}</div>
                        <Link className='item-remove'>
                            <IoMdClose onClick={()=>this.deleteItem(this.props.id)} />
                        </Link>
                    </div>
                </li>
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
            deleteItemList: (item) => dispatch(deleteList(item)),
            increaseCartQty: (qty) => dispatch(increaseCartQty(qty)),
        }
};

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(withRouter(GlobalCartList));