import Navbar from "./components/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
