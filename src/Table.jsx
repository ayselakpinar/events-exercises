function Table() {
    function handleClick(e){
console.log(e.target.textContent);
    }
  return (
    <>
      <thead>
        <tr>
          <td>Subject</td>
          <td>Mark</td>
          <td>Grade</td>
        </tr>
      </thead>
      <tbody onClick={handleClick}>
      <tr>
          <td>Math</td>
          <td>95</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Science</td>
          <td>80</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Languages</td>
          <td>70</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Art</td>
          <td>90</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Music</td>
          <td>50</td>
          <td>C</td>
        </tr>
      </tbody>
    </>
  );
}
export default Table;
