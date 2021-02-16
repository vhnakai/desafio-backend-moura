const { Router } = require('express');

const PhonebooksController = require('../controllers/PhonebooksController');

const phonebookRouter = Router();

phonebookRouter.post(
    '/',
    PhonebooksController.create,
);

phonebookRouter.get(
    '/', PhonebooksController.index
);

phonebookRouter.put(
    '/:contact_id', PhonebooksController.update
);

phonebookRouter.delete(
    '/:contact_id', PhonebooksController.delete
);


module.exports = phonebookRouter;