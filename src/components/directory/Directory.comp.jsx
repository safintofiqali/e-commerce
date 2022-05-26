import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.comp";
const Directory = (props) => {
  const { categories } = props;
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Directory;
