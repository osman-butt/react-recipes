import { useEffect, useState } from "react";
import { getInfo, Info } from "./services/apiFacade";

export default function Home() {
  const [info, setInfo] = useState<Info | null>(null);
  const [err, setErr] = useState("");
  useEffect(() => {
    setErr("");
    getInfo()
      .then((data) => setInfo(data))
      .catch(() => {
        setErr("Error fetching info from backend");
      });
  }, []);

  return (
    <>
      <h2>Home</h2>
      <p>Welcome to our homepage! (mainly meant to learn React Router)</p>
      <p style={{ color: "red" }}>{err}</p>
      <img style={{ width: 200 }} src="./logo.png" alt="logo" />
      {info && (
        <>
          <h3>Info about the backend data used for this example</h3>
          <p>
            <span style={{ fontWeight: "bold" }}>Data taken from here:</span>{" "}
            {info.reference}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Data created:</span> {info.created}
          </p>
          <p>{info.info}</p>
        </>
      )}
    </>
  );
}
