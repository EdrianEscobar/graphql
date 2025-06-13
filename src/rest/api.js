const axios = require("axios");

const BASE_URL = process.env.BASE_URL || "http://localhost:3001";
console.log("BASE_URL:", BASE_URL);

module.exports = {
  getAllUsers: async () => {
    const res = await axios.get(`${BASE_URL}/users`);
    return res.data;
  },
  createUser: async (user) => {
    try {
        const res = await axios.post(`${BASE_URL}/users`, user);
        return {
        id: res.data.id,
        name: res.data.name,
        email: res.data.email,
        };
    } catch (error) {
        console.error("Error al crear usuario:", error); 
        return null;
    }
    },
    updateUser: async (id, user) => {
        const res = await axios.put(`${BASE_URL}/users/${id}`, user);
        return res.data;
    },
    deleteUser: async (id) => {
        const res = await axios.delete(`${BASE_URL}/users/${id}`);
        return { id }; 
    },

};
