import React from 'react';
import './Best.css'
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

class Best extends React.Component {
    render() {
        return (
            <>
                <div className='best-items'>
                    <div className='carousel'>
                        <div className='container'>
                            <div className='wrap'>
                                <div className='heading'>
                                    <h2 className='title'>Best Items</h2>
                                </div>
                                <div className='inner-wrapper'>
                                    <div className='dotgrid carouselbox'>
                                        <div className='wrapper'>
                                            <Item />
                                            <Item />
                                            <Item />
                                            <Item />
                                            <Item />
                                            <Item />
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

export default Best;