const api = require("../rest/api");

module.exports = {
  Query: {
    users: () => api.getAllUsers(),
  },
  Mutation: {
    createUser: (_, args) => api.createUser(args),
    updateUser: (_, { id, name, email }) =>
        api.updateUser(id, { name, email }),
    deleteUser: (_, { id }) => api.deleteUser(id),
},
};
