import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

function Question(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="shadow-xl cursor-pointer m-5 min-w-[600px]">
      <div className="flex p-10 bg-white" onClick={toggleAnswer}>
        <div className="mr-5 mt-1">
          {showAnswer ? (
            <FaMinus /> 
          ) : (
              <FaPlus />
          )}
        </div>
        {props.title}
      </div>
      {showAnswer && (
        <div className="bg-white p-1 px-20">
          <p>{props.answer}</p>
        </div>
      )}
    </div>
  );
}

export default Question;
