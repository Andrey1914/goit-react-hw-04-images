import PropTypes from 'prop-types';
import { BlueButton } from './ButtonStyled';
import { BiLoaderCircle } from 'react-icons/bi';

export default function Button({ loadMore }) {
  return (
    <BlueButton type="button" onClick={loadMore}>
      <BiLoaderCircle size={20} />
      Load more
    </BlueButton>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
