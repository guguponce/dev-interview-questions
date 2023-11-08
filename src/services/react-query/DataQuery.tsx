import { useQuery } from "@tanstack/react-query";
import { typeQuestion } from "../../utils/interfaces";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const InitialDataFetch = ({ children }: { children: JSX.Element }) => {
  const { isLoading, isSuccess } = useQuery({
    queryKey: ["devQuestions"],
    queryFn: () => {
      console.log("InitialDataFetch");
      const qs: typeQuestion[] = [];
      getDocs(collection(db, "devQuestions"))
        .then((snap) =>
          snap.docs.map((doc) => qs.push(doc.data() as typeQuestion))
        )
        .then(() => {
          console.log("done");
        });
      return qs;
    },
    staleTime: Infinity,
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isSuccess) {
    return <>{children}</>; // Or any UI elements you want to render
  }
};

export default InitialDataFetch;
