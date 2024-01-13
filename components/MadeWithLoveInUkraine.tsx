import { NextPage } from 'next';
import Link from 'next/link';

const MadeWithLoveInUkraine: NextPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center pt-4 pb-4">
          Made with ❤️ in 🇺🇦
          <br />
          &copy; <Link href="/">Internet Connection Monitor</Link> 2014-2024{' '}
          &bull; <Link href="https://www.patreon.com/internetconnectionmonitor/membership">Donate</Link>{' '}
          &bull; <Link href="mailto:internetmonit@gmail.com">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default MadeWithLoveInUkraine;
