import React from 'react';

function EmployeeCard(props) {
  return (
    <div class="card col-lg-4 col-md-6 col-sm-12 p-3">
      <img className="activator" src={props.data.picture.large} alt=""/>
      <div class="card-body">
        <h5 class="card-title">{props.data.name.first} {props.data.name.last}</h5>
        <p>Phone: {props.data.phone}</p>
        <p>Email: {props.data.email}</p>
      </div>
    </div>
  );
}

export default EmployeeCard;



