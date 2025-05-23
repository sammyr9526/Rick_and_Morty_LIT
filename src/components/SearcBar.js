import { LitElement, html, css } from "lit";

export class SearchBar extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      button {
        border: none;
        border-radius: 3px;
        background: #363636;
        color: white;
        padding: 10px;
      }
      .button_search {
        height: 34px;
        width: 70px;
      }
      .search :focus {
        outline: none;
      }
      .search {
        margin-left: 33%;
        margin-bottom: 2rem;
        width: 400px;
        height: 30px;
        border-radius: 3px;
        border: none;
        outline: 0;
        box-shadow: 2px 2px 2px 6px rgba(0, 0, 0, 0.5);
      }
      .search_content {
        display: flex;
        width: 100%;
      }
    `,
  ];

  _onInputChange(e) {
    const valor = e.target.value;
    this.dispatchEvent(
      new CustomEvent("valor-cambiado", {
        detail: { valor },
        bubbles: true, // permite que el evento suba en el DOM
        composed: true, // para que atraviese el shadow DOM
      })
    );
  }

  render() {
    return html`
      <div class="search_content">
        <input
          class="search rounded-0 shadow-none border-0"
          type="text"
          name="search"
          placeholder=" Search a character"
          @input="${this._onInputChange}"
        />
        <button class="button_search ">Search</button>
      </div>
    `;
  }
}
customElements.define("search-bar", SearchBar);

/* 
  import { useState, useEffect } from "react";
import Character from "./Character";
import SearchCharacter from "./SearchCharacter";

function NavePage(props) {
  return (
    <div className="mb-3 d-block">
      <div>
        {props.page < 2 ? (
          ""
        ) : (
          <button
            className="button1 btn btn-primary btn-sm "
            onClick={() => props.setPage(props.page - 1)}
          >
            Back
          </button>
        )}
        <button
          className="button2 btn btn-primary btn-sm "
          onClick={() => props.setPage(props.page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
      console.log(data.results);
    };
    fetchData();
  }, [url]);

  return (
    <div className="container">
      <p>Page {page}</p>
      <NavePage page={page} setPage={setPage} />
      <SearchCharacter setSearch={setSearch} setPage={setPage} />
      {loading ? (
        <h1>...Loading</h1>
      ) : (
        <div className="row">
          <Character characters={characters} />
        </div>
      )}
      <NavePage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;

*/

/* 
  function Character({ characters }) {
  if (!characters) return "  Not Characters founded :/";
  else
    return (
      <>
        {characters.map((char) => {
          return (
            <div className="col-md-4" key={char.id}>
              <div className="text-center h-100 p-5">
                <div className="name">
                  <h3>{char.name}</h3>
                </div>

                <img
                  src={char.image}
                  className="img-fluid rounded-pill"
                  alt={char.image}
                />
              </div>
            </div>
          );
        })}
      </>
    );
}
export default Character;
*/

/* 

  function SearchCharacter({ setSearch, setPage }) {
  return (
    <div className="searchbar input-group">
      <input
        className="search form-control  "
        type="text"
        name="search"
        placeholder="search a character"
        onChange={(e) => {
          setSearch(e.target.value), setPage(1);
        }}
      />
      <button className="btn btn-primary ">search</button>
    </div>
  );
}

export default SearchCharacter;
*/
