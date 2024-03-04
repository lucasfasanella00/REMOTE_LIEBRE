const express = require('express');
const path = require('path');
const app = express();
const port = 3030;
const methodOverride = require('method-override');

/* CONFIGS */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));


/* MIDDLEWARE */
app.use(express.static('public'));
app.use(methodOverride('_method'));

/* ENRUTADORES */
const otherRoutes = require("./routes/other.routes");
const authRoutes = require("./routes/auth.routes");
const productsRoutes = require("./routes/products.routes")
const adminRoutes = require("./routes/admin.routes")

/* RUTAS */ 
app.use("/", otherRoutes);
app.use("/", authRoutes);
app.use("/productos", productsRoutes);
app.use("/admin", adminRoutes);


/* SERVER */
app.listen(port, () => console.log(`http://localhost:${port}`))