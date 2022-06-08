import { useState, useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("useEfect logs");
    getLogs();
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    // console.log("res", res);
    const data = await res.json();
    // console.log("data", data);
    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show</p>
      ) : (
        logs.map((log) => {
          return <LogItem key={log.id} log={log} />;
        })
      )}
    </ul>
  );
};

export default Logs;

//   console.log(logs);
//   console.log("loading", loading);

//   const getLogs = () => {
//     fetch(`/logs`, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//       },
//     })
//       .then((response) => {
//         console.log(response);
//         return response.json();
//       })
//       .then((data) => {
//         setLogs(data);
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   };

//   -------------
