const routes = require("express").Router();
const livroroute = require("./livros.route");
const autorroute = require("./autor.route");



// não usa .route pois não sincroniza 
// pesquisa do google é /...
//adição do autor
routes.use("/livros", livroroute);
routes.use("/autor", autorroute);

module.exports = routes;