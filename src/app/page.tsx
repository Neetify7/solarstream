export default function MyApp() {
  return (
    <>
      <nav>
        <div className="nav-left">
          <a href="/">home</a>
          <a href="/movie">movie</a>
          <a href="/tv">tv</a>
          <a href="/anime">anime</a>
        </div>
        <div className="nav-mid">
          <a href="/">solarstream</a>
        </div>
        <div className="nav-right">
          <a href="https://github.com/Neetify7/solarstream" target="_blank"><img src="/github-mark-white.svg"/></a>
        </div>
      </nav>
    </>
  );
}