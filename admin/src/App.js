import { Route, Switch } from "react-router-dom";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="price">Price:</label>
        <input id="price" ref={register} type="tel" name="price" />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" ref={register} type="text" name="name" />
      </div>
      <div>
        <label htmlFor="slug">Slug:</label>
        <input id="slug" ref={register} type="text" name="slug" />
      </div>
      <div>
        <label htmlFor="picture">Picture:</label>
        <input id="picture" ref={register} type="file" name="picture" />
      </div>

      <button>Submit</button>
    </form>
  );
}

export default App;
