import React from 'react';
import EmployeeCard from './employeeCard';

function EmployeeList(props) {
    return (
        <div className="container">
            <div className="row">
                {props.employees.map((person, index) => (
                    <EmployeeCard data={ person } key={ index } />
                ))}
            </div>
        </div>
    );
}

export default EmployeeList;