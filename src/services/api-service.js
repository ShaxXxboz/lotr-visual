export default class ApiService {
  _apiBase = "https://lotr-guide.herokuapp.com/api";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error("Could not fetch" + url + ", received" + res.status);
    }
    return await res.json();
  };

  getAllBooks = async () => {
    const res = await this.getResource(`/book`);
    return res.body;
  };

  getBook = async (slug) => {
    const book = await this.getResource(`/book/${slug}/`);
    return book.data;
  };

  getAllMovies = async () => {
    const res = await this.getResource(`/movie`);
    return res.body;
  };

  getMovie = async (slug) => {
    const movie = await this.getResource(`/movie/${slug}/`);
    return movie.data;
  };

  getAllCharacters = async () => {
    const res = await this.getResource(`/character`);
    return res.body;
  };

  getCharacter = async (slug) => {
    const character = await this.getResource(`/character/${slug}/`);
    return character.data;
  };

  getAllRaces = async () => {
    const res = await this.getResource(`/race`);
    return res.body;
  };

  getRace = async (slug) => {
    const race = await this.getResource(`/race/${slug}/`);
    return race.data;
  };

  /* _transformBook = (book) => {
    return {
      id: book._id,
      name: book.name,
      author: book.author,
      publicationDate: book.publicationDate,
      genre: book.genre,
      language: book.language,
      country: book.country,
      image: book.image,
    };
  }; */

  _transformCharacter = (character) => {
    return {
      id: character._id,
      name: character.name,
      raceId: character.raceId,
      titles: character.titles,
      hairColor: character.hairColor,
      actor: character.actor,
      culture: character.culture,
      weapons: character.weapons,
      image: character.image,
    };
  };

  _transformMovie = (movie) => {
    return {
      id: movie._id,
      name: movie.name,
      releaseDate: movie.releaseDate,
      director: movie.director,
      budget: movie.budget,
      musicBy: movie.musicBy,
      distributedBy: movie.distributedBy,
      language: movie.language,
      basedOn: movie.basedOn,
      image: movie.image,
    };
  };

  _transformRace = (race) => {
    return {
      id: race._id,
      name: race.name,
      languages: race.languages,
      lifespan: race.lifespan,
      hairColor: race.hairColor,
      skinColor: race.skinColor,
      distinctions: race.distinctions,
      height: race.height,
      image: race.image,
    };
  };
}
