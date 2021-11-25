import { useSelector, useDispatch } from 'react-redux';
import { LanguageState, LANG_KO, selectEnglish, selectKorean } from '../language';

const LanguageButton = () => {
    const language = useSelector((state : LanguageState) => state.language)
    const dispatch = useDispatch()

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