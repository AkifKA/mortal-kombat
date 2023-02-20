import "./FlippabelCard.css";
import Card from "./Card/Card";
import characterData from "../assets/data";
const FlippabelCard = () => {
  return (
    <div className="flippabel-card-container">
      {characterData.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};

export default FlippabelCard;
