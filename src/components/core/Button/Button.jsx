import "./style.scss";
import PropTypes from 'prop-types';

const Button = ({ children, className, type, ...props }) => {
  return (
    <button className={className} type={type} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
