const userService = require("../Service/usersService");
const userScheme = require("./usersValidation");

module.exports = {
  getUsers: async (req, res) => {
    const user2 = await userService.getUsers();
    res.send(user2);
  },
  addUsers: async (req, res) => {
    const user = await userService.addUsers(req.body);
    res.send(user);
    return user;
  },

  updateUsers: async (req, res) => {
    try {
      const { error, value } = userScheme.updateUser.validate(req.body);
      if (error) {
        return res.send(error.details[0].message);
      } else {
        const userId = req.params.id;
        const updateUserId = req.body;
        const user = await userService.updateUsers(userId, updateUserId, value);
        return res.send(user);
      }
    } catch (error) {
      res.send(error);
    }
  },
  deleteUser: (req, res) => {
    try {
      const { error, value } = userScheme.deleteUser.validate(req.body);
      if (error) {
        return res.send(error.details[0].message);
      } else {
        const userId = req.params.id;
        const deleteId = req.body;
        const deleteUser = userService.deleteUsers(userId, deleteId);
        res.send(deleteUser);
      }
    } catch (error) {
      res.send(error);
    }
  },
};
