import "./App.css";
import { useState } from "react";
import UploadResume from "./components/UploadResume";
import SkillCharts from "./components/SkillCharts";
import MarketAnalysis from "./components/MarketAnalysis";
import Recommendations from "./components/Recommendations";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
      <h1 className="title">Skill Gap Analyzer</h1>

      <UploadResume setResult={setResult} />

      {result && (
        <>
          {/* SIDE-BY-SIDE ANALYSIS */}
          <div className="analysis-grid">
            <div className="analysis-item">
              <SkillCharts
                extractedSkills={result.extracted_skills || []}
                missingSkills={result.missing_skills || []}
              />
            </div>

            <div className="analysis-item">
              <MarketAnalysis
                marketData={result.market_analysis || null}
              />
            </div>
          </div>

          {/* RECOMMENDATIONS */}
          <Recommendations recs={result.recommendations || {}} />
        </>
      )}
    </div>
  );
}

export default App;
