import "./style.scss";
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

const Input = ({ name, mask, maskChar, placeholder, ...props }) => {
  return (
    <div className="input__wrapper">
      <InputMask mask={mask} placeholder={placeholder} {...props} name={name} maskChar={maskChar} />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
};

export default Input;
