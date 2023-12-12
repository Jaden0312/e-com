import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import top2 from '../Assets/images/top2.jpg'

class Item extends React.Component {
    render() {
        return (
            <>
                <div className='item'>
                    <div className='dot-image'>
                        {/* <Link to='/' className='product-permalink'></Link> */}
                        <div className='thumbnail'>
                            <Link to={`/Allproducts/${this.props.id}`}><img src={this.props.image} alt=''></img></Link>
                        </div>
                        <div className='actions'>
                            <ul>
                                <li><Link to='/'><FaRegStar /></Link></li>
                                <li><Link to='/'><MdOutlineCompareArrows /></Link></li>
                                <li><Link to='/'><IoEyeOutline /></Link></li>
                            </ul>
                        </div>
                        <div className='label'><span>-25%</span></div>
                    </div>
                    <div className='dot-info'>
                        <h2 className='dot-title'><Link to='/'>{this.props.name}</Link></h2>
                        <div className='product-price'>
                            <span className='before'>₩{this.props.old_price}</span>
                            <span className='current'>₩{this.props.new_price}</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};

export default Item;