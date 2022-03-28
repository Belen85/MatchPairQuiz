import "./App.css";
import CountryCapitalGame from "./CountryCapitalGame";

const data = {
  Germany: "Berlin",
  Azerbaijan: "Baku",
  Spain: "Madrid",
  Belgium: "Brussels",
  Rome: "Italy",
  France: "Paris",
  The_Netherlands: "Amsterdam",
  United_Kingdom: "London",
  Portugal: "Lisbon",
};

//Implement a game to match countries with their capital in React
//Implement a React Component that renders a simple game
//In the game, the player needs to match a country to its capital by clicking on appropiate buttons.
//1. Your component should receive a data property in the following format (an object with the correct answer, where the keys are the names of he countries and the value of each key is the capital city of the country)
//<CountryCapitalGame data={{ Germany: "Berlin", Azerbaijan: "Baku"}}/>
//2. A button should be displayed for each country and each capital.  So,  the exampleaboce would return 4 buttons: Germany, Berlin, Azerbaijan and Baku
//3. the buttons should be displayed in random order
//4. Clicking a button should set its background colour to blue(#0000ff)
//5. Clickign another button should:
// remove both buttons if a correct country and capital pair has been selected
// set the background colour of both buttons to red (#ff0000) if a wrong pair has been selected
//6. Assumingthe previously selected pair was wrong, clicking another button should restaure the default background color of the wrong pair and set the background color of the clicked button to blue(as in point 4)
//7. When there are no buttons left, display a message: congratulations
//8. Export your component as the default export

function App() {
  // Set current year in copyright
  const currentYear = new Date().getFullYear();

  return (
    <>
      <main>
        <section className="container flex margin-top">
          <div>
            <h2 className="secondary-heading">
              Match countries with their capitals
            </h2>
            <div className="underline"></div>
          </div>
        </section>
        <section className="container">
          <CountryCapitalGame data={data} />
        </section>
      </main>
      <footer>
        Copyright © {currentYear} by Belen Rodriguez. Part of "React" online
        course. Use for learning purposes only.
      </footer>
    </>
  );
}

export default App;
