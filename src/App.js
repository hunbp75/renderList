import Card from "./components/Card";

function App() {
  const peoples = [
    { id: 0, name: "Ádi", details: "Valami" },
    { id: 1, name: "Feri", details: "Semmi" },
    { id: 2, name: "Béla", details: "Akármi" },
  ];
  return (
    <div className="App">
      {peoples.map((item) => {
        return <Card name={item.name} details={item.details} key={item.id} />;
      })}
    </div>
  );
}

export default App;
