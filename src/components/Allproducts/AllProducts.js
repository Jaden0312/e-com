import React from 'react';
import './AllProducts.css'
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

class AllProducts extends React.Component {
    constructor() {
        super();
        this.state = {
            allproducts: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/allProducts')
            .then(reponse => reponse.json())
            .then(allproducts => {
                this.setState(
                    () => ({
                        allproducts: allproducts
                    })
                )
            } )
    }

    render() {
        return (
            <>
                <div className='all-products'>
                    <div className='carousel'>
                        <div className='container'>
                            <div className='wrap'>
                                <div className='heading'>
                                    <h2 className='title'>All Products</h2>
                                </div>
                                <div className='inner-wrapper'>
                                    <div className='dotgrid carouselbox'>
                                        <div className='wrapper'>
                                            {this.state.allproducts.map((item,index) => {
                                                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                                            })}
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

export default AllProducts;