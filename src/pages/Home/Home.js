import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import main1 from '../../components/Assets/main1.jpg';
import main2 from '../../components/Assets/main2.jpg';
import main3 from '../../components/Assets/main3.jpg';
import main4 from '../../components/Assets/main4.jpg';
import NewArrival from '../../components/NewArrival/NewArrival';
import AllProducts from '../../components/Allproducts/AllProducts';

class Home extends React.Component {

    render() {
        return (
            <>
            <main>
                <div className='slider'>
                    <div className='sliderbox swiper'>
                        <div className='wrap swiper-wrapper'>
                            <div className='item swiper-slide'>
                                <div className='image'>
                                    <div className='ob-cover'>
                                        <img src={main1}></img>
                                    </div>
                                    <div className='title-info'>
                                        <div className='container wide'>
                                            <div className='wrap'>
                                                <span className='price'>₩54,900</span>
                                                <h3 className='title'>Feel Our Trend Fashion</h3>
                                                <div className='button'><Link to='/Best' className='primary-btn'>Shop Now</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NewArrival />
                <AllProducts />
            </main>
            </>
        )
    }
};

export default Home;