import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, age, image, name } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <h3>{person.name}</h3>
            <p>{age} years</p>
          </article>
        );
      })}
    </>
  );
};

export default List;
