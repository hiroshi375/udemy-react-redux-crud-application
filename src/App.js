
// function App() {
//   const greeting = "Hi!!";
//   const dom = <h1 className="foo">{greeting}</h1>;
//   return dom;
// }

const App = () => {
  return <div>
    <Cat />
    <Cat />
    <Cat />
</div>
}

const Cat = () => {
  return <h1>Meow!</h1>
}

export default App;
