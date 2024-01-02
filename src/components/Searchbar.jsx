import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import "../components/Searchbar.css";

const Searchbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="container">
      <div className="searchbar">
        <input
          type="text"
          className={active ? "input active" : "input"}
          placeholder="Searchbar"
        />
        <button className="btn" onClick={() => setActive(!active)}>
          <BsSearch className={active ? "btn inactive" : ""} />
          <IoIosClose className={active ? "closebtn active" : "closebtn"}/>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
