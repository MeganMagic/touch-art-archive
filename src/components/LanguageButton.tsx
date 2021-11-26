import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { LanguageState, LANG_KO, selectEnglish, selectKorean } from '../language';

const LanguageButton = () => {
    const location = useLocation();
    const language = useSelector((state : LanguageState) => state.language)
    const dispatch = useDispatch()

    if(location.pathname && location.pathname === "/about") return <div></div>

    return language === LANG_KO ? 
        <button className="LanguageButton" onClick={() => dispatch(selectEnglish())}>
            <div>Eng</div>
        </button> : 
        <button className="LanguageButton" onClick={() => dispatch(selectKorean())}>
            <div>한글</div>
        </button>
    ;
}

export default LanguageButton;