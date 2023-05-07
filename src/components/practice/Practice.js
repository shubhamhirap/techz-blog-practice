import React, { useState, useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./index.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Male", "Female", "Unknown"],
  datasets: [
    {
      label: "Group wise Ads Insights",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "white",
      ],
      borderWidth: 1,
    },
  ],
};

const Practice = () => {
  // const [number, setNumber] = useState(0);
  // const [dark, setDark] = useState(false);

  // const doubleNumber = useMemo(() => {
  //   return slowFunction(number);
  // }, [number]);

  // const themeStyle = useMemo(() => {
  //   return {
  //     backgroundColor: dark ? "black" : "white",
  //     color: dark ? "white" : "black",
  //   };
  // }, [dark]);
  // return (
  //   <div>
  //     <input
  //       type={"number"}
  //       value={number}
  //       onChange={(e) => setNumber(parseInt(e.target.value))}
  //     />
  //     <div>
  //       <button onClick={() => setDark((prevDark) => !prevDark)}>
  //         Change Theme
  //       </button>
  //     </div>
  //     <div style={themeStyle}>{doubleNumber}</div>
  //   </div>
  // );

  return (
    <div className="chartContainer">
      <Doughnut data={data} />
    </div>
  );
};

// const slowFunction = (num) => {
//   console.log("Calling slow function");
//   for (let i = 0; i <= 1000000000; i++) {}
//   return num * 2;
// };

export default Practice;
