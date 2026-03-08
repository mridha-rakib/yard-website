import Footer from "../component/shared/Footer";
import Navbar from "../component/shared/Navbar";

export default function CustomerLayout({ children }) {
  return (
    <>
    {/* <Navbar/> */}
      <main >{children}</main>
      <Footer/>
    </>
  );
}
