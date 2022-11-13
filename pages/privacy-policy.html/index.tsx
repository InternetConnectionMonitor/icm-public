import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import { StandWithUkraine } from 'components'

export default function PrivacyPolicy() {
  return (
    <div className="container-fluid">
      <Head>
        <meta
          name="description"
          content="Privacy Policy for Internet Connection Monitor – Google Chrome extension for monitoring and testing Internet connectivity. Access log and send to your ISP"
        />
        <meta
          name="keywords"
          content="privacy,policy,internet,chrome extension,connection,connectivity,test,icm,internet connection monitor,monitoring,interruptions,internet down"
        />

        <title>Internet Connection Monitor – Privacy Policy</title>

        <meta
          property="og:title"
          content="Internet Connection Monitor – Privacy Policy"
        />
        <meta
          property="og:description"
          content="Privacy Policy for Internet Connection Monitor – Google Chrome extension for monitoring and testing Internet connectivity. Access log and send to your ISP"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Internet Connection Monitor" />
        <meta property="og:url" content="https://internetmon.org" />
      </Head>

      <StandWithUkraine />

      <div className="row">
        <div className="col pt-4">
          <h1>Privacy Policy – Internet Connection Monitor</h1>
          <p>
            Privacy Policy for a Google Chrome extension for monitoring Internet
            connectivity located at{' '}
            <a href="https://chrome.google.com/webstore/detail/internet-connection-monit/hgccfdagfbilbdbkgmfdmmdfmjjoakfo">
              https://chrome.google.com/webstore/detail/internet-connection-monit/hgccfdagfbilbdbkgmfdmmdfmjjoakfo
            </a>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col pt-4">
          <h3>Owner and Data Controller</h3>
          <p>
            <a href="mailto:internetmonit@gmail.com">Dmytro Shcherbyna</a>
          </p>

          <h3>Types of Data collected</h3>
          <p>
            <strong>NO DATA IS NOT COLLECTED</strong> by the Owner or 3rd party
            organizations including:
          </p>
          <ul>
            <li>Personal Data (such as name, email, phone, address)</li>
            <li>Usage Data (such as cookies, IP address, browsing history)</li>
            <li>Finger Prints</li>
          </ul>

          <p>
            Exception for{' '}
            <a
              href="https://marketingplatform.google.com/about/analytics/"
              target="_blank"
              rel="noreferrer"
            >
              Google Analytics
            </a>
            : to be able to improve The Application, the Owner uses Google
            Analytics ANONYMOUS visitor data which is strictly limited to
            getting insight about users behavior within The Application.
          </p>

          <h3>Mode and place of processing the Data</h3>
          <p>
            The Owner <strong>DOES NOT PROCESS ANY DATA</strong> and{' '}
            <strong>IS NOT PASSING IT FURTHER</strong> to any 3rd party
            ogranization or individual for such processing.
          </p>

          <p>
            Exception for{' '}
            <a
              href="https://marketingplatform.google.com/about/analytics/"
              target="_blank"
              rel="noreferrer"
            >
              Google Analytics
            </a>
            : to be able to improve The Application, the Owner uses Google
            Analytics ANONYMOUS visitor data which is strictly limited to
            getting insight about users behavior within The Application.
          </p>

          <h3>Definitions and legal references</h3>

          <h4>Personal Data (or Data)</h4>
          <p>
            Any information that directly, indirectly, or in connection with
            other information — including a personal identification number —
            allows for the identification or identifiability of a natural
            person.
          </p>

          <h4>Usage Data</h4>
          <p>
            Information collected automatically through this Application (or
            third-party services employed in this Application), which can
            include: the IP addresses or domain names of the computers utilized
            by the Users who use this Application, the URI addresses (Uniform
            Resource Identifier), the time of the request, the method utilized
            to submit the request to the server, the size of the file received
            in response, the numerical code indicating the status of the
            server's answer (successful outcome, error, etc.), the country of
            origin, the features of the browser and the operating system
            utilized by the User, the various time details per visit (e.g., the
            time spent on each page within the Application) and the details
            about the path followed within the Application with special
            reference to the sequence of pages visited, and other parameters
            about the device operating system and/or the User's IT environment.
          </p>

          <h4>User</h4>
          <p>
            The individual using this Application who, unless otherwise
            specified, coincides with the Data Subject.
          </p>

          <h4>Data Subject</h4>
          <p>The natural person to whom the Personal Data refers.</p>

          <h4>Data Processor (or Data Supervisor)</h4>
          <p>
            The natural or legal person, public authority, agency or other body
            which processes Personal Data on behalf of the Controller, as
            described in this privacy policy.
          </p>

          <h4>Data Controller (or Owner)</h4>
          <p>
            The natural or legal person, public authority, agency or other body
            which, alone or jointly with others, determines the purposes and
            means of the processing of Personal Data, including the security
            measures concerning the operation and use of this Application. The
            Data Controller, unless otherwise specified, is the Owner of this
            Application.
          </p>

          <h4>This Application</h4>
          <p>
            The means by which the Personal Data of the User is collected and
            processed.
          </p>

          <h4>Service</h4>
          <p>
            The service provided by this Application as described in the
            relative terms (if available) and on this site/application.
          </p>

          <h4>European Union (or EU)</h4>
          <p>
            Unless otherwise specified, all references made within this document
            to the European Union include all current member states to the
            European Union and the European Economic Area.
          </p>

          <h4>Legal information</h4>
          <p>
            This privacy statement has been prepared based on provisions of
            multiple legislations, including Art. 13/14 of Regulation (EU)
            2016/679 (General Data Protection Regulation).
          </p>

          <p>
            This privacy policy relates solely to this Application, if not
            stated otherwise within this document.
          </p>
        </div>
      </div>
    </div>
  )
}
