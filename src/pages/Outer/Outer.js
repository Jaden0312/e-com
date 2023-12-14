import React from 'react';
import './Outer.css'
import { Link } from 'react-router-dom';
import { IoMdClose, IoIosArrowDown } from "react-icons/io";
import Item from '../../components/Item/Item';

class Outer extends React.Component {
    constructor() {
        super();
        this.state = {
            outer: [],
        };
    }
    componentDidMount() {
        fetch('http://localhost:3000/outer')
            .then(reponse => reponse.json())
            .then(outer => {
                this.setState(
                    () => ({
                        outer: outer
                    })
                )
            } )
    }

    loginUser = () => {

    }

    render() {
        
        return (
            <>
                <div>
                    <div className='section'>
                        <div className='container wide'>
                            <div className='wrap'>
                                <div className='heading'>
                                    <h1 className='title'>Outer</h1>
                                </div>
                                <div className='content'>
                                    <div id='sidebar-filter' className='sidebar'>
                                        <div className='wrap'>
                                            <Link to='/' className='close-trigger'>
                                                <IoMdClose />
                                            </Link>
                                            <div className='sidebar-content'>
                                                {/* <div className='sidebar-title'>Filter</div> */}
                                                {/* <div className='widget'>
                                                    <div className='summary'>
                                                        <input type='checkbox' name='cats' id='aaa' checked></input>
                                                        <label for='aaa'>
                                                            <span>Size</span>
                                                            <IoIosArrowDown className='icon' />
                                                        </label>
                                                        <div className='accord product-size'>
                                                            <div className='wrap'>
                                                                <button>S</button>
                                                                <button>M</button>
                                                                <button>L</button>
                                                                <button>XL</button>
                                                                <button>XXL</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='widget'>
                                                    <div className='summary'>
                                                        <input type='checkbox' name='cats' id='aab' checked></input>
                                                        <label for='aab'>
                                                            <span>Colors</span>
                                                            <IoIosArrowDown className='icon' />
                                                        </label>
                                                        <div className='accord product-color'>
                                                            <div className='wrap'>
                                                                <button className='grey'></button>
                                                                <button className='black'></button>
                                                                <button className='brown'></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                <div className='widget'>
                                                    <div className='summary'>
                                                        <input type='checkbox' name='cats' id='aac' checked></input>
                                                        <label for='aabc'>
                                                            <span>Categories</span>
                                                            <IoIosArrowDown className='icon' />
                                                        </label>
                                                        <div className='accord list-block scrollto'>
                                                            <ul className='wrapper initial'>
                                                                <li><Link to='/'>점퍼</Link></li>
                                                                <li><Link to='/'>패딩</Link></li>
                                                                <li><Link to='/'>코트</Link></li>
                                                                <li><Link to='/'>자켓</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className='widget'>
                                                    <div className='summary'>
                                                        <label><span>Price</span></label>
                                                        <div className='range-track'>
                                                            <input type='range' value='2500' min='0' max='50000' step='1'></input>
                                                        </div>
                                                        <div className='price-range grey-color'>
                                                            <span>3,000</span>
                                                            <span>50,000</span>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='category-content'>
                                        <div className='dotgrid'>
                                            {this.state.outer.map((item,index) => {
                                                        return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                                                    })}
                                        </div>
                                        <div className='button'><Link to='/' className='primary-btn'>LOAD MORE</Link></div>
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

export default Outer;