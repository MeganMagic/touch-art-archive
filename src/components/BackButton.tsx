import { useHistory } from "react-router-dom";

const BackButton = () => {
  const history = useHistory();

  const handleHistoryBack = () => {
    history.goBack();
  };

  return (
    <button className="button__back" onClick={handleHistoryBack}>
      <div className="arrowContainer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
        </svg>
      </div>
    </button>
  );
};

export default BackButton;
