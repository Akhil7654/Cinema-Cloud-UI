import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';
import './style.scss';

const UpcomingMovies = () => {
    const [endpoint, setEndpoint] = useState("movie");
    const { data, loading } = useFetch(`/${endpoint}/upcoming`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    const currentDate = new Date().toISOString().split('T')[0];

    const filteredData = data?.results.filter(movie => movie.release_date >= currentDate);

    return (
        <div className='carouselSection'>
            <br/><br/><br/>
            <ContentWrapper>
                <span className="carouselTitle">Upcoming Movies</span>
                <SwitchTabs data={['Movies']} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={filteredData} loading={loading} endpoint={endpoint} />
        </div>
    );
};

export default UpcomingMovies;
