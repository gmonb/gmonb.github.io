import { API_URL } from "../constants/env";
import * as React from "react";

export interface HomeStateProps {}

export interface HomeDispatchProps {}

export type HomeProps = HomeStateProps & HomeDispatchProps;

interface Item {
  name: string;
  rating: number;
  href: string;
}

export function Home({}: HomeProps) {
  const [numberOfWines, setNumberOfWines] = React.useState("");
  const [items, setItems] = React.useState<Item[]>([]);

  React.useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await fetch(`${API_URL}/wines`);
    if (response.status === 404) return;

    const json = await response.json();
    setNumberOfWines(json.numberOfWines);
    setItems(json.items);
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
          borderColor: "lightblue",
          borderWidth: 3,
          borderRadius: 4,
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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>{numberOfWines}</span>
      {list}
    </div>
  );
}
