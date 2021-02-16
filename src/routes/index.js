const{ Router } = require('express') ;

const phonebookRouter = require( './phonebook.routes');

const routes = Router();

routes.use('/phonebook', phonebookRouter);
routes.get('/', (req, res) => {
    return res.json("Please consult the API documentation");
});

module.exports = routes;