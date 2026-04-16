import React, { useState } from "react";
import axios from "axios";

export default function UploadResume({ setResult }) {
  const [file, setFile] = useState(null);
  const [jobRole, setJobRole] = useState("");

  const handleSubmit = async () => {
    if (!file || !jobRole) {
      alert("Please upload a resume and enter a job role.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("job_role", jobRole);

    try {
      const response = await axios.post("http://localhost:5000/analyze", formData);
      setResult(response.data);
    } catch (error) {
      alert("Error analyzing resume");
    }
  };

  return (
    <div className="upload-box">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <input
        type="text"
        placeholder="Enter Job Role"
        value={jobRole}
        onChange={(e) => setJobRole(e.target.value)}
      />
      <button onClick={handleSubmit}>Analyze</button>
    </div>
  );
}
