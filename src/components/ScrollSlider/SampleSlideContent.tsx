import Logo from "../Logo";

const Sample1 = () => {
    return (
    <div className="About__slide" id="slide-1">
        <div className="title">{`<Touch Art Archive>란 무엇인가요?`}</div>

        <div className="content flex flex-ai-c">
            <Logo />
            <div className="desc">
                <span className="em"> {`<Touch Art Archive>`}</span>{`는 현재 맹학교에서 사용중인\n교과서 4종의 회화 작품 107점을 3D프린팅\n가능한 STL파일로 변환하여 보관중인 저장소입니다.`} 
            </div>
        </div>            
    </div>
    );
}

export { Sample1 }