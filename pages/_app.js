import Navbar from "./components/navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
