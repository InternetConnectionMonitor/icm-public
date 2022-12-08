import Head from 'next/head'
import Link from 'next/link'

import { MadeWithLoveInUkraine, MainLayout, StandWithUkraine } from 'components'

export default function InternetConnectionImprovements() {
  return (
    <MainLayout>
      <div className="container-fluid">
        <Head>
          <meta
            name="description"
            content="3 primary reasons you're experiencing the issues with Internet connection (connectivity, stability, speed) and how to fix them."
          />
          <meta
            name="keywords"
            content="internet,chrome extension,connection,connectivity,test,icm,internet connection monitor,log,logging,monitoring,interruptions,internet down,latency,ping,wi-fi,wi fi"
          />
          <title>
            Improve your Internet connection – 3 main reasons it's bad
          </title>
          <meta
            property="og:title"
            content="Improve your Internet connection – 3 main reasons it's bad"
          />
          <meta
            property="og:description"
            content="3 primary reasons you're experiencing the issues with Internet connection (connectivity, stability, speed) and how to fix them."
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Internet Connection Monitor" />
          <meta
            property="og:url"
            content="https://internetmon.org/internet-connection-improvements.html"
          />
        </Head>
        <div className="row">
          <div className="col text-center pt-4 pb-3">
            <h1>Improve your Internet connection</h1>
            <div>
              3 root causes of low-quality Internet connection. From the creator
              of <Link href="/">Internet Connection Monitor</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col pt-4 pb-4">
            <p>
              <strong>3 primary reasons</strong> you're experiencing the issues
              with Internet connection (connectivity, stability, speed).
            </p>
            <h2 className="mt-4">Reason 1: An old computer</h2>
            <p>
              Yeah, you may think that you have issues with Internet connection
              whereas in reality it's a 10-year old computer that cannot handle
              even basic tasks. The older the computer &ndash; the older are the
              hardware and the OS. For example, Chrome updates its browser almost
              daily. They add new features Also, if in addition to that your
              router is also 10-years old, connection problems are just
              guaranteed.
            </p>
            <p className="badge rounded-pill bg-warning text-dark">
              Old computer &ndash; Common issues
            </p>
            <ul>
              <li>Delayed response of the interface in general</li>
              <li>Frequent system error messages</li>
              <li>Insufficient memory with hangs of the system</li>
              <li>Video freezes</li>
              <li>Everything takes forever</li>
            </ul>
            <p className="badge rounded-pill bg-success">What to do?</p>
            <ul>
              <li>
                ⭐️ Buy{' '}
                <a
                  href="https://amzn.to/3rDnz59"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  a new computer
                </a>
                . It will be faster, with newer version of OS, software and
                hardware
              </li>
              <li>
                Or clean it up from garbage and viruses. Google the tutorials or
                go to a computer repair shop
              </li>
            </ul>
            <h2 className="mt-4">
              Reason 2: Low quality connection from Internet provider (ISP –
              Internet Service Provider)
            </h2>
            <p>
              The hardest to troubleshoot and the most annoying one. First of all
              – you need to check if there are connection dropouts.{' '}
              <a
                href="https://chrome.google.com/webstore/detail/internet-connection-monit/hgccfdagfbilbdbkgmfdmmdfmjjoakfo"
                target="_blank"
                rel="noreferrer"
              >
                ICM
              </a>{' '}
              can help with that.
            </p>
            <p className="badge rounded-pill bg-warning text-dark">
              Provider &ndash; Common issues
            </p>
            <ul>
              <li>Intermittent connection issues</li>
              <li>Unstable connection speed</li>
              <li>Video freezes</li>
              <li>Downloads interruption</li>
              <li>High ping and packet loss in games</li>
            </ul>
            <p className="badge rounded-pill bg-success">What to do?</p>
            <ul>
              <li>
                ⭐️ Use{' '}
                <a
                  href="https://chrome.google.com/webstore/detail/internet-connection-monit/hgccfdagfbilbdbkgmfdmmdfmjjoakfo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Internet Connection Monitor (ICM)
                </a>{' '}
                or similar software on your laptop close to the router to diagnose
                the connection drops and ensure it's actually a provider issue
              </li>
              <li>
                ⭐️ Ask your provider support crew to help with the connection
                stability, providing them a log of disconnects that can be logged
                by ICM. It may be a waste of time, since the support may just
                suggest you some crappy advice like rebooting your computer or
                something similar
              </li>
              <li>Change your ISP</li>
            </ul>
            <h2 className="mt-4">Reason 3: Low quality router</h2>
            <p>
              Apart from a modern computer, your router should not be a $15 box of
              microchips. A lot of issues with Wi-Fi are either related to the low
              performance of the router's wireless subsystem in crowded areas or
              the weak signal strength. By crowded I mean when there are multiple
              routers nearby that interfere with the signal of your own router.
              You'd want to have a modern router that at least supports Wi-Fi 5.
              If you're not tech savvy, just pick a decent $100-$150 TP-Link or
              Asus.
            </p>
            <p className="badge rounded-pill bg-warning text-dark">
              Router &ndash; Common issues
            </p>
            <ul>
              <li>Wi-Fi disconnects periodically</li>
              <li>Wi-Fi connections becomes worse over time</li>
              <li>
                Wi-Fi speed is very low even in a close proximity to the router
              </li>
              <li>Downloads interruption</li>
            </ul>
            <p className="badge rounded-pill bg-success">What to do?</p>
            <ul>
              <li>⭐️ Buy a new router</li>
              <li>Upgrade router's firmware</li>
              <li>Reposition router</li>
              <li>Adjust Wi-Fi settings such as Wi-Fi channel</li>
              <li>Restart router frequently</li>
            </ul>
            <h4 className="mb-3">Top 5 router options to buy in 2022</h4>
            <ol>
              <li className="pb-3">
                <a
                  href="https://amzn.to/3rGuo5R"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  <img
                    src="img/router-asus.webp"
                    style={{ maxWidth: '128px' }}
                    className="ms-3 me-3"
                  />
                  ASUS AX5700 WiFi 6 Gaming Router (RT-AX86U)
                </a>
                &ndash; $269.99
              </li>
              <li className="pb-3">
                <a
                  href="https://amzn.to/3SIueGW"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  <img
                    src="img/router-ax73.jpg"
                    style={{ maxWidth: '128px' }}
                    className="ms-3 me-3"
                  />
                  TP-Link AX5400 WiFi 6 Router
                </a>
                &ndash; $154.99
              </li>
              <li className="pb-3">
                <a
                  href="https://amzn.to/3CFH1V8"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  <img
                    src="img/router-ax1800.jpg"
                    style={{ maxWidth: '128px' }}
                    className="ms-3 me-3"
                  />
                  TP-Link AX1800 Wi-Fi 6 Router
                </a>
                &ndash; $89.99
              </li>
              <li className="pb-3">
                <a
                  href="https://amzn.to/3T9LOng"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  <img
                    src="img/router-ax1500.jpg"
                    style={{ maxWidth: '128px' }}
                    className="ms-3 me-3"
                  />
                  TP-Link AX1500 Wi-Fi 6 Router
                </a>
                &ndash; $66.98
              </li>
              <li className="pb-3">
                <a
                  href="https://keenetic.com/en/keenetic-speedster"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  <img
                    src="img/router-keenetic.jpg"
                    style={{ maxWidth: '128px' }}
                    className="ms-3 me-3"
                  />
                  Keenetic Speedster
                </a>
                &ndash; €49.99, <strong>Europe only</strong>
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col pt-4 pb-4">
            <h3 className="mt-4">
              Several useful articles that may help you fix the Internet
              connection problems
            </h3>
            <ul>
              <li>
                <a
                  href="https://www.makeuseof.com/tag/10-ways-to-improve-the-speed-of-your-current-router/"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  10 Ways to Improve Your Wi-Fi Router Speed
                </a>
              </li>
              <li>
                <a
                  href="https://www.allconnect.com/blog/boost-your-wi-fi-signal-to-get-the-most-out-of-your-high-speed-internet-connection"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  12 ways to improve Internet speed
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="row">
          <div className="col text-center pt-4 pb-4">
            <a
              className="btn btn-primary"
              href="https://chrome.google.com/webstore/detail/internet-connection-monit/hgccfdagfbilbdbkgmfdmmdfmjjoakfo"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require('public/img/chrome-logo.png')}
                height="24"
                alt=""
              />
              &nbsp;&nbsp;Download ICM for Google Chrome
            </a>
          </div>
        </div> */}

        <StandWithUkraine />
        <MadeWithLoveInUkraine />
      </div>
    </MainLayout>
  )
}
