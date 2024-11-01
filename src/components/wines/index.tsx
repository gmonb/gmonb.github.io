import { API_URL } from "../../constants/env";
import * as React from "react";
import { StateEnum } from "../../types";

export interface HomeProps {}

interface Item {
  name: string;
  rating: number;
  href: string;
}

export function Wines({}: HomeProps) {
  const [numberOfWines, setNumberOfWines] = React.useState("");
  const [items, setItems] = React.useState<Item[]>([]);
  const [stateOfLoad, setStateOfLoad] = React.useState(StateEnum.Initial);

  const loading = stateOfLoad === StateEnum.Pending;

  async function load() {
    setStateOfLoad(StateEnum.Pending);

    try {
      const response = await fetch(`${API_URL}/wines`);

      const json = await response.json();
      setNumberOfWines(json.numberOfWines);
      setItems(json.items);

      setStateOfLoad(StateEnum.Completed);
    } catch (error) {
      setStateOfLoad(StateEnum.Error);
    }
  }

  function renderItem(item: Item) {
    return (
      <div
        key={item.name}
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 10,
          padding: 10,
          border: "3px solid lightblue",
        }}
      >
        <span>Name: {item.name}</span>
        <span>Rating: {item.rating}</span>
        <a style={{ color: "blue" }} href={item.href}>
          {item.href}
        </a>
      </div>
    );
  }

  const list = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: 20,
      }}
    >
      {items.map(renderItem)}
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        padding: 16,
      }}
    >
      {loading && false ? (
        "Loading..."
      ) : (
        <>
          <button onClick={load}>{loading ? "Fetching" : "Fetch"}</button>
          <span>{numberOfWines}</span>
          {list}
        </>
      )}
    </div>
  );
}
