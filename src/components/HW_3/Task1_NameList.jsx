import React from 'react';

const names = ["Noa",	"Emma", "Oliver",	"Charlotte",	"Elijah", "Amelia",	"James",	"Ava"]


const Task1_NameList = () => {
  return (
    <ol style={{textAlign: "left", fontSize: "25px"}}>
      {names.map(name => (
        <li>{name}</li>
        ))
      }
    </ol>
  );
};

export default Task1_NameList;

