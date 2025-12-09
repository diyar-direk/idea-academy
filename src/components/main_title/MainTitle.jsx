import "./main-title.css";
const MainTitle = ({ main, secondry }) => {
  return (
    <div className="main-title">
      <h1> {main} </h1>
      <p>{secondry}</p>
    </div>
  );
};

export default MainTitle;
