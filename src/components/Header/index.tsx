import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/items?search=${query}`, { replace: true });
  };

  return (
    <header role="banner" className="nav-header">
      <div className="nav-bounds">
        <div className="nav-logo-area">
          <a
            className="nav-logo"
            href="//www.mercadolibre.com.ar"
            aria-label="Mercado Libre Argentina - Donde comprar y vender de todo"
          >
            Mercado Libre Argentina
          </a>
        </div>
        <div className="nav-search-area">
          <form className="nav-search" onSubmit={handleSearch}>
            <label className="nav-visually-hidden" htmlFor="search-input">
              Ingresá lo que quieras encontrar
            </label>
            <input
              type="text"
              id="search-input"
              name="as_word"
              className="nav-search-input"
              placeholder="Buscar productos, marcas y más…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
            <button type="submit" className="nav-search-btn">
              <div
                role="img"
                aria-label="Buscar"
                className="nav-icon-search"
              ></div>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
