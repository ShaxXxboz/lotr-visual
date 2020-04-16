import React from "react";
import Record from "../record";
import Profile from "../profile";
import ErrorBoundary from "../error-boundary";

const CharacterProfile = ({ slug, getData }) => {
  return (
    <ErrorBoundary>
      <Profile slug={slug} modelName="characters" getData={getData}>
        <Record label="Titles" field="titles" />
        <Record label="Actor" field="actor" />
        <Record label="Hair color" field="hairColor" />
        <Record label="Culture" field="culture" />
        <Record label="Weapons" field="weapons" />
      </Profile>
    </ErrorBoundary>
  );
};

const BookProfile = ({ slug, getData }) => {
  return (
    <ErrorBoundary>
      <Profile slug={slug} modelName="books" getData={getData}>
        <Record label="Author" field="author" />
        <Record label="Genre" field="genre" />
        <Record label="Language" field="language" />
        <Record label="Country" field="country" />
        <Record label="Publication date" field="publicationDate" />
      </Profile>
    </ErrorBoundary>
  );
};

const MovieProfile = ({ slug, getData }) => {
  return (
    <ErrorBoundary>
      <Profile slug={slug} modelName="movies" getData={getData}>
        <Record label="Director" field="director" />
        <Record label="Distributor" field="distributedBy" />
        <Record label="Music by" field="musicBy" />
        <Record label="Language" field="language" />
        <Record label="Budget" field="budget" />
      </Profile>
    </ErrorBoundary>
  );
};

const RaceProfile = ({ slug, getData }) => {
  return (
    <ErrorBoundary>
      <Profile slug={slug} modelName="races" getData={getData}>
        <Record label="Dominions" field="dominions" />
        <Record label="Languages" field="languages" />
        <Record label="Lifespan" field="lifespan" />
        <Record label="Hair color" field="hairColor" />
        <Record label="Skin color" field="skinColor" />
        <Record label="Distinctions" field="distinctions" />
        <Record label="Height" field="height" />
      </Profile>
    </ErrorBoundary>
  );
};

export { CharacterProfile, BookProfile, MovieProfile, RaceProfile };
