import { useState, useEffect } from 'react';
import Person from './components/Person';
import { fetchData } from './utils';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  const selectItem = (id) => {
    const person = list.find((person) => person.id === id);
    if (!selectedList.includes(person)) {
      setSelectedList((arr) => [...arr, person]);
    } else {
      setSelectedList(selectedList.filter((person) => person.id !== id));
    }
  };

  useEffect(() => {
    fetchData('https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json').then((res) => setList(res));
  }, []);

  useEffect(() => {
    console.table(selectedList);
  }, [selectedList]);

  return (
    <div className="App">
      <h1 className="heading">Contacts</h1>
      <input type="text" className="searchbar" placeholder="Search for your guy" />
      <div className="list">
        {list
          ?.sort((a, b) => {
            if (a.last_name.toLowerCase() < b.last_name.toLowerCase()) return -1;
            if (a.last_name.toLowerCase() > b.last_name.toLowerCase()) return 1;
            return 0;
          })
          .map((person) => (
            <Person person={person} key={person.id} selectItem={selectItem} selectedList={selectedList} />
          ))}
      </div>
    </div>
  );
}

export default App;
