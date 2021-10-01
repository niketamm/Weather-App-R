import React from "react";

export default function Form(){return (
          <form className="Form">
            <input
              type="text"
              placeholder="enter city and press enter"
              className="search"
            />
            <input type="submit" value="Search" className="SearchButton" />
          </form>
        );}