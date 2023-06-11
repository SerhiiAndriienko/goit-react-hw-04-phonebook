function Filter({ filter, filterChange }) {
  const handleFilterChange = event => {
    filterChange(event.target.value);
  };

  return (
    <div>
      <p>Find contacts by name:</p>
      <input
        type="text"
        autoComplete="off"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        onChange={handleFilterChange}
        value={filter}
      />
    </div>
  );
}

export default Filter;
