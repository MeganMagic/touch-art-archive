import { useSelector, useDispatch } from 'react-redux';
import { LanguageState, selectEnglish, selectKorean } from '../language';

const LanguageButton = () => {
    const selector = useSelector((state : LanguageState) => state.language)
    const dispatch = useDispatch()
    const element = (
    <div className="LanguageButton">
        <div>language</div>
        <button className="button__language" onClick={() => dispatch(selectKorean())}>
            KO
        </button>
        <button className="button__language" onClick={() => dispatch(selectEnglish())}>
            EN
        </button>
    </div>
    );
    return element
}

export default LanguageButton;