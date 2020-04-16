import React, { Component } from "react";
import ErrorIndicator from "../error-boundary";
import { Link } from "react-router-dom";
import "./profile.css";
import Spinner from "../spinner";
import { Breadcrumb } from "react-bootstrap";

const ProfileBreadcrumbs = ({ modelName, itemName }) => {
  return (
    <Breadcrumb as="div">
      <li className="breadcrumb-item">
        <Link to={"/"}>home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to={`/${modelName}/page/1`}>{modelName}</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        <span className="active">{itemName}</span>
      </li>
    </Breadcrumb>
  );
};

export default class Profile extends Component {
  state = {
    item: null,
    image: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updateItem();
  }

  updateItem() {
    const { slug, modelName, getData } = this.props;

    getData(slug)
      .then((item) => {
        this.setState({
          item,
          image: `/assets/images/${modelName}/${item.image}`,
          loading: false,
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false,
        });
      });
  }

  render() {
    const { image, item, loading, error } = this.state;
    const { modelName } = this.props;

    if (loading) {
      return (
        <div className="custom-width-container">
          <ProfileBreadcrumbs modelName={modelName} />
          <Spinner />
        </div>
      );
    }
    if (error) {
      return (
        <div className="custom-width-container">
          <ProfileBreadcrumbs modelName={modelName} />
          <ErrorIndicator />
        </div>
      );
    }

    return (
      <div className="custom-width-container">
        <ProfileBreadcrumbs itemName={item.name} modelName={modelName} />

        <div className="profile-card row">
          <div className="col-md-4 col-sm-12 profile-avatar">
            <img className="avatar" src={image} alt={image} />
          </div>
          <div className="col-md-8 col-sm-12 profile-info">
            <h2>{item.name}</h2>
            <br />
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </div>
        </div>
      </div>
    );
  }
}
