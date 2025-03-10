const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts"); // Add this line

const indexRoutes = require("./routes/index");

app.set("view engine", "ejs");
app.use(expressLayouts); // Add this line
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});