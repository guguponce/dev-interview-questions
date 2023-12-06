import NavBar from "./NavBar";

export default async function IncludeNavBar({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
}
