import React, { useState } from "react";

const imageUrls = [
  "./images/ball.jpg",
  "./images/העולם שלי 2.jpg",
  "./images/העולם שלי 3.jpg",
  "./images/העולם שלי 4.jpg",
  "./images/העולם שלי 5.jpg",
  "./images/העולם שלי 6.jpg",
  "./images/העולם שלי 7.jpg",
  "./images/העולם שלי 8.jpg",
  "./images/העולם שלי 9.jpg",
  "./images/העולם שלי 10.jpg",
  "./images/העולם שלי 11.jpg",
  "./images/העולם שלי 12.jpg",
  "./images/העולם שלי 13.jpg",
  "./images/העולם שלי 14.jpg",
  "./images/העולם שלי 15.jpg",
  "./images/העולם שלי 16.jpg",
  "./images/העולם שלי 17.jpg",
  "./images/העולם שלי 18.jpg",
  "./images/העולם שלי 19.jpg",
  "./images/העולם שלי 20.jpg",
  "./images/העולם שלי 21.jpg",
  "./images/העולם שלי 22.jpg",
  "./images/העולם שלי 23.jpg",
  "./images/העולם שלי 24.jpg",
  "./images/העולם שלי 25.jpg",
  "./images/העולם שלי 26.jpg",
  "./images/העולם שלי 27.jpg",
  "./images/העולם שלי 28.jpg",
  "./images/העולם שלי 29.jpg",
];

const ImageSelectionGame = () => {
  const [stage, setStage] = useState(1);
  const [selectedImagesStage1, setSelectedImagesStage1] = useState([]);
  const [selectedImagesStage2, setSelectedImagesStage2] = useState([]);
  const [selectedImagesStage3, setSelectedImagesStage3] = useState([]);
  const [otherPlace, setOtherPlace] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const toggleImageSelection = (id) => {
    if (isComplete) return;
    const currentStageSelector = {
      1: setSelectedImagesStage1,
      2: setSelectedImagesStage2,
      3: setSelectedImagesStage3,
    }[stage];

    currentStageSelector((prev) => {
      if (stage === 3) {
        return [id]; // Only allow one selection in stage 3
      }
      if (prev.includes(id)) {
        return prev.filter((imgId) => imgId !== id);
      } else if (prev.length < 3) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const handleComplete = () => {
    if (stage < 3) {
      setStage(stage + 1);
    } else {
      setIsComplete(true);
    }
  };

  const getStageTitle = () => {
    switch (stage) {
      case 1:
        return "בחר את המקומות שאתה הכי אוהב";
      case 2:
        return "בחר את המקומות שאתה הכי פחות אוהב";
      case 3:
        return "בחר את המקום שהכי היית רוצה להיות בו";
      default:
        return "המקום שלי";
    }
  };

  const getStageSubtitle = () => {
    if (stage === 3) return null;
    return "אתה יכול לבחור אחת, שתיים או שלוש תמונות";
  };

  const getSelectedImages = () => {
    switch (stage) {
      case 1:
        return selectedImagesStage1;
      case 2:
        return selectedImagesStage2;
      case 3:
        return selectedImagesStage3;
      default:
        return [];
    }
  };

  const renderSummary = () => (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>סיכום הבחירות שלך</h2>
      <p>
        המקומות שאתה הכי אוהב:{" "}
        {selectedImagesStage1.map((id) => id + 1).join(", ")}
      </p>
      <p>
        המקומות שאתה הכי פחות אוהב:{" "}
        {selectedImagesStage2.map((id) => id + 1).join(", ")}
      </p>
      <p>
        המקום שהכי היית רוצה להיות בו:{" "}
        {selectedImagesStage3.length > 0
          ? selectedImagesStage3[0] + 1
          : otherPlace}
      </p>
    </div>
  );

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        {getStageTitle()}
      </h1>
      {getStageSubtitle() && (
        <h3
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "normal",
            fontSize: "16px",
            color: "#666",
          }}
        >
          {getStageSubtitle()}
        </h3>
      )}
      {!isComplete ? (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {imageUrls.map((url, index) => (
              <div
                key={index}
                onClick={() => toggleImageSelection(index)}
                style={{
                  position: "relative",
                  height: "200px",
                  border: getSelectedImages().includes(index)
                    ? "2px solid black"
                    : "2px solid transparent",
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <img
                  src={url}
                  alt={`תמונה ${index + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {getSelectedImages().includes(index) && (
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      background: "white",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="black"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
                <div
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    right: "5px",
                    background: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            תמונות שנבחרו: {getSelectedImages().length}/{stage === 3 ? 1 : 3}
          </p>
          {stage === 3 && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedImagesStage3.length === 0}
                  onChange={() => setSelectedImagesStage3([])}
                />
                אחר
              </label>
              {selectedImagesStage3.length === 0 && (
                <input
                  type="text"
                  value={otherPlace}
                  onChange={(e) => setOtherPlace(e.target.value)}
                  placeholder="הזן מקום אחר"
                  style={{ marginLeft: "10px", padding: "5px" }}
                />
              )}
            </div>
          )}
          <button
            onClick={handleComplete}
            disabled={
              (stage === 3 &&
                getSelectedImages().length === 0 &&
                otherPlace === "") ||
              getSelectedImages().length === 0
            }
            style={{
              display: "block",
              margin: "20px auto",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor:
                (stage !== 3 && getSelectedImages().length > 0) ||
                (stage === 3 &&
                  (getSelectedImages().length === 1 || otherPlace !== ""))
                  ? "#4CAF50"
                  : "#ccc",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor:
                (stage !== 3 && getSelectedImages().length > 0) ||
                (stage === 3 &&
                  (getSelectedImages().length === 1 || otherPlace !== ""))
                  ? "pointer"
                  : "not-allowed",
            }}
          >
            {stage === 3 ? "סיים משחק" : "המשך לשלב הבא"}
          </button>
        </>
      ) : (
        <>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            המקום שלי
          </h2>
          {renderSummary()}
        </>
      )}
    </div>
  );
};

export default ImageSelectionGame;
