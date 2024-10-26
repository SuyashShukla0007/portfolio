import React from 'react';

type props = {
  src: string;
  name: string;
};

const Stack = (props: props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[120px] h-[120px] rounded-lg flex flex-col p-4 justify-center items-center bg-skillgray mb-5 mt-5">
        <img src={props.src} alt={props.name} width="60%" />
        <p className="mt-2 text-center text-white">{props.name}</p>
      </div>
    </div>
  );
};

export default Stack;
