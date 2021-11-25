import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LanguageState, LANG_KO } from '../language'

const Main : React.FC = () => {
    const language = useSelector((state: LanguageState) => state.language);

    const element : JSX.Element = (
        <div className="Main">
            <div className="Main__archive">
            <div className="title font-global">
                {
                    language === LANG_KO ? 
                    '아카이브' : 'Archive'
                }
            </div>

            <Link to="/archive/korean">
                <div className="archiveBtn korean Main__button">
                    <div className='font-global'>
                    {
                        language === LANG_KO ?
                        '한국' : 'Korean'
                    }
                    </div>
                </div>
            </Link>

            <Link to="/archive/western">
                <div className="archiveBtn western Main__button">
                    <div className='font-global'>
                    {
                        language === LANG_KO ?
                        '서양' : 'Western'
                    }
                    </div>
                </div>
            </Link>
            </div>

            <div className="Main__about Main__button" >
                <div className="font-global">
                    {
                        language === LANG_KO ?
                        '안녕하세요' : 'About'
                    }
                </div>
            </div>

            <div className="Main__question Main__button">
                <div className="font-global">
                    ?
                </div>
            </div>
        </div>
    );

    return element;
}

export default Main