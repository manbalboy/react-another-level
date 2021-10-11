import { useState } from "react";

export default function ControlledFormComponent() {
  const [value, setValue] = useState("");
  const [favorite, setFavorite] = useState("coconut");
  const [essayValue, setEssayValue] = useState(
    "Please write an essay about your favorite DOM element."
  );

  const handleChange = (event) => {
    switch (event.target.name) {
      case "value":
        setValue(event.target.value);
        break;
      case "essayValue":
        setEssayValue(event.target.value);
        break;
      case "favorite":
        setFavorite(event.target.value);
        break;
      default:
        console.log("none");
    }
  };

  // const handleEssayChange = (event) => {
  //   setEssayValue(event.target.value);
  // };
  //
  // const handleFavoriteChange = (event) => {
  //   setFavorite(event.target.value);
  // };

  const handleSubmit = (event) => {
    alert("A name was submitted: " + value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} name="value" onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:
        <textarea
          value={essayValue}
          name="essayValue"
          onChange={handleChange}
        />
      </label>
      <br />
      <br />

      <label>
        Pick your favorite flavor:
        <select value={favorite} name="favorite" onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>

      <br />
      <br />
      {`value: ${value}, essayValue: ${essayValue},  favorite : ${favorite}`}

      <input type="submit" value="Submit" />
    </form>
  );
}
