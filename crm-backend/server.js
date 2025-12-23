require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/auth", require("./app/routes/authRoutes"));
app.use("/api/customers", require("./app/routes/customerRoutes"));
app.use("/api/cases", require("./app/routes/caseRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
