const { Client } = require("pg");

const config = new Client({
  user: "postgres",
  password: "qwerty123456",
  host: "localhost",
  port: 5432,
  database: "bitcommerce_db",
});

async function checkConnection() {
  const client = new Client(config);

  try {
    await client.connect();
    console.log(`✅ Connected to PostgreSQL database`);
  } catch (error) {
    console.error(`❌ Error connecting to PostgreSQL: ${error}`);
  }
}

module.exports = checkConnection;