import React from 'react';
import {AppDispatch, RootState} from '../../app/store';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../app/hooks';
import {selectVariants} from '../../store/searchSlice';

const Home = () => {
  const dispatch:AppDispatch = useDispatch();
  const searchVariants:RootState = useAppSelector(selectVariants);
  return (
    <div>
      {searchVariants.map(el=> {
       return <h1>{el.name}</h1>;
      })}
    </div>
  );
};

export default Home;