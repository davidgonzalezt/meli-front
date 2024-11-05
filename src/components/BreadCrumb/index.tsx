import "./BreadCrumb.scss";
interface BreadCrumbProps {
  categories: string[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ categories }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <span className="category" key={category}>
          {category} {(index + 1) !== categories.length && " > "}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
