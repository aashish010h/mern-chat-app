import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );
    res.status(201).json({ users: allUsers });
  } catch (error) {
    console.log("err in get user", error.message);
    res.status(500).json({ error: "internal server err" });
  }
};
