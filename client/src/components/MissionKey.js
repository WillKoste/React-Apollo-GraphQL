import React from 'react';

export default function MissionKey() {
  return (
    <div className="my-3" style={{display:'flex'}}>
      <p className="mr-4">
        <span className="px-3 mr-2 bg-success" /> = Success
      </p>
      <p>
        <span className="px-3 mr-2 bg-danger" /> = Fail
      </p>
    </div>
  )
};