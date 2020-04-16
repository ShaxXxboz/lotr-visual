import React from "react";
import { Card } from "react-bootstrap";

const CategoryCard = ({ height, cover, title }) => {
  return (
    <Card className="category-card" style={{ height: height }}>
      <Card.Img src={cover} alt="Card image" className="cover" />
      <Card.ImgOverlay>
        <span className="category-title">{title}</span>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CategoryCard;
