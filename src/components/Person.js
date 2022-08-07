import React from 'react';
import './Person.css';

const Person = ({ person, selectItem, selectedList }) => {
  const isAdded = selectedList.find((item) => item.id === person.id);
  return (
    <div className="person">
      <div className="person_left">
        <img className="person_image" src={person.avatar} alt={person.id} />
        <div className="person_content">
          <div>{person.first_name}</div>
          <div>{person.last_name}</div>
          <div>{person.email}</div>
        </div>
      </div>
      <button className="person_right" onClick={() => selectItem(person.id)}>
        {isAdded ? 'Remove' : 'Add'}
      </button>
    </div>
  );
};

export default Person;
