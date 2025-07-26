import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://expert-disco-jjj5gx5w5v63p59g-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card bg-secondary text-light mb-4">
      <div className="card-header">
        <h2 className="mb-0">Teams</h2>
      </div>
      <div className="card-body p-3">
        <table className="table table-dark table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Team Name</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team._id}>
                <td>{team.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
