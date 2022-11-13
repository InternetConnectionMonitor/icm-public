import React from 'react'

export default function StandWithUkraine() {
  return (
    <div className="row">
      <div className="col text-center pt-4 pb-3">
        <a href="https://u24.gov.ua/" target="_blank" rel="noreferrer" title="Support freedom and stand against the brutal war started by russia! Check the initiative of the President of Ukraine 🇺🇦">
          <img src={require('public/img/ukraine.png')} width="192" alt="Stand with Ukraine!" />
        </a>
      </div>
    </div>
  )
}
