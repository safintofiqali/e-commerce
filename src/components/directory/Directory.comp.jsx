/* IMPORT : STYLES */
import "./directory.styles.scss";

/* IMPORT : COMPONENTS */
import CategoryItem from "../category-item/category-item.comp";

/* RENDER COMPONENT - STARTS */
const Directory = (props) => {
  // DESTRUCTURE PROPS
  const { categories } = props;

  // RETURN ELEMENTS - AREA
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Directory;
