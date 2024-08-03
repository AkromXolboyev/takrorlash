
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import logo from '/public/logo.svg'
function App() {

  return (
    <>
    <div className="container">
      <Header  img={logo} />
      <Footer />
    </div>
    </>
  )
}

export default App
