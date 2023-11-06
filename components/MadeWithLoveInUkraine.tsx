import { NextPage } from 'next';

const MadeWithLoveInUkraine: NextPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center pt-4 pb-4">
          Made with ❤️ in 🇺🇦
          <br />
          &copy;{' '}
          <a href="mailto:internetmonit@gmail.com">
            Internet Connection Monitor
          </a>{' '}
          2014-2023
        </div>
      </div>
    </div>
  );
};

export default MadeWithLoveInUkraine;
