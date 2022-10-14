import "./mapPage.css";
import Adjust from "../../assets/icons/adjust.png";
import Expand from "../../assets/icons/expand.png";
import Eye from "../../assets/icons/eye.png";
import Off from "../../assets/icons/on-off-button.png";

function MapPage() {
  return (
    <div id="Map-page">
      <div className="Navbar">
        <ul>
          <li>
            <a href="" className="Start-simulation">
              Start simulation
            </a>
          </li>
          <li>
            <a href="" className="Data-analytics">
              Data Analytics
            </a>
          </li>
        </ul>
        <div className="footerIcon-Container">
          <div className="Icon">
            <img className="Icon-img" src={Adjust} alt="Adjust" />
          </div>
          <div className="Icon">
            <img className="Icon-img" src={Expand} alt="Adjust" />
          </div>
          <div className="Icon">
            <img className="Icon-img" src={Eye} alt="Adjust" />
          </div>
          <div className="Icon">
            <img className="Icon-img" src={Off} alt="Adjust" />
          </div>
        </div>
      </div>
      <div className="Map-Container">
        <div className="Map-navbar"></div>
        <div className="Map">
          <iframe
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            height="100%"
            width="100%"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-8.547363281250002%2C39.7240885773337%2C5.383300781250001%2C53.81362579235237&amp;layer=mapnik"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MapPage;
