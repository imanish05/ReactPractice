import "./styles.css";

import selfie from "./Manish.png";

// function or component with parameter
function Main(props) {
  console.log(props);
  return (
    <section>
      <h2> My name is {props.name}</h2>

      <img src={selfie} alt="Manish" height={200} />

      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  console.log(props);
  return (
    <footer>
      <h2> Year is : {props.year}</h2>
    </footer>
  );
}

const dishes = ["aalu", "tamatar", "baigan", "parvel"];

// Wrap dishes into object containing key and value
const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

// non parameterized function
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Main name="Manish" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

// export the component to index page
export default App;
