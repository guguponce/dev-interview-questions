import NavBar from "./NavBar";

export default function IncludeNavBar({ children }: { children: JSX.Element }) {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
}
