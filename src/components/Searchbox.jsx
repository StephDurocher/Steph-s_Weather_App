import React from "react";

function Searchbox(props) {
  const { onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label>
          <input type="text" placeholder="search city..." />
        </label>
        <input type="submit" value="Search" />
      </div>
    </form>
  );
}

export default Searchbox;
