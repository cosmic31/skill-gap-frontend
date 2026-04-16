import { useState } from "react";

export default function Recommendations({ recs = {} }) {
  return (
    <div className="recommendations-section">
      <h2 className="section-title">Recommendations</h2>

      {Object.keys(recs).length === 0 && (
        <p className="rec-none">No learning materials found.</p>
      )}

      <div className="rec-grid">
        {Object.entries(recs).map(([skill, resources]) => (
          <RecommendationCard
            key={skill}
            skill={skill}
            resources={resources}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- CARD COMPONENT ---------- */

function RecommendationCard({ skill, resources }) {
  const [activeTab, setActiveTab] = useState("courses");

  const tabs = [
    { key: "courses", label: "Courses",  },
    { key: "blogs", label: "Blogs",  },
    { key: "github", label: "GitHub",  }
  ];

  return (
    <div className="rec-box">
      <h3 className="rec-skill">{skill.toUpperCase()}</h3>

      {/* Tabs */}
      <div className="rec-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`rec-tab ${
              activeTab === tab.key ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="rec-content">
        {resources[activeTab]?.length === 0 ? (
          <p className="rec-none">Resources coming soon!!</p>
        ) : (
          resources[activeTab].map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="rec-link"
            >
               {item.title}
            </a>
          ))
        )}
      </div>
    </div>
  );
}
