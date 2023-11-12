// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Link from 'next/link';
import {
  DownloadButton,
  MadeWithLoveInUkraine,
  MainLayout,
  StandWithUkraine,
} from 'components';

export default function Home() {
  return (
    <MainLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center pt-4 pb-3">
            <h1>Internet Connection Monitor</h1>
            <div>
              ICM is a Google Chrome extension for monitoring Internet connectivity
            </div>
          </div>
        </div>

        <DownloadButton />

        <div className="row">
          <div className="col text-center pb-4">
            <img
              src={require('public/img/ICM-internet-connection-monitor-ui.jpg')}
              width="288"
              alt="Google Chrome extension for monitoring Internet connectivity and latency"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <h5 className="text-center">🎯 ICM IS THE BEST FOR</h5>
            <ul>
              <li>Recording and analyzing outages of Internet connection</li>
              <li>Verifying ISP/provider issues</li>
              <li>Verifying some hardware issues</li>
            </ul>
            <h5 className="text-center">💻 FEATURES</h5>
            <ul>
              <li>
                Precise connectivity test with configurable testing interval
              </li>
              <li>Latency measurement</li>
              <li>
                Detect when Internet doesn't work over operating Wi-Fi or
                Ethernet
              </li>
              <li>Disconnects, availability and downtime stats</li>
              <li>Play sound when connection goes online or offline</li>
              <li>Events log with CSV export</li>
              <li>Statistics with realtime monitoring</li>
              <li>Retina-ready icon sets</li>
              <li>Light and dark themes support</li>
            </ul>
            <h5 className="text-center">🚀 NEW IN ICM v4.0</h5>
            <ul>
              <li>Added Downtime stats</li>
              <li>Added Statistics page with realtime monitoring</li>
              <li>Added Status duration to the logging</li>
            </ul>
            <h5 className="text-center mb-3">📷 SCREENSHOTS</h5>
            <div
              id="carouselExampleIndicators"
              className="carousel carousel-dark slide mb-5"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Screenshot 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Screenshot 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Screenshot 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Screenshot 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="4"
                  aria-label="Screenshot 5"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={require('public/img/internet-connection-monitor-online.jpg')}
                    className="d-block w-100"
                    alt="Online"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require('public/img/internet-connection-monitor-offline.jpg')}
                    className="d-block w-100"
                    alt="Offline"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require('public/img/internet-connection-monitor-settings.jpg')}
                    className="d-block w-100"
                    alt="Settings"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require('public/img/internet-connection-monitor-log.jpg')}
                    className="d-block w-100"
                    alt="Log"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require('public/img/internet-connection-monitor-statistics.jpg')}
                    className="d-block w-100"
                    alt="Statistics"
                  />
                </div>
              </div>
              {/* <!-- <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"> -->
                <!-- <span className="carousel-control-prev-icon" aria-hidden="true"></span> -->
                <!-- <span className="visually-hidden">Previous</span> -->
              <!-- </button> -->
              <!-- <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"> -->
                <!-- <span className="carousel-control-next-icon" aria-hidden="true"></span> -->
                <!-- <span className="visually-hidden">Next</span> -->
              <!-- </button> --> */}
            </div>

            <h5 className="text-center mb-3">🗣️ WHAT PEOPLE ARE SAYING</h5>
            <div className="mb-5">
              <div className="row">
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Vas Gk</h5>
                      <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
                      <p className="card-text">
                        <i>
                          Great tool. We have a main router that reaches 100%
                          cpu load during the day and this tool is great for
                          logging the number of disconnects and the duration of
                          them
                        </i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Mike Stember</h5>
                      <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
                      <p className="card-text">
                        <i>
                          Thanks for your help in revealing, objectively, how
                          bad my ISP is. The graphics in the statistics are
                          clear to understand. Somewhere recently the connection
                          log added a third column show the duration of the
                          status. That was a nice upgrade as I used to export
                          the data and drop it in a spread sheet to calculate
                          the duration. Now the data can be used as is.
                        </i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Darien Young</h5>
                      <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
                      <p className="card-text">
                        <i>
                          Works great so far. Thanks a lot. Very helpful. Lost
                          internet connection several times while writing this
                          short review alone! Haha. The sound indicator is a
                          very helpful feature. Nice UI design as well with good
                          options and not confusing in any way. Well done.
                        </i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DownloadButton />

        <div
          className="row justify-content-center pt-3"
          id="improve-connection"
        >
          <div className="col-md-6 col-sm-12 text-center">
            {/* <a name="improve-connection"></a> */}
            <h3 className="text-center">Improve your Internet connection</h3>
            <Link href="/3-primary-reasons-of-poor-internet-connection.html">
              Read how to improve your Internet connection
            </Link>
          </div>
        </div>
        <div className="row justify-content-center pt-5" id="faq">
          <div className="col-md-6 col-sm-12">
            <h3 className="text-center">FAQ</h3>
            <strong>Q:</strong> Where is the extension icon?
            <br />
            <strong>A:</strong> At some point Google Chrome changed the way
            extensions are displayed. You need to click on the puzzle icon to
            the right of the address bar and then pin Internet Connection
            Monitor
            <br />
            <img
              src={require('public/img/activate-internet-connection-monitor-extension.png')}
              style={{ width: '100%', maxWidth: '418px' }}
            />
            <br />
            <br />
            <strong id="statuses">Q:</strong> What exactly can be monitored?
            <br />
            <strong>A:</strong> The extension monitors the Internet connection
            and reports 3 statuses:
            <ul style={{ listStyle: 'none' }}>
              <li>
                <strong>🟢 Online:</strong> Internet connected
              </li>
              <li>
                <strong>🟠 Connection issues:</strong> if Chrome itself cannot
                properly determine whether Internet connection is down while
                you're connected to Wi-Fi/Ethernet - this status will popup.
                Most likely, your Wi-Fi/Ethernet cable is connected, but there
                is no Internet connection behind it. In most cases, it is
                ISP/provider issue
              </li>
              <li>
                <strong>🔴 Offline:</strong> Internet disconnected.
                Wi-Fi/Ethernet may work or not, but Internet itself is
                unavailable
              </li>
            </ul>
            <strong>Q:</strong> How does the extension test the connectivity?
            <br />
            <strong>A:</strong> The extension uses a combination of Chrome
            internal API and pinging Google servers via https (port 443). It
            does not expose any open ports or something else that could
            compromise user's security
            <br />
            <br />
            <strong>Q:</strong> What is the testing interval?
            <br />
            <strong>A:</strong> How frequently to ping Google servers to
            determine the status of Internet connection. The option is
            configurable: check very 1, 2, 3 or 5 seconds
            <br />
            <br />
            <strong>Q:</strong> Does this extension have access to my browsing
            history, etc?
            <br />
            <strong>A:</strong> It does NOT. Moreover, it does not require any
            special access at all (you can notice that other extensions ask you
            to give them some permissions during the installation process)
            <br />
            <br />
            <strong>Q:</strong> Can this extension measure Internet speed?
            <br />
            <strong>A:</strong> It cannot. Please, use{' '}
            <a
              href="https://chrome.google.com/webstore/detail/speedtest-by-ookla/pgjjikdiikihdfpoppgaidccahalehjh?hl=en"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Speedtest by Ookla
            </a>
            <br />
            <br />
            <strong>Q:</strong> Will it work if Chrome is closed?
            <br />
            <strong>A:</strong> Not, it will not. You need to have a Chrome
            window open to track your connection log. It's relatively easy to
            add Chrome to autostart on Windows, Mac or Linux
            <br />
            <br />
            <strong>Q:</strong> Will it work if computer is in sleep?
            <br />
            <strong>A:</strong> Yes, it should work, but the mechanism of
            tracking the disconnects while the computer is in sleep has not been
            thoroughly tested. Macs, for example, wake up every couple minutes
            and ICM checks the connection. But do not rely on precise
            measurement during the computer sleep, keep the computer running
            <br />
            <br />
            <strong>Q:</strong> Can you use it on Microsoft EDGE, Brave or
            Chromium?
            <br />
            <strong>A:</strong> Yes, you can. It works on all Chromium-based
            browsers
            <br />
            <br />
            <strong>Q:</strong> Is there a Firefox extension?
            <br />
            <strong>A:</strong> Currently, only Google Chrome and Microsoft Edge
            are supported
            <br />
            <br />
            <strong>Q:</strong> Can you give an advice on how to improve
            Internet connection overall?
            <br />
            <strong>A:</strong> Read the article about{' '}
            <Link href="/3-primary-reasons-of-poor-internet-connection.html">
              the 3 primary reasons of Internet connection issues
            </Link>
            <br />
            <br />
            Icons by{' '}
            <a
              href="https://svgrepo.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              svgrepo.com
            </a>{' '}
            and{' '}
            <a
              href="https://flaticon.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              flaticon.com
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col text-center pt-3 pb-3">
            <h3 className="text-center">Privacy Policy</h3>
            <Link href="/privacy-policy.html">ICM Privacy Policy</Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12 pt-3 mb-4">
            <h3 className="text-center">Support</h3>
            For support, questions and suggestions: open{' '}
            <a
              href="https://chrome.google.com/webstore/detail/internet-connection-monit/hgccfdagfbilbdbkgmfdmmdfmjjoakfo"
              rel="noopener noreferrer"
            >
              extension's page in Chrome store
            </a>{' '}
            and then click on the <strong>Support</strong> tab
            <br />
            <br />
            Alternatively, for suggestions, ideas and feature requests: go to{' '}
            <a
              href="https://github.com/InternetConnectionMonitor/icm-public/issues"
              rel="noopener noreferrer"
            >
              ICM issues page on GitHub
            </a>
          </div>
        </div>

        <DownloadButton />

        <StandWithUkraine />
        <MadeWithLoveInUkraine />
      </div>
    </MainLayout>
  );
}
