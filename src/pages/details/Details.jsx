import React from 'react';
import useFetch from '../../hooks/useFetch';
import './style.scss';
import { useParams } from 'react-router-dom';
import DetailsBanner from './detailsBanner/DetailsBanner';
import Cast from './cast/Cast';
import VideosSection from './videosSection/VideosSection';
import Similar from './carousels/Similar';
import Recommendation from './carousels/Recommendation';

const Details = () => {
    const { mediaType, id } = useParams();
    const { data: videosData, loading: videosLoading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: creditsData, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

    return (
        <div className="details-container">
            {/* Details Banner with video and crew */}
            {videosData && creditsData && (
                <DetailsBanner video={videosData.results?.[0]} crew={creditsData.crew} />
            )}

            {/* Cast section */}
            {creditsData && (
                <Cast data={creditsData.cast} loading={creditsLoading} />
            )}

            {/* Videos section */}
            <VideosSection data={videosData} loading={videosLoading} />

            <Similar mediaType={mediaType} id={id}/>

            <Recommendation mediaType={mediaType} id={id}/>
        </div>
    );
};

export default Details;
