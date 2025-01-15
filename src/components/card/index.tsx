import React from "react";
import "./cardComponent.css"; // Assuming you're using CSS for styling
import { ReactComponent as BackgroundImg } from "../../assets/shapes/Ellipse 10.svg";

type CardComponentProps = {
  value: number;
  unit: string;
  title: string;
  backgroundUrl: string;
};

const CardComponent: React.FC<CardComponentProps> = ({
  value,
  unit,
  title,
  backgroundUrl,
}) => {
  return (
    <div 
    className="card"
    style={{
        '--background-url': `url(${backgroundUrl})`,
      } as React.CSSProperties}
      >
      <div className="value">{value - 1}+</div>
      <div className="words">
        <div className="unit">{unit}</div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default CardComponent;
