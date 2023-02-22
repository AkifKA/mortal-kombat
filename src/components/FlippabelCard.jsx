import Card from "./Card/Card";
import characterData from "../assets/data";
import { useState } from "react";
import "./FlippabelCard.css";
const FlippabelCard = () => {
  const [inputText, setInput] = useState("");

  return (
    <>
      <div className="search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for characters"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="flippabel-card-container">
        {characterData
          .filter((el) =>
            el.name.toLowerCase().includes(inputText.toLowerCase())
          )
          .map((item, index) => (
            <Card item={item} key={index} />
          ))}
      </div>
    </>
  );
};

export default FlippabelCard;
