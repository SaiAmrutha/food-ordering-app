const Contact = () => {
  return (
    <div>
      <h1 className="font-bold p-4 m-4 text-3xl">Contact Us page</h1>
      <form>
        <input
          type="text"
          className="border border-blue-500 p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-blue-500 p-2 m-2"
          placeholder="message"
        />
        <button className="border border-blue-500 p-2 m-2 bg-amber-400 rounded-2xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
