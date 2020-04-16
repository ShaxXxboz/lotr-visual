import React from "react";
import CategoryCard from "./category-card";
import { Link } from "react-router-dom";

import "./category.css";

const Category = () => {
  return (
    <div className="category custom-width-container">
      <div className="row">
        <div className="col-md-6">
          <Link to="/characters/page/1">
            <CategoryCard
              height="45vh"
              cover="/assets/images/categories/characters.jpg"
              title="Characters"
            />
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/races/page/1">
            <CategoryCard
              height="45vh"
              cover="/assets/images/categories/races.jpg"
              title="Races"
            />
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/books/page/1">
            <CategoryCard
              height="45vh"
              cover="/assets/images/categories/books.jpg"
              title="Books"
            />
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="movies/page/1">
            <CategoryCard
              height="45vh"
              cover="/assets/images/categories/movies.jpg"
              title="Movies"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
