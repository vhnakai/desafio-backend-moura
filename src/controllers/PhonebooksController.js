const Contact = require('../models/Contact');

module.exports = {

    async create( req, res){

        const { name, phonenumber, address} = req.body;

        const contact = await Contact.create({
            name, 
            phonenumber,
            address
        });

        return res.json(contact);
    },

    async index( req, res ){
        const contacts = await Contact.findAll();

        return res.json(contacts);
    },

    async update (req, res) {
        const { contact_id } = req.params;
        const { name, phonenumber, address } = req.body;

        const contact = await Contact.findByPk(contact_id);

        if(!contact) {
            return res.status(400).json({error : 'Contact not found'});
        }

        await contact.update({
            name,
            phonenumber,
            address,
        });

        return res.json(contact);

        
    },

    async delete(req, res) {
        const { contact_id } = req.params;

        const contact = await Contact.findByPk(contact_id);

        if(!contact) {
            return res.status(400).json({error : 'Contact not found'});
        }

        await contact.destroy();

        return res.json();

    }
}