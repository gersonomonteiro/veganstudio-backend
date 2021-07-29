module.exports = {
  username: "root",
  password: "Pa$$w0rd",
  database: "vegan_studio",
  host: "localhost",
  port: "3306",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
};
