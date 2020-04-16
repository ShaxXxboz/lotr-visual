import React, { Component } from "react";

const withPagination = (WrappedComponent) => {
  return class extends Component {
    state = {
      currentPage: 1,
      itemsPerPage: 10,
    };

    componentDidMount() {
      this.setState({
        currentPage: parseInt(this.props.page, 10),
      });
    }

    paginate = (pageNumber) => {
      this.setState({
        currentPage: pageNumber,
      });
    };

    paginateItems(itemList, currentPage, itemsPerPage) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirsItem = indexOfLastItem - itemsPerPage;
      const currentItems = itemList.slice(indexOfFirsItem, indexOfLastItem);

      return currentItems;
    }

    render() {
      const { currentPage, itemsPerPage } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          paginate={this.paginate}
          paginateItems={this.paginateItems}
        />
      );
    }
  };
};

export default withPagination;
