import PropTypes from 'prop-types';


function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Load more 
    </button>
  );
}

Button.prototype = {
  onClick: PropTypes.func.isRequired,
};

export default Button;