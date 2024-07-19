import React, {useEffect} from 'react';
import {AppDispatch, RootState} from '../../app/store';
import {useDispatch} from 'react-redux';

import {useParams} from 'react-router-dom';
import {fetchShow} from '../../store/showThunk';
import {useAppSelector} from '../../app/hooks';
import {selectShow} from '../../store/showSlice';
import {Col, Row} from 'react-bootstrap';

const Home = () => {
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();
  const show: RootState = useAppSelector(selectShow);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchShow(params.id));
    }
  }, [params, dispatch]);

  return (
    <Row className="mt-5">
      <Col md={3}>
        <img src={show.image}/>
      </Col>
      <Col>
        <h4>{show.name}</h4>
        <div dangerouslySetInnerHTML={{__html: show.summary}}/>
      </Col>


    </Row>
  );
};

export default Home;