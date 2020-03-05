export default (req, res) => {
    const thoughts = [
      { _id: 123, message: "I love pepperoni pizza!", author: "unknown" },
      { _id: 456, message: "I'm watching Netflix.", author: "unknown" }
    ];

    if (req.method === 'GET') {
        const orderedThoughts = thoughts.sort((t1, t2) => t2._id - t1._id);
        res.send(orderedThoughts);
    }
    else if (req.method === 'POST') {
        const { message } = req.body;
        console.log(message);
        const newThought = {
            _id: new Date().getTime(),
            message,
            author: "unknown"
        };
        thoughts.push(newThought);
        res.send({ message: "Thanks!" });
    }
}