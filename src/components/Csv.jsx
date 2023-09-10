import React from "react";
import axios from "axios";
const Csv = () => {
  const handleDownload = async () => {
    try {
      const response = await axios.get("http://localhost:3000/generate-csv", {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "data.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading CSV:", error);
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Download CSV</button>
    </div>
  );
};

export default Csv;
