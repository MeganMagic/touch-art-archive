import { useSelector } from 'react-redux';
import Logo from '../components/Logo';
import { LanguageState, LanguageType, LANG_KO } from '../language'

const About = () => {
    const language = useSelector((state: LanguageState) => state.language);

    const element = 
    <div className="About__container">
        <Slide1 language={language} />
        <Slide2 language={language} />
        <Slide3 language={language} />
        <Slide4 language={language} />
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
    <div className="About__slide" id="slide-2">
        <div className="title">
        {
            language === LANG_KO ?
            "왜 <Touch Art Archive>는 만들어졌을까요?" :
            "So why is this Touch Art Archive made?"
        }
        </div>

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
                        <div>
                        {
                            language === LANG_KO ? 
                            "“저와 같은 전맹의 경우, 미술시간에 미술사를\n배울 때 회화 작품을 감상할 수 있는 방법이 없어 \n항상 고역이었습니다.”" :
                            "“For blinds like me, It felt like torture as we have\nno idea how to feel art works in art classes.”"
                        }
                        </div>
                        <div style={{fontSize: "11px", marginTop: '8px'}}>
                        {
                            language === LANG_KO ?
                            "[맹학교 졸업생 A씨와의 인터뷰 중]":
                            "[Interviewing blind school graduated student A]"
                        }
                        </div>
                    </div>
                </div>

                <div className="col-item flex flex-ai-c">
                    <img className="emoji" src={require('../data/about_2_2.png').default} />

                    <div>
                        <div>
                        {
                            language === LANG_KO ? 
                            "“미술 감상시간에 3D프린터를 활용하고 싶어도\n프린팅 가능한 파일 대부분이 영어 자료였으며,\n서양 조각에 집중되어 있어 불편함이 있었습니다.”" :
                            "“Though we want to use 3D printings in art classes, most of the printable files are english and focused only on western sculptures.”"
                        }
                        </div>
                        <div style={{fontSize: "11px", marginTop: '8px'}}>
                        {
                            language === LANG_KO ?
                            "[맹학교 교사 B선생님과의 인터뷰 중]":
                            "[Interviewing blind schol teacher B]"
                        }
                        </div>
                    </div>
                </div>

                <div className="col-item flex flex-ai-c">
                    <img className="emoji" src={require('../data/about_2_3.png').default} />

                    <div>
                        <div>
                        {
                            language === LANG_KO ? 
                            "“교과서를 활용하기는 어렵죠. 시각장애인을\n위해 미술 교과서가 따로 제작되지 않으니까요.”" :
                            "“It is hard to use textbooks as there is no art\ntextbooks especially made for blinds.”"
                        }
                        </div>
                        <div style={{fontSize: "11px", marginTop: '8px'}}>
                        {
                            language === LANG_KO ?
                            "[맹학교 교사 C선생님과의 인터뷰 중]":
                            "[Interviewing blind schol teacher C]"
                        }
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
        <div className="About__slide" id="slide-3">
            <div className="title">
            {
                language === LANG_KO ?
                "어떻게 3D 파일은 제작되나요?" :
                "And how are these 3D files made?"
            }
            </div> 
            <div className="title" style={{top: '160px', fontSize: "28px", fontWeight: 400}}>
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
    );
}

const Slide4 : React.FC<SlideProps> = ({ language }) => {
    return(
    <div className="About__slide" id="slide-4">
        <img className="title-img" src={require('../data/about_4.png').default} alt="img"/>

        <div className="content">
            <div className="quotationMark flex">
                <div>“</div>
                <div>”</div>
            </div>

            <div className="quotation" >
            {
                language === LANG_KO ?
                "제가 그림을 봤다고 말할 수는 없겠지만\n한 가지 확실한 것은, 이걸 만지며\n이 그림에 대한 질문이 계속 떠오른다는 거에요" :
                "I can't say I literarilly saw the picture. But\none thing for sure is that I keep questioning\nmyself about the picture as I touch it."
            }
            </div>

            <div className="quotationRef">
            {
                language === LANG_KO ?
                "[맹학교 졸업생 A씨와의 프로토타입 테스팅 중]" : "[Mr.A Graduate of school for the blind prototype testing]"
            }
            </div>
        </div>

        <div style={{width: "220px", height: "1px", backgroundColor : "#FFFFFF", marginTop : "93px", marginBottom: "80px"}}>
        </div>

        <div>
            <div style={{color : "#EFEFEF", textAlign:"center", marginBottom: "20px"}}>
            {
                language === LANG_KO ? '문의' : "Contact"
            }
            </div>

            <div className="flex" style={{color:"#EFEFEF", lineHeight:"30px"}}>
                <div style={{marginRight : "20px"}}>Mail<br/>Tel</div>
                <div>seasoningsijoon@gmail.com<br/>01041163426</div>
            </div>

        </div>

    </div>
    );
}