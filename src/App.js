import './App.css';
import AddForm from './components/AddForm';
import Preview from './components/Preview';
import { useSelector } from 'react-redux';
import { selectMember } from './features/memberSlice';
import Member from './components/Member';

function App() {
  const members = useSelector(selectMember);

  return (
    <>
      <AddForm />
      <Preview />
      <p
        style={{
          position: 'fixed',
          top: '4rem',
          width: 'min(90%, 35.5rem)',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        members: {members.length}
      </p>
      <main
        style={{
          paddingInline: '15vw',
          margin: '7rem auto',
          height: 'calc(100vh - 350px)',
          overflowY: 'auto',
        }}
      >
        {members.map(({ name, age, id }) => (
          <Member name={name} age={age} id={id} key={id} />
        ))}
      </main>
    </>
  );
}

export default App;
