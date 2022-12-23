import React from 'react'

export default function DownloadButton() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center mt-4 mb-5">
          <a
            className="btn btn-primary"
            href="https://chrome.google.com/webstore/detail/internet-connection-monit/hgccfdagfbilbdbkgmfdmmdfmjjoakfo"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require('public/img/chrome-logo.png')} height="24" alt="" />
            &nbsp;&nbsp;Install ICM for Google Chrome
          </a>
        </div>
      </div>
    </div>
  )
}
