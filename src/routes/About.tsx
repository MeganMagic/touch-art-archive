import { useSelector } from 'react-redux';

import MoveTopButton from '../components/MoveTopButton';
import Logo from '../components/Logo';
import { LanguageState, LanguageType, LANG_KO } from '../language'
import { useEffect, useState } from 'react';

const About = () => {
    const language = useSelector((state: LanguageState) => state.language);
    const [ index, setIndex ] = useState<number>(1);

    const handleIndex = ( targetIndex : number ) => {
        // if target is under 1,
        if( targetIndex <= 0 ) return;
        // if target is over 4,
        if( targetIndex > 4) return;

        setIndex(targetIndex);
    }

    useEffect(() => {
        // when index is updated,
        // move scroll
        console.log(index);
        const target = document.getElementById(`slide-${index}`);
        if(target) {
            console.log(target.offsetTop);
            window.scrollTo({ top : target.offsetTop, left: 0, behavior : 'smooth'});
        }
    }, [index])

    const element = 
    <div className="About__container">
        <div className="About__controller">
            <button className="top" onClick={() => handleIndex(index - 1)}>prev</button>
            <button className="bottom" onClick={() => handleIndex(index + 1)}>next</button>
        </div>

        <Slide1 language={language} />

    </div>;

    return element;
}

export default About;

type SlideProps = {
    language : LanguageType;
}

const Slide1 : React.FC<SlideProps> = ({ language }) => {
    return(
    <div className="About__slide" id="slide-1">
        <div className="title">
        {
            language === LANG_KO ?
            "<Touch Art Archive>란 무엇인가요?" :
            "What is <Touch Art Archive>?"
        }
        </div>

        <div className="content flex flex-ai-c">
            <Logo />
            <div className="desc">
            <span className="em"> {`<Touch Art Archive>`}</span>
            {
                language === LANG_KO ?
                `는 현재 맹학교에서 사용중인\n
                교과서 4종의 회화 작품 107점을 3D프린팅\n
                가능한 STL파일로 변환하여 보관중인 저장소입니다.`
                :
                ` is the Archive used in school \n
                for the blind which transfers 4 textbook artworks \n
                to 107 3D printing STL style works. `
            } 
            </div>
        </div>            
    </div>
    );
}

const Slide2 : React.FC<SlideProps> = ({ language }) => {
    return(
    <div className="scrollableContainer">
    <div className="About__slide" id="slide-2">
        <div className="title">
        {
            language === LANG_KO ?
            "왜 <Touch Art Archive>는 만들어졌을까요?" :
            "So why is this Touch Art Archive made?"
        }
        </div>

        <div className="h-100p flex flex-ai-c">
        <div className="content flex flex-ai-c">
            <div className="col col-1 flex flex-ai-c" style={{fontSize : "22px", lineHeight:"31px", fontWeight: 700}}>
            {
                language === LANG_KO ?
                "맹학교의 미술 수업,\n다음과 같은\n불편함이 있었습니다.":
                "Because, There has\nbeen problems in\nschool for the blind. "
            }
            </div>

            <div className="col col-2 flex flex-ai-c">
                <svg width="221" height="398" viewBox="0 0 221 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M220 1L1 199L220 397" stroke="#DCDCDC"/>
                    <path d="M1 199H220" stroke="#DCDCDC"/>
                </svg>
            </div>

            <div className="col col-3">
                <div className="col-item flex flex-ai-c">
                    <img className="emoji" src={require('../data/about_2_1.png').default} />

                    <div>
                        {
                            language === LANG_KO ? 
                            <p>
                                “저와 같은 <em>전맹</em>의 경우, <em>미술시간</em>에 미술사를<br/>배울 때 <em>회화 작품</em>을 <em>감상</em>할 수 있는 방법이 없어<br/>항상 고역이었습니다.”
                            </p>
                            :
                            <p>
                                “For <em>blinds</em> like me, It felt like torture as we have<br/>no idea how to <em>feel art works</em> in <em>art classes</em>.”
                            </p>
                        }
                        {
                            language === LANG_KO ?
                            <p className="caption">[맹학교 졸업생 A씨와의 인터뷰 중]</p>:
                            <p className="caption">[Interviewing blind school graduated student A]</p>
                        }
                    </div>
                </div>

                <div className="col-item flex flex-ai-c">
                    <img className="emoji" src={require('../data/about_2_2.png').default} />

                    <div>
                        {
                            language === LANG_KO ? 
                            <p>
                                “미술 감상시간에 <em>3D프린터</em>를 활용하고 싶어도<br/>프린팅 가능한 파일 대부분이 영어 자료였으며,<br/>서양 조각에 집중되어 있어 <em>불편함</em>이 있었습니다.”
                            </p> 
                            :
                            <p>
                                “Though we want to use <em>3D printings</em> in art<br/>classes, most of the printable files are english<br/>and focused only on western sculptures.”
                            </p>
                        }

                        {
                            language === LANG_KO ?
                            <p className="caption">[맹학교 교사 B선생님과의 인터뷰 중]</p>
                            :
                            <p className="caption">[Interviewing blind schol teacher B]</p>
                        }
                    </div>
                </div>

                <div className="col-item flex flex-ai-c">
                    <img className="emoji" src={require('../data/about_2_3.png').default} />

                    <div>
                        {
                            language === LANG_KO ? 
                            <p>
                                “교과서를 활용하기는 어렵죠. <em>시각장애인</em>을<br/>위해 <em>미술 교과서</em>가 따로 <em>제작되지 않으니까요</em>.”
                            </p>
                            :
                            <p>
                                “It is hard to use <em>textbooks</em> as there is no art\ntextbooks especially made for <em>blinds</em>.”
                            </p>
                        }
                        {
                            language === LANG_KO ?
                            <p className="caption">[맹학교 교사 C선생님과의 인터뷰 중]</p>:
                            <p className="caption">[Interviewing blind schol teacher C]</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    );
}

const Slide3 : React.FC<SlideProps> = ({language}) => {
    return(
    <div className="scrollableContainer">
        <div className="About__slide" id="slide-3">
            <div className="title">
            {
                language === LANG_KO ?
                "어떻게 3D 파일은 제작되나요?" :
                "And how are these 3D files made?"
            }
            </div> 
            <div className="title sub">
            {
                language === LANG_KO ?
                "다음 세 절차를 거쳐 제작됩니다." :
                "The files are made through three procedures."
            }
            </div>

            <div className="content flex flex-ai-c">
            {
                language === LANG_KO ?
                <img className="process" src={require('../data/about_3_kor.png').default} /> :
                <img className="process" src={require('../data/about_3_eng.png').default} />
            }
            </div>
        </div>
    </div>
    );
}

const Slide4 : React.FC<SlideProps> = ({ language }) => {
    return(
    <div className="scrollableContainer">
    <div className="About__slide" id="slide-4">
        <img className="title-img" src={require('../data/about_4.png').default} alt="img"/>

        <div className="content">
            <div className="quotationMark flex">
                <div>“</div>
                <div>”</div>
            </div>

            {
                language === LANG_KO ?
                <p className="quotation">
                    제가 그림을 봤다고 말할 수는 없겠지만<br/>한 가지 확실한 것은, 이걸 만지며<br/>이 그림에 대한 <em>질문</em>이 계속 떠오른다는 거에요
                </p>
                :
                <p className="quotation">
                    I can't say I literarilly saw the picture. But<br/>one thing for sure is that I keep <em>questioning</em><br/>myself about the picture as I touch it.
                </p>
            }

            {
                language === LANG_KO ?
                <p className="caption">[맹학교 졸업생 A씨와의 프로토타입 테스팅 중]</p> 
                : 
                <p className="caption">[Mr.A Graduate of school for the blind prototype testing]</p>
            }
        </div>

        <div className="divider"></div>

        <div style={{fontSize : "22px", lineHeight : "31px", color : "#FFFFFF", fontWeight: 300}}>
            <div style={{textAlign:"center", marginBottom: "20px", fontWeight: 600}}>
            {
                language === LANG_KO ? '문의' : "Contact"
            }
            </div>

            <div className="flex">
                <div style={{marginRight : "40px", textAlign: "right"}}>Mail<br/>Tel</div>
                <div>seasoningsijoon@gmail.com<br/>01041163426</div>
            </div>

        </div>

        <MoveTopButton />

    </div>
    </div>
    );
}