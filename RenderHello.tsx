import { useState } from "react";

export function TryHook() {
  const [NAME, setName] = useState<boolean>(false);
  //   const [STATE, setState] = useState<string>("wow");
  const TextHandler = (): void => {
    setName(!NAME);
  };
  return (
    <>
      <button onClick={TextHandler}>press</button>
      {NAME ? <p>text</p> : null}
      {NAME && <p></p>}
    </>
  );
}
export function Card() {
  const [Color, setColor] = useState<string | EventTarget>("");
  const [NewColor, setNewColor] = useState<string>("");
  return (
    <>
      <div
        className="card"
        style={
          Color
            ? { backgroundColor: `${Color}` }
            : { backgroundColor: `${NewColor}` }
        }
      >
        {" "}
        <p>first card</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png"
          alt="noo"
        />
        <p>its first</p>
      </div>

      <select name="" id="" onChange={(e) => setColor(e.target.value)}>
        <option value="another">another color?</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
        <option value="blue">blue</option>
        {NewColor !== "" ? <option value={NewColor}>{NewColor}</option> : null}
      </select>
      {Color === "another" ? (
        <>
          <input
            type="text"
            onChange={(c) => setNewColor(c.target.value)}
          ></input>
          <button onClick={() => setNewColor(NewColor)}>press here</button>
        </>
      ) : null}
    </>
  );
}
