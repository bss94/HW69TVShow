import React, {ChangeEvent} from 'react';
import {Col, Form, Row} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../app/hooks';
import {clearChange, inputChange, selectSearch, selectVariants} from '../../store/searchSlice';
import {AppDispatch, RootState} from '../../app/store';
import {fetchSearchVariants} from '../../store/searchThunk';
import {NavLink} from 'react-router-dom';

const SearchForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const searchValue: RootState = useAppSelector(selectSearch);
  const searchVariants: RootState = useAppSelector(selectVariants);

  const onInputChange = async (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    await dispatch(inputChange(event.target.value));
    if (searchValue.length > 2) {
      dispatch(fetchSearchVariants(searchValue));
    }
  };
  const clearSearch = () => {
    dispatch(clearChange());
  };
  let autocompete = (<></>);
  if (searchVariants.length !== 0) {
    autocompete = (
      <div className="position-absolute top-100 mt-2 bg-white border-1 border w-100 p-4">
        <ul>
          {searchVariants.map(el => {
            return <li key={el.id} onClick={clearSearch}>
              <NavLink to={`/shows/${el.id}`}>{el.name}
              </NavLink>
            </li>;
          })}
        </ul>
      </div>
    );
  }

  return (
    <Form>
      <Form.Group className="mb-3 mt-5">
        <Row>
          <Form.Label column="lg" md={4}>
            Search for TV Show:
          </Form.Label>
          <Col className="position-relative w-100">
            <Form.Control size="lg" type="text"
                          placeholder="Search"
                          value={searchValue}
                          onChange={onInputChange}/>

            {autocompete}

          </Col>

        </Row>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;