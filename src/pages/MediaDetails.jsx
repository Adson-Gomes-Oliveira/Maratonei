import React, {useEffect, useContext} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import Loading from '../components/Loading';
import AlternativeHeader from '../components/AlternativeHeader';
import Advertising from '../components/Advertising';
import MediaDetailsLeft from '../components/MediaDetailsLeft';
import MediaDetailsCenter from '../components/MediaDetailsCenter';
import CastAndCrew from '../components/CastAndCrew';
import MediaReviews from '../components/MediaReviews';
import Footer from '../components/Footer';
import MaratoneiContext from '../context/MaratoneiContext';
import {useDetailsAPI} from '../hooks/useRequestAPI';
import {
  MediaDetailStyled,
  MediaSectionStyled,
  MediaCenterStyled,
  MediaPrimaryInfoStyled,
} from '../styles/mediaDetails';

function MediaDetails() {
  const {id} = useParams();
  const {pathname} = useLocation();
  const [result, setShowId] = useDetailsAPI(pathname);

  const {loading, setLoading} = useContext(MaratoneiContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [pathname]);

  useEffect(() => {
    setShowId(id);
  }, [id]);

  return (
    <>
      {loading && <Loading />}
      <AlternativeHeader />
      <Advertising />
      <MediaDetailStyled>
        <MediaSectionStyled>

          <MediaPrimaryInfoStyled>

            <MediaDetailsLeft detailsData={result}/>

          </MediaPrimaryInfoStyled>

          <MediaCenterStyled>

            <MediaDetailsCenter detailsData={result} />
            <MediaReviews detailsData={result} />

          </MediaCenterStyled>

        </MediaSectionStyled>

        <CastAndCrew detailsData={result} />

      </MediaDetailStyled>
      <Footer />
    </>
  );
}

export default MediaDetails;
