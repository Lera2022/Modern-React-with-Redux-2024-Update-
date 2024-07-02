function Table({ data, config, keyFn }) {
  //   return <div>Table</div>;
  //   return <div>{data.length}</div>;

  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  //   const renderedRows = data.map((fruit) => {
  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-3" key={keyFn(rowData)}>
          {/* {column.render(fruit)} */}
          {column.render(rowData)}
        </td>
      );
    });

    return (
      //   <tr className="border-b" key={fruit.name}>
      //   <tr className="border-b" key={rowData.name}>
      <tr className="border-b" key={rowData.name}>
        {/* <td className="p-3">{fruit.name}</td> */}
        {/* <td className="p-3">{config[0].render(fruit)}</td> */}
        {/* <td className="p-3">{fruit.color}</td> */}
        {/* <td className="p-3">
          <div className={`p-3 m-2 ${fruit.color}`}></div>
        </td>         */}
        {/* <td className="p-3">{config[1].render(fruit)}</td> */}
        {/* <td className="p-3">{fruit.score}</td> */}
        {/* <td className="p-3">{config[2].render(fruit)}</td> */}

        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {/* <th>Fruit</th>
          <th>Color</th>
          <th>Score</th> */}
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
