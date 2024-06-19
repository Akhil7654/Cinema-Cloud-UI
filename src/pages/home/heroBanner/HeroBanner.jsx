import React, { useEffect, useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';

import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch('/movie/upcoming');

  useEffect(() => {
    if (data?.results && url.backdrop) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const bg = `${url.backdrop}${data.results[randomIndex].backdrop_path}`;
      setBackground(bg);
    }
  }, [data, url]);

  const searchQueryHandler = (event) => {
    if (event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          {background && <Img src={background} />}
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <h1 className="title">Welcome to CinemaCloud</h1>
          <p className="subTitle">
            Dive into a world of endless entertainment. Discover, watch, and enjoy the latest and greatest in movies and TV shows. Your movie marathon starts here!
          </p>

          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a Movie or TV Show"
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
