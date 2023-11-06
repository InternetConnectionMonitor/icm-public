import Head from 'next/head';
import Link from 'next/link';

import {
  MadeWithLoveInUkraine,
  MainLayout,
  StandWithUkraine,
} from 'components';

const routerData = [
  {
    name: 'ASUS AX5700 Wi-Fi 6 Gaming Router (RT-AX86U)',
    url: 'https://amzn.to/3rGuo5R',
    imagePath: 'img/router-asus.webp',
    price: '$249.99',
  },
  {
    name: 'TP-Link AX5400 Wi-Fi 6 Router (Archer AX73)',
    url: 'https://amzn.to/3SIueGW',
    imagePath: 'img/router-ax73.jpg',
    price: '$154.99',
  },
  {
    name: 'TP-Link AX1800 Wi-Fi 6 Router',
    url: 'https://amzn.to/3CFH1V8',
    imagePath: 'img/router-ax1800.jpg',
    price: '$79.99',
  },
  {
    name: 'Google Nest Wi-Fi Router',
    url: 'https://amzn.to/3Z6DQPB',
    imagePath: 'img/router-google.jpg',
    price: '$74.99',
  },
  {
    name: 'TP-Link AX1500 Wi-Fi 6 Router',
    url: 'https://amzn.to/3T9LOng',
    imagePath: 'img/router-ax1500.jpg',
    price: '$66.98',
  },
];

export default function ThreePrimaryReasonsOfPoorInternetConnection() {
  return (
    <MainLayout>
      <div className="container">
        <Head>
          <meta
            name="description"
            content="3 primary reasons of the issues with your Internet connection (connectivity, stability, speed). Learn how to fix them."
          />
          <meta
            name="keywords"
            content="internet,chrome extension,connection,connectivity,test,icm,internet connection monitor,log,logging,monitoring,interruptions,internet down,latency,ping,wi-fi,wi fi"
          />
          <title>3 main reasons of poor Internet connection</title>
          <meta
            property="og:title"
            content="3 main reasons of poor Internet connection"
          />
          <meta
            property="og:description"
            content="3 primary reasons of the issues with your Internet connection (connectivity, stability, speed). Learn how to fix them."
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Internet Connection Monitor" />
          <meta
            property="og:url"
            content="https://internetmon.org/3-primary-reasons-of-poor-internet-connection.html"
          />
        </Head>

        <div className="row">
          <div className="col text-center pt-4 pb-3">
            <h1>3 reasons of low-quality Internet connection</h1>
            <div>
              And how to fix them. From the creator of{' '}
              <Link href="/">Internet Connection Monitor</Link>
            </div>

            <div className="pt-4 connection-problems-img-container text-center mx-auto">
              <img
                src={require('public/img/ICM-top-3-internet-connection-problems.png')}
                alt="Top-3 Internet connection problems"
                className="rounded shadow-sm img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col pt-2 pb-4">
            <div>
              <h2 className="mt-4">Reason 1: Slow computer or phone</h2>
              <p>
                Quite often the issues with Internet connection are caused by
                using a very old computer that cannot handle even basic tasks.
                The older the computer &ndash; the older are the hardware and
                the OS. Modern websites and software rely on the latest features
                available in browsers and software. If the computer is too old,
                it may not be able to handle the load your perception of the
                Internet speed will be that it's dramatically slow, however, the
                actual speed may be fine and it's just the computer which causes
                everything to last forever. Also, if your PC is a decent
                machine, check it for viruses and malware.
              </p>
              <p className="badge rounded-pill bg-warning text-dark">
                Common issues
              </p>
              <ul>
                <li>Delayed response of the interface in general</li>
                <li>Frequent system error messages</li>
                <li>Insufficient memory with system hangs or restarts</li>
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
                  Clean it up from garbage and viruses. Google the tutorials or
                  go to a computer repair shop for assistance
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mt-4">Reason 2: Low quality or old router</h2>
              <p>
                Apart from a modern computer, your router should not be a $15
                box of microchips. A lot of issues with Wi-Fi are either related
                to the low performance of the router's wireless subsystem in
                crowded areas or the weak signal strength. By crowded I mean
                when there are multiple routers nearby that interfere with the
                signal of your own router. You'd want to have a modern router
                that at least supports Wi-Fi 5. If you're not tech savvy, just
                pick a decent $100-$150 TP-Link or Asus.
              </p>
              <p className="badge rounded-pill bg-warning text-dark">
                Common issues
              </p>
              <ul>
                <li>Wi-Fi disconnects periodically</li>
                <li>Wi-Fi connection quality becomes worse over time</li>
                <li>
                  Wi-Fi speed is very low even in a close proximity to the
                  router
                </li>
                <li>Downloads interruption</li>
                <li>The OS says the Wi-Fi connection isn't secure</li>
              </ul>
              <p className="badge rounded-pill bg-success">What to do?</p>
              <ul>
                <li>⭐️ Buy a new router</li>
                <li>Upgrade router's firmware</li>
                <li>Reposition router</li>
                <li>Adjust Wi-Fi settings such as Wi-Fi channel</li>
                <li>Restart router frequently</li>
              </ul>
              <h4 className="mb-3">Top 5 router options to buy in 2023</h4>
              <p>
                <small className="text-muted">
                  *Click on the links below to check out the actual prices
                </small>
              </p>

              <ol className="mt-4">
                {routerData.map((router, index) => (
                  <li className="pb-3" key={index}>
                    <a
                      href={router.url}
                      target="_blank"
                      rel="nofollow noreferrer noopener"
                    >
                      <img
                        src={router.imagePath}
                        style={{ maxWidth: '128px' }}
                        className="ms-3 me-3"
                      />
                      {router.name}
                    </a>{' '}
                    &ndash; {router.price}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="mt-4">
                Reason 3: ISP (Internet Service Provider) issue
              </h2>
              <p>
                The hardest to troubleshoot and the most annoying one. But
                before you upgrade all of your hardware determine the side that
                has the problem – ISP or your own network or computer. Check if
                there are connection dropouts using{' '}
                <a
                  href="https://chrome.google.com/webstore/detail/internet-connection-monit/hgccfdagfbilbdbkgmfdmmdfmjjoakfo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Internet Connection Monitor
                </a>
                .
              </p>
              <p className="badge rounded-pill bg-warning text-dark">
                Common issues
              </p>
              <ul>
                <li>Intermittent connection issues</li>
                <li>Unstable connection speed</li>
                <li>Video freezes</li>
                <li>Web pages load interruption</li>
                <li>File downloads interruption</li>
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
                  or similar software on your laptop close to the router to
                  diagnose the connection drops and ensure it's actually an ISP
                  issue
                </li>
                <li>
                  ⭐️ Ask your provider support crew to help with the connection
                  stability, providing them a log of disconnects that can be
                  logged by{' '}
                  <a
                    href="https://chrome.google.com/webstore/detail/internet-connection-monit/hgccfdagfbilbdbkgmfdmmdfmjjoakfo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Internet Connection Monitor (ICM)
                  </a>
                  . It might be a waste of time, since the support may just
                  suggest you some crappy advice like rebooting your computer or
                  something similar – be ready to dedicate some time for
                  interacting with their crew
                </li>
                <li>
                  Change your ISP. You may just pick a more stable service
                  provider and fix the issues
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col pt-2 pb-4">
            <div>
              <h2 className="mt-4">Watch a video overview</h2>

              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/wvcPyteeSjw"
                title="3 primary reasons of low-quality Internet connection and how to fix them"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
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
              <li>
                <Link href="/internet-connection-improvements.html">
                  Improve your Internet connection – a previous version of this
                  article
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <StandWithUkraine />
        <MadeWithLoveInUkraine />
      </div>
    </MainLayout>
  );
}
