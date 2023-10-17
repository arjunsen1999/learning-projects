import { LoginButton, useLogin } from "react-facebook";
import "./App.css";


function App() {
  // const { login, status, isLoading, error} = useLogin();
  // console.log("status", status);

  // async function handleLogin() {
  //   try {
  //     const response = await login({
  //       scope: 'email',
  //     });

  //     console.log("response.status", response.status);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }
  const handleResponse = (data) => {
    console.log(data);
    // Handle the Facebook login response here
  };
  return (
    <div className="App">
      {/* <button
        className="bg-blue-900 py-2 px-4 rounded-md cursor-pointer text-white"
        onClick={handleLogin}
        disabled={isLoading}
      >
        Login via Facebook
      </button> */}
        <LoginButton scope="public_profile,email" onCompleted={handleResponse}>
        <span>Login with Facebook</span>
      </LoginButton>
    </div>
  );
}

export default App;
