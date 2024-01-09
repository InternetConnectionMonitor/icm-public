import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

const MainLayout: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light sticky-top">
        <div className="container">
          <Link className="navbar-brand d-flex" href="/">
            <img
              src={require('public/img/ICM-logo-256.png')}
              height="31"
              alt=""
            />
            &nbsp;
            <span>Internet Connection Monitor</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ms-auto">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item pe-2">
                  <Link
                    className="nav-link"
                    href="/3-primary-reasons-of-poor-internet-connection.html"
                  >
                    How to improve Internet connection
                  </Link>
                </li>
                <li className="nav-item pe-3">
                  <Link
                    className="nav-link"
                    href="https://www.patreon.com/internetconnectionmonitor/membership"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Donate
                  </Link>
                </li>
                <li className="nav-item">
                  <form>
                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                    <Link
                      className="btn btn-primary"
                      href="https://chrome.google.com/webstore/detail/internet-connection-monit/hgccfdagfbilbdbkgmfdmmdfmjjoakfo"
                    >
                      <img src={require('public/img/chrome-logo.png')} height="24" alt="" />
                      &nbsp;&nbsp;Install ICM
                    </Link>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
