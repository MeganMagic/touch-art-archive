import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const PageNotFound : React.FC = () => {
    const navigate = useNavigate();

    const moveToHome = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <div className="PageNotFound" >
            <Helmet>
                <title>404 : Page not found</title>
            </Helmet>
            <div className="wrapper">
                <div className="subTitle">404 Error : Page Not Found</div>
                <div className="title">페이지가 없습니다</div>

                <button className="toHome" onClick={moveToHome}>홈 화면으로 돌아가기</button>
            </div>            
        </div>
    )
};

export default PageNotFound;