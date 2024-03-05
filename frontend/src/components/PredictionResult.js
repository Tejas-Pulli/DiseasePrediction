import React from 'react';

function PredictionResult({ props}) {
  const { prediction } = props.location.state;
  return (
    <div>
      <h2>Prediction Result</h2>
      <p>Predicted Disease: {prediction}</p>
    </div>
  );
}

export default PredictionResult;
