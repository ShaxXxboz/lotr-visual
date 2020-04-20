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
}
