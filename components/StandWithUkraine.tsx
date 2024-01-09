import React from 'react';

export default function StandWithUkraine() {
  return (
    <div className="row">
      <div className="col text-center pt-4 pb-3">
        <a
          href="https://prytulafoundation.org/en"
          target="_blank"
          rel="noreferrer"
          title="Support freedom and stand against the brutal war started by Russia! Prytula Foundation helps 🇺🇦 civilians and army to withstand the russian agression"
        >
          <img
            src={require('public/img/ukraine.png')}
            width="164"
            alt="Stand with Ukraine!"
          />
        </a>
      </div>
    </div>
  );
}
