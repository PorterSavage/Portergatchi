import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    onPlayButtonClicked,
    onFoodButtonClicked,
    onSleepButtonClicked,
  } = props;
  return (
    <div>
      <div>
        <style>
          {`

          `}
        </style>
      </div>
      <div>
        <p>Make sure to give your Portegatchi a lot of attention or they could Die!</p>
        <button type="button" onClick={onPlayButtonClicked}>Play</button>
        <button type="button" onClick={onFoodButtonClicked}>Feed</button>
        <button type="button" onClick={onSleepButtonClicked}>Rest</button>
      </div>
    </div>
  );
}

Button.propTypes = {
  onPlayButtonClicked: PropTypes.func.isRequired,
  onFoodButtonClicked: PropTypes.func.isRequired,
  onSleepButtonClicked: PropTypes.func.isRequired,
};

export default Button;
