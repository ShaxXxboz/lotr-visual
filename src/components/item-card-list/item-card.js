import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemCard = ({ name, image, modelName, slug }) => {
  const link = `/${modelName}/${slug}`;
  const imageLink = `/assets/images/${modelName}/${image}`;

  return (
    <Card className="list-item col">
      <Link
        to={{
          pathname: link,
        }}
      >
        <div className="item-card-content">
          <Card.Img className="card-avatar" variant="top" src={imageLink} />
          <Card.Body>
            <Card.Text>{name}</Card.Text>
          </Card.Body>
        </div>
      </Link>
    </Card>
  );
};

export default ItemCard;
