function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);

    console.table(Object.fromEntries(fd));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" />
      <input type="text" name="lastName" placeholder="Last Name" />
      <input type="number" name="age" placeholder="27" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
