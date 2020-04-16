import React, { Component } from "react";
import Header from "../header";
import Category from "../category";
import Footer from "../footer";
import ItemCardList from "../item-card-list";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  CharacterProfile,
  BookProfile,
  RaceProfile,
  MovieProfile,
} from "../wrappers/";
import ApiService from "../../services/api-service";
import "./app.css";
import ErrorIndicator from "../error-indicator/error-indicator";
import Sparks from "../sparks";

export default class App extends Component {
  apiService = new ApiService();

  render() {
    return (
      <Router>
        <>
          <Sparks />
          <div
            id="wrap"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Header />
            <div className="container-fluid content">
              <Switch>
                <Route path="/" exact render={() => <Category />} />
                <Route
                  path="/characters/page/:page"
                  exact
                  component={({ match }) => (
                    <ItemCardList
                      getData={this.apiService.getAllCharacters}
                      modelName="characters"
                      page={match.params.page}
                    />
                  )}
                />
                <Route
                  path="/characters/:slug"
                  render={({ match }) => {
                    return (
                      <CharacterProfile
                        slug={match.params.slug}
                        getData={this.apiService.getCharacter}
                      />
                    );
                  }}
                />
                <Route
                  path="/books/page/:page"
                  exact
                  component={({ match }) => (
                    <ItemCardList
                      getData={this.apiService.getAllBooks}
                      modelName="books"
                      page={match.params.page}
                    />
                  )}
                />
                <Route
                  path="/books/:slug"
                  render={({ match }) => {
                    return (
                      <BookProfile
                        slug={match.params.slug}
                        getData={this.apiService.getBook}
                      />
                    );
                  }}
                />
                <Route
                  path="/races/page/:page"
                  exact
                  component={({ match }) => (
                    <ItemCardList
                      getData={this.apiService.getAllRaces}
                      modelName="races"
                      page={match.params.page}
                    />
                  )}
                />
                <Route
                  path="/races/:slug"
                  render={({ match }) => {
                    return (
                      <RaceProfile
                        slug={match.params.slug}
                        getData={this.apiService.getRace}
                      />
                    );
                  }}
                />
                <Route
                  path="/movies/page/:page"
                  exact
                  component={({ match }) => (
                    <ItemCardList
                      getData={this.apiService.getAllMovies}
                      modelName="movies"
                      page={match.params.page}
                    />
                  )}
                />
                <Route
                  path="/movies/:slug"
                  render={({ match }) => {
                    return (
                      <MovieProfile
                        slug={match.params.slug}
                        getData={this.apiService.getMovie}
                      />
                    );
                  }}
                />
                <Route to="/404" render={() => <ErrorIndicator />} />
              </Switch>
            </div>
            <Footer />
          </div>
        </>
      </Router>
    );
  }
}
