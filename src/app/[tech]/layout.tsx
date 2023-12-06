import React from "react";
import NavBar from "../ui/components/NavBar";

export async function generateMetadata({
  params,
}: {
  params: { tech: string };
}) {
  return params.tech === "HTML"
    ? {
        title: "HTML Learning Resources | Dev Interview Questions",
        description:
          "Explore HTML fundamentals and best practices. Access quizzes, tutorials, and practical exercises. Learn about semantic markup, forms, and structuring web content.",
      }
    : params.tech === "CSS"
    ? {
        title: "CSS Learning Resources | Dev Interview Questions",
        description:
          "Enhance your CSS skills with quizzes and resources covering selectors, layout techniques, flexbox, grid, and responsive design. Elevate your styling proficiency.",
      }
    : params.tech === "JavaScript"
    ? {
        title: "JavaScript Quiz: Test Your Skills | Dev Interview Questions",
        description:
          "Master JavaScript concepts with quizzes, exercises, and learning resources. Prepare for interviews and improve coding skills on arrays, functions, objects, and more.",
      }
    : params.tech === "React"
    ? {
        title:
          "Test Your React Progress: Statistics & Quizzes | Dev Interview Questions",
        description:
          "Level up your React knowledge with quizzes and guides. Dive into components, state management, hooks, and best practices. Prepare for interviews and projects.",
      }
    : {
        title: "Dev Interview Questions",
        description:
          "Explore WebDev fundamentals and best practices. Access quizzes, tutorials, and practical exercises. Learn about semantic markup, forms, and structuring web content.",
      };
}
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
}
