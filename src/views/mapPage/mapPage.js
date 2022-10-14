import "./mapPage.css";

function MapPage() {
  return (
    <div id="Map-page">
      <div className="Navbar">
        <ul>
          <li>
            <a href="">Page d'accueil</a>
          </li>
          <li>
            <a href="">Page d'accueil</a>
          </li>
          <li>
            <a href="">Page d'accueil</a>
          </li>
          <li>
            <a href="">Page d'accueil</a>
          </li>
        </ul>
      </div>
      <div className="Map-Container">
        <div className="Map-navbar"></div>
        <div className="Map">
          <iframe
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-8.547363281250002%2C39.7240885773337%2C5.383300781250001%2C53.81362579235237&amp;layer=mapnik"
          ></iframe>
          <br />
          <small>
            <a href="https://www.openstreetmap.org/#map=6/47.234/-1.582">
              View Larger Map
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default MapPage;
