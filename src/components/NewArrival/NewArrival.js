import React from 'react';
import './NewArrival.css'
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

class NewArrival extends React.Component {
    constructor() {
        super();
        this.state = {
            newArrivals: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/outer')
            .then(reponse => reponse.json())
            .then(newArrivals => {
                this.setState(
                    () => ({
                        newArrivals: newArrivals
                    })
                )
            } )
    }
    render() {
        // console.log(this.state.newArrivals);
        return (
            <>
                <div className='new-arrivals'>
                    <div className='carousel'>
                        <div className='container'>
                            <div className='wrap'>
                                <div className='heading'>
                                    <h2 className='title'>New Arrivals</h2>
                                </div>
                                <div className='inner-wrapper'>
                                    <div className='dotgrid carouselbox'>
                                        <div className='wrapper'>
                                            {this.state.newArrivals.map((item,index) => {
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

export default NewArrival;