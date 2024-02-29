import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(2); // simulating network delay
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);
    // if (data.username !== "Noob") {
    //   setError("myform", { message: "invalid credentials" });
    // }
  };
  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is  3" },
              maxLength: { value: 8, message: "Max length is  8" },
            })}
            placeholder="username"
            type="text"
          />
          {errors.username && <div>{errors.username.message}</div>}
          <br />
          <input
            {...register("password", {
              minLength: { value: 7, message: "Min length is  7" },
            })}
            placeholder="password"
            type="password"
          />
          {errors.password && <div>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div>{errors.myform.message}</div>}
        </form>
      </div>
    </>
  );
}

export default App;
