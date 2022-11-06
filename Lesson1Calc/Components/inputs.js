

function Inputs(props) {
  return (
    <div>
      <input
        type='text'
        value={props.first}
        onChange={(event) => props.setFirst(event.target.value)}
      />
      =
      <input type='number' defaultValue={props.answer} />
    </div>
  );
}
export default Inputs;
