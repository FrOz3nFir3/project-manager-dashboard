import React from "react";

const SuspenseLoader = () => {
    {/* could load actual page sekeleton in fallback instead */ }
    return (
      <div className="container">
        <h2 className="text-center">Loading...</h2>
      </div>
    );
}

export default SuspenseLoader;