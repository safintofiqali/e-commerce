/* IMPORT : STYLES */
import "./category-item.styles.scss";

/* RENDER COMPONENT - STARTS */
const CategoryItem = ({ category }) => {
  // DESTRUCTURE PROPS-CATEGORY
  const { id, title, imageUrl } = category;

  // RETURN ELEMENTS - AREA
  return (
    <div className="category-container" key={id}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default CategoryItem;
