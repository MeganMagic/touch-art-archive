import React from 'react';
import { Link } from 'react-router-dom';

const Main : React.FC = () => {
    
    const element : JSX.Element = (
        <div className="Main">
            <div className="Main__archive">
            <div className="title font-global">Archive</div>

            <Link to="/archive/korean">
                <div className="archiveBtn korean font-global">Korean</div>
            </Link>

            <Link to="/archive/western">
                <div className="archiveBtn western font-global">Western</div>
            </Link>
            </div>

            <div className="Main__about">
            <div className="font-global">about</div>
            </div>
        </div>
    );

    return element;
}

export default Main