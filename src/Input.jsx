function Input() {
  function handleInput(e) {
    const inputValue = e.target.value;
    console.log(inputValue);
  }

  return <input type="text" id="username" onInput={handleInput} />;
}

export default Input;
