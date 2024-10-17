const testuserController = (req, res) => {
    try {
        res.status(200).json({ message: "Test Controller" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });

    }
}

module.exports = { testuserController };