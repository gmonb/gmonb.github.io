import {launch} from "puppeteer";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    //load();
  }, []);

  async function load() {
    // Launch the browser
    const browser = await launch({ headless: "new" });

    // // Create a page
    // const page = await browser.newPage();

    // // Go to your site
    // await page.goto("https://www.delhaize.be/nl/shop/Wijn-en-bubbels/c/v2WIN");

    // // Query for an element handle.
    // const element = await page.$eval(
    //   '[data-testid="total-products-info"]',
    //   (element) => {
    //     setCount(element.innerHTML as any);
    //   }
    // );

    // // Close browser.
    // await browser.close();
  }

  async function getWineRating() {}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
