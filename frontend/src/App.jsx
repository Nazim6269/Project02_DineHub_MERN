import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDetails from "./Components/CardDetails/CardDetails";
import Footer from "./Components/Footer/Footer";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import LoginForm from "./Components/Login/LoginForm";
import Navbar from "./Components/Navbar/Navbar";
import PrivateRoute from "./Components/Private/PrivateRoute";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import SignupForm from "./Components/signup/SignupForm";
import SingleCategory from "./Components/SingleCategory/SingleCategory";
import store from "./redux/store";
import Cart from "./screens/Cart";
import Contact from "./screens/Contact";
import Home from "./screens/Home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* private routes are here */}
          <Route element={<PrivateRoute />}>
            <Route path="/" exact element={<Home />} />
            <Route path="/cardDetails/:id" exact element={<CardDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category/:id" element={<SingleCategory />} />
          </Route>
          {/* public routes are here */}
          <Route path="/login" exact element={<LoginForm />} />
          <Route path="/signup" exact element={<SignupForm />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* <Route path="*" exact element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
