import User from "../models/User.js";

export const getUser = async (req, res) => {
  // req = params and body
  // res = send info back to the frontend

  try {
    // this id comes from the /routes/general where the request has :id in it
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
