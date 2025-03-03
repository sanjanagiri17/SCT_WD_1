import React from "react";

const Features = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
  <div className="bg-white p-4 shadow-md rounded-lg">
    <h3 className="text-xl font-semibold">Feature 1</h3>
    <p className="text-gray-600">Description of feature 1.</p>
  </div>
  <div className="bg-white p-4 shadow-md rounded-lg">
    <h3 className="text-xl font-semibold">Feature 2</h3>
    <p className="text-gray-600">Description of feature 2.</p>
  </div>
  <div className="bg-white p-4 shadow-md rounded-lg">
    <h3 className="text-xl font-semibold">Feature 3</h3>
    <p className="text-gray-600">Description of feature 3.</p>
  </div>
</section>

  );
};

export default Features;
