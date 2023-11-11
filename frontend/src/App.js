import MenuAppBar from "./Components/MenuAppBar";
import oneDog from "./Images/oneDog.svg";
import Footer from "./Components/Footer"


function App() {
  return (
    <>
      <div style={{
          minHeight: "100vh", backgroundColor: "#FFF4EF"
      }}>
        <MenuAppBar />
        <div style={{
          minHeight: "72vh", backgroundColor: "#FFF4EF"
        }}>
          <img src={oneDog} alt="logo" style={{
            maxHeight: "40vh", display: "block", marginLeft: "auto", marginRight: "auto"
          }}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
