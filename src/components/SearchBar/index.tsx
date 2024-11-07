import { ChangeEvent, FC, FormEvent } from "react";
import "./SearchBar.scss";

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onChange, value, onSubmit }) => {
  return (
    <div className="nav-search-area">
      <form className="nav-search" onSubmit={onSubmit}>
        <label className="nav-visually-hidden" htmlFor="search-input">
          Ingresá lo que quieras encontrar
        </label>
        <input
          type="text"
          id="search-input"
          name="as_word"
          className="nav-search-input"
          placeholder="Buscar productos, marcas y más…"
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
        <button type="submit" className="nav-search-btn">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="#666"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
    strokeWidth="2"
  >
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
    <path d="M21 21l-6 -6"></path>
  </svg>
);
