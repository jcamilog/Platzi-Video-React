import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Categroies from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';


import '../assets/styles/App.css';

// const API = 'http://localhost:3000/initialState'



const Home = ({ myList, trends, originals }) => {
    return(
        <>
        <Header / >
            <Search />
            {
                myList.length > 0 &&(
                <Categroies title="Mi lista">
                    <Carousel>
                    {
                    myList.map(item => (
                        <CarouselItem 
                            key= {item.id} {...item} isList />
                    )
                        
                    )
                }
                    </Carousel>
                </Categroies>
                )
            }

            <Categroies title="Tendencias">
                <Carousel>
                {
                    trends.map(item => (
                        <CarouselItem key={item.id} {...item} />
                    )
                        
                    )
                }
                </Carousel>
            </Categroies>

            <Categroies title="Originales Platzi Video">
                <Carousel>
                {
                    originals.map(item => (
                        <CarouselItem key={item.id} {...item} />
                    )
                        
                    )
                }
                </Carousel>
            </Categroies>

        </>
    )
}; 

// export default Home;
// export default connect(props, actions)(home)
const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
};

export default connect(mapStateToProps, null)(Home)