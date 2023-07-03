import css from './Filter.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <>
      <h3>Filter</h3>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilterChange: PropTypes.func,
};
