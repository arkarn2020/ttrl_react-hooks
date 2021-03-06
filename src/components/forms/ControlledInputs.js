import React, { useState } from 'react';

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      //   console.log('submit the form');
      const person = { id: new Date().getTime(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        <DisplayPeople people={people} />
      </article>
    </>
  );
};

const DisplayPeople = ({ people }) => {
  return people.map((p) => {
    const { id, firstName, email } = p;
    return (
      <div className="item" key={id}>
        <h4>{firstName}</h4>
        <p>{email}</p>
      </div>
    );
  });
};

export default ControlledInputs;
