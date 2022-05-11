import { useRef } from 'react';
import styles from './Member.module.css';
import { removeMember, updateMember } from '../features/memberSlice';
import { useDispatch } from 'react-redux';

const Member = ({ name, age, id }) => {
  console.log(id)
  const dispatch = useDispatch();
  const nameRef = useRef();
  const ageRef = useRef();

  const handleUpdate = (e, id) => {
    name = e.preventDefault();
    name = nameRef.current.value;
    age = ageRef.current.value;
    if (!name && !age) return;
    dispatch(updateMember({ name, age, id }));
    nameRef.current.value = '';
    ageRef.current.value = '';
  };

  return (
    <div className={styles.ctr}>
      <p>
        <span>name: </span>
        {name}
      </p>
      <p>
        <span>age: </span>
        {age} years
      </p>
      <form onSubmit={(e) => handleUpdate(e, id)}>
        <div>
          <input ref={nameRef} type='text' placeholder='name' />
          <input ref={ageRef} type='text' placeholder='age' />
        </div>
        <button>update</button>
        <button type='button' onClick={() => dispatch(removeMember({ id }))}>
          delete
        </button>
      </form>
    </div>
  );
};

export default Member;
