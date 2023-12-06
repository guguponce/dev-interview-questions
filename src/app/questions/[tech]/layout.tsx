import IncludeNavBar from "@/app/ui/components/IncludeNavBar";
import Container from "@mui/material/Container";

export default async function QuestionsLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <IncludeNavBar>
      <Container
        sx={{
          width: [
            "calc(100vw - 50px)",
            "calc(100vw - 50px)",
            "calc(100vw - 116px * 2)",
          ],
          margin: ["66px 0 66px 50px", "66px 0 66px 50px", "116px auto"],
        }}
      >
        {children}
      </Container>
    </IncludeNavBar>
  );
}
