import React from 'react';

const Divider = () => {
  return (
<div className=" bg-black w-full py-6 lg:py-16 -my-12">
      <div
        className="w-full h-px max-w-6xl mx-auto py-1"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)'
        }}
      ></div>
    </div>
  );
};

export default Divider;
