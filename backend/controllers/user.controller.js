const userController = {
    rone: (req, res) => {
        console.log("in request")
        res.json({ message: "The route is currently not protected" });
    },
    rtwo: async (req, res) => {

    }
}

module.exports = userController;