import React, { useEffect, useState } from "react";
import { getKnowlegeService } from "../service/rapidService.js";
const Knowlege = ({ urlText }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function loadData() {
      const response = await getKnowlegeService(urlText);
      setData(response);
    }
    loadData();
  }, [urlText]);
  //86400000
  console.log(data);
  return (
    <div>
      <Sustanaible />
    </div>
  );
};

const Sustanaible = () => {
  return <></>;
};

export default Knowlege;
