import Link from 'next/link';

export default function MyApp() {
  return (
    <>
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
          <Link href="https://github.com/Neetify7/solarstream" target="_blank"><img src="/github-mark-white.svg"/></Link>
        </div>
      </nav>
    </>
  );
}