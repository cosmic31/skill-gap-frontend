import axios from "axios";

export const analyzeResume = async (file, jobRole) => {
  try {
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("job_role", jobRole);

    const response = await axios.post(
      "https://skill-gap-backend-3k18.onrender.com",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    return response.data;
  } catch (error) {
    console.error("Analyze error:", error);
    throw error;
  }
};
