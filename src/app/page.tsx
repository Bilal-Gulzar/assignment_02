import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Herosection from "./component/herosection/herosection";

export default function Home() {
  return (
    <div className="main">
      <div>
        <Header />
        <Herosection />
      </div>
      <Footer />
    </div>
  );
}
