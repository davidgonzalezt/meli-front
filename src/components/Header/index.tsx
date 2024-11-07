import React, { useState, FormEvent, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./Header.scss";
import SearchBar from "../SearchBar";

const Header: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/items?search=${query}`, { replace: true });
  };

  useEffect(() => {
    setQuery(search);
  }, [search]);

  return (
    <header role="banner" className="nav-header">
      <div className="nav-bounds">
        <div className="nav-logo-area">
          <Link
            className="nav-logo"
            to="/"
            aria-label="Mercado Libre Argentina - Donde comprar y vender de todo"
          >
            Mercado Libre Argentina
          </Link>
        </div>
        <SearchBar
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onSubmit={handleSearch}
        />
      </div>
    </header>
  );
};

export default Header;
