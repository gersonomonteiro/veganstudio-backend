module.exports = {
  username: "root",
  password: "root",
  database: "vegan_studio",
  host: "mysql",
  port: "49159",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
};
