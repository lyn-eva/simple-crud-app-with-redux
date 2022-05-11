import { useRef } from 'react';
import React from 'react';
import styles from './AddForm.module.css';
import { useDispatch } from 'react-redux';
import { update } from '../features/previewSlice';
import { addMember } from '../features/memberSlice';

const AddForm = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const ageRef = useRef();

  const handleInputChange = (e) => {
    dispatch(update(e.target.value));
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    dispatch(addMember({ name: nameRef.current.value, age: ageRef.current.value }));
    nameRef.current.value = '';
    ageRef.current.value = '';
  };

  return (
    <form onSubmit={handleAddMember} className={styles.ctr}>
      <input required onChange={handleInputChange} ref={nameRef} type='text' placeholder='name' />
      <input required onChange={handleInputChange} ref={ageRef} type='text' placeholder='age' />
      <input type='submit' value='submit' />
    </form>
  );
};

export default AddForm;
