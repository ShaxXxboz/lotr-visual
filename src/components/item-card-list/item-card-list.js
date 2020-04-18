import React, { Component } from "react";
import Spinner from "../spinner";
import ItemCard from "./item-card";
import ErrorBoundary from "../error-boundary";
import { Breadcrumb } from "react-bootstrap";
import "./item-card-list.css";
import ErrorIndicator from "../error-indicator/error-indicator";
import { Link } from "react-router-dom";
import Pagination from "../pagination";
import { withPagination } from "../hocs";

const ListBreadcrumbs = ({ modelName }) => {
  return (
    <Breadcrumb as="div">
      <li className="breadcrumb-item">
        <Link to={"/"}>home</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        <span className="active">{modelName}</span>
      </li>
    </Breadcrumb>
  );
};

class ItemCardList extends Component {
  state = {
    itemList: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList,
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

  renderItems(itemList) {
    const { modelName, paginateItems, currentPage, itemsPerPage } = this.props;
    const paginatedItems = paginateItems(itemList, currentPage, itemsPerPage);

    return paginatedItems.map(({ _id, name, image, slug }) => {
      return (
        <ItemCard
          key={_id}
          name={name}
          image={image}
          modelName={modelName}
          slug={slug}
        />
      );
    });
  }

  render() {
    const { itemList, loading, error } = this.state;
    const { modelName, itemsPerPage, currentPage, paginate } = this.props;

    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const loader = loading ? <Spinner /> : null;
    const items = hasData ? this.renderItems(itemList) : null;
    const pagination = hasData ? (
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={itemList.length}
        paginate={paginate}
        currentPage={currentPage}
        modelName={modelName}
      />
    ) : null;

    return (
      <div className="card-list custom-width-container">
        <div className="row row-cols-md-2 row-cols-1">
          <div className="col breadcrumb-block">
            <ListBreadcrumbs modelName={modelName} />
          </div>
          <div className="col pagination-block">{pagination}</div>
        </div>
        {loader}
        {errorMessage}
        <div className="row row-cols-md-5 row-cols-sm-2 row-cols-2">
          <ErrorBoundary>{items}</ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default withPagination(ItemCardList);
