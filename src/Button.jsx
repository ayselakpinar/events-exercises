function Button() {
function handleClick(){
  console.log("Hello There!")
}

  return <button onClick={handleClick}>Click Me!</button>;
}

export default Button;
