import Navbar from "../component/shared/Navbar";

export default function WorkerLayout({ children }) {
  return (
    <>
    {/* <Navbar/> */}
      <main>{children}</main>
    </>
  );
}
