import React from 'react';
import Moment from 'react-moment';

export default function LaunchItem({launch: {flight_number, mission_name, launch_date_local, launch_success}}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Mission: {mission_name}</h4>
          <p>Date: {<Moment format="MM/DD/YYYY - hh:mm a">{launch_date_local}</Moment>}</p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary">Launch Details</button>
        </div>
      </div>
    </div>
  )
}