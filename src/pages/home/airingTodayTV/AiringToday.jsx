import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';


const AiringToday = () => {
    const [endpoint, setEndpoint] = useState("tv");

    const { data, loading } = useFetch(`/${endpoint}/airing_today`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "TV Shows" ? "tv" : "movie");
    };

    return (
        <div className='carouselSection'>
            <br/><br/><br/>
            <ContentWrapper>
                <span className="carouselTitle">TV Shows Airing Today</span>
                <SwitchTabs data={['TV Shows']} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
        </div>
    );
}

export default AiringToday
