import React, { useState } from "react";

function Searchbox(props) {
  const { onSubmit } = props;
  const [isDisabled, setIsDisabled] = useState(true);

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      setIsDisabled(false);
    } else if (value.length === 0) {
      console.log("hello");
      setIsDisabled(true);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label>
          <input
            type="text"
            placeholder="search city..."
            name="city"
            onChange={handleOnChange}
          />
        </label>
        <input type="submit" value="Search" disabled={isDisabled} />
      </div>
    </form>
  );
}

export default Searchbox;
