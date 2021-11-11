import { createStore } from "redux";

// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
export const LANG_KO = 'language/KOREAN' as const;
export const LANG_EN = 'language/ENGLISH' as const;


// 액션 생성 함수를 "선언"합니다.
export const selectKorean = () => {
    return {
        type : LANG_KO
    }
}
export const selectEnglish = () => {
    return {
        type : LANG_EN
    }
}

// 모든 액션 객체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof ____>는 특정 함수의 반환값을 추론해줍니다.
// 상단부에서 액션타입을 선언할 때 as const를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
export type LanguageType = typeof LANG_KO | typeof LANG_EN;

// 이 리덕스 모듈에서 관리할 상태의 타입을 선업합니다.
export type LanguageState = {
    language : LanguageType
}

type LanguageAction = 
    | ReturnType<typeof selectKorean>
    | ReturnType<typeof selectEnglish>;


// 초기 상태를 선언합니다.
const initialState: LanguageState = {
    language : LANG_KO
}

// 리듀서를 작성합니다.
// 리듀서에서는 state와 함수의 반환값이 일치하도록 작성하세요.
// 액션에서는 우리가 방금 만든 LangugaeAction을 타입으로 설정합니다.
function reducer (
    state : LanguageState = initialState,
    action : LanguageAction
) : LanguageState {
    switch (action.type) {
        case LANG_KO :
            if(state.language !== LANG_KO ) 
                return { language : LANG_KO };
            else return state;

        case LANG_EN : 
            if(state.language !== LANG_EN ) 
                return { language : LANG_EN };
            else return state;

        default :
            return state;
    }
}

export const languageStore = createStore(reducer);

languageStore.subscribe(() => console.log(languageStore.getState()))