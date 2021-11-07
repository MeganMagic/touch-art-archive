const MoveTopButton = () => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    };
  
    return (
      <button className="button__moveToTop" onClick={handleScrollToTop}>
        <div className="arrowContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"></path>
          </svg>
        </div>
      </button>
    );
  };
  
export default MoveTopButton;
  