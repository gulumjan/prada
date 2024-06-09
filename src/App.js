import Footer from "./components/footer/Footer";
import Header from "./components/navbar/Header";
import MainRoutes from "./routes/MainRoutes";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <MainRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
