const { models } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
  getUsers: async () => {
    const users = await models.user.findAll();
    return users;
  },
  addUsers: async (data) => {
    data.password = bcrypt.hashSync(data.password, 10);
    const users = await models.user.create(data);
    console.log(users);
    return users;
  },
  updateUsers: (userId, updateUserId) => {
    const userIndex = users.findIndex((user) => user.id == userId);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updateUserId };
      return users[userIndex];
    }
    return null;
  },
  deleteUsers: (userId) => {
    const userIndex = users.findIndex((user) => user.id == userId);
    if (userIndex !== -1) {
      const deleteUser = users.splice(userIndex, 1);
      return deleteUser;
    }
    return null;
  },
};
