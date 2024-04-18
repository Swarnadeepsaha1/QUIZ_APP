
import React from 'react';

const Submit = ({ isSubmitted }) => {
  return (
    <div>
      {isSubmitted ? (
        <div>
          <h2 className="Submitted">Submitted Answer is :</h2>
        </div>
      ) : null}
    </div>
  );
};

export default Submit;
