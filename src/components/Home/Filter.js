
const Filter = ({ changeFilters }) => {
  return (
    <div className="filters">
      <select onChange={(e) => changeFilters(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default Filter;
