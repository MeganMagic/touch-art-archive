import { Link } from "react-router-dom";

const Logo = () => {
    const element = (
        <Link to="/">
            <div className="Logo">
                <div className="logo-shape">
                    <div className="item"></div>
                    <div className="item"></div>
                </div>
                <div className="logo-title">{`Touch\nArt\nArchive`}</div>
            </div>
        </Link>
    );
  
    return element;
  };
  
  export default Logo;
  