import React from 'react';

export default function Donate() {
  return (
    <div className="row">
      <div className="col text-center pt-4 pb-3">
        <h3 className="text-center mb-4">Donate</h3>

        <a
            className="btn btn-primary"
            href="https://www.patreon.com/internetconnectionmonitor/membership"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require('public/img/ICM-logo-256.png')}
              height="24"
              alt=""
            />
            &nbsp;&nbsp;Support ICM on Patreon
          </a>

      </div>
    </div>
  );
}
