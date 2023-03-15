import PropTypes from "prop-types";

export const MyProduct = ({ children, onDeleteProduct, id }) => {
  return (
    <>
      <div className="my-4">
        <div className="card text-white bg-primary mb-3">{children}</div>
        <button className="btn btn-dark" onClick={() => onDeleteProduct(id)}>
          Delete
        </button>
      </div>
    </>
  );
};

MyProduct.propTypes = {
  label: PropTypes.string,
  price: PropTypes.number.isRequired,
};

MyProduct.defaultProps = {
  label: "My Product",
  price: -1,
};
