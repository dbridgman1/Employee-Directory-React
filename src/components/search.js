import React from "react";

function Search(props) {
  return (
    <div className="container mb-4">
      <form>
        <div className="form-group">
          <label>Search By First Name Or Sort Directory In Alphabetical Order</label>
          <input type="text" className="form-control" placeholder="Enter Name" onChange={props.change}/>
        </div>
      </form>
      <button className="btn btn-primary" onClick={props.sort}>Sort A-Z</button>
    </div>
  )
}

export default Search;