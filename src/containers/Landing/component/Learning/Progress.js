import React, { useEffect, useRef, useState } from "react";

const ANIMATION_DURATION = 5;
const PROGRESS_LIMIT = 100;

const Progress = ({ onTimeEnd }) => {
  const timerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const ANIMATION_INTERVAL = (ANIMATION_DURATION * 1000) / 100;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, ANIMATION_INTERVAL);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (progress === PROGRESS_LIMIT) {
      onTimeEnd();
      clearInterval(timerRef.current);
    }
  }, [progress]);

  return (
    <div className="card-progress">
      <div
        className="card-progress-seek"
        style={{
          width: `${progress}%`,
          transition: `width ${ANIMATION_DURATION / PROGRESS_LIMIT}s linear`,
        }}
      />
    </div>
  );
};

export default Progress;
