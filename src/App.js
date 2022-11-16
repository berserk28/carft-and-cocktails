import Navbar from "./components/navbar";
import Showcase from "./components/showcase";
import Footer from "./components/footer";

function App() {
  return (
    <main className=" text-light">
      <div className=" overlay">
        <div className="container">
          <Navbar />
          <Showcase />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
