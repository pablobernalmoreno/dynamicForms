import { Form } from "./components/Form/Form";

function App() {
  /**
   * This SHOULD be from a API call
   * Can use axios library :)
   */
  const attributes = [
    { code: "name", dataType: "string" },
    { code: "last_name", dataType: "string" },
    { code: "email", dataType: "email" },
    { code: "birthdate", dataType: "date" },
  ];

  return (
    <div className="App">
      <Form attributes={attributes} />
    </div>
  );
}

export default App;
