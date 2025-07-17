import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function MyApp() {
  return (
    <>
      <Head>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" integrity="sha512-pap6IIBqfN2rMN6WhDdWc6yfqJG1Wix4Vt0gPkA8OnT4avY5xxTWB2tSOMcYc1wsmnM7Jo6OJfFwja95g4UsWg==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>
      </Head>
      <nav>
        <div className="nav-left">
          <Link href="/">home</Link>
          <Link href="/movie">movie</Link>
          <Link href="/tv">tv</Link>
          <Link href="/anime">anime</Link>
        </div>
        <div className="nav-mid">
          <Link href="/">solarstream</Link>
        </div>
        <div className="nav-right">
          <Link href="https://github.com/Neetify7/solarstream" target="_blank"><i className="fa-brands fa-github fa-lg"></i></Link>
        </div>
      </nav>
      <script src="https://kit.fontawesome.com/9cc56a0cf2.js" crossOrigin="anonymous"></script>
    </>
  );
}