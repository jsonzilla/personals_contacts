module.exports = function(app) {
    const controller = require('../controllers/controller');
    
    app.route('/person')
        .get(controller.list_all_person)
        .post(controller.create_a_person);

    app.route('/person/:personId')
        .get(controller.get_a_person)
        .put(controller.update_a_person)
        .delete(controller.delete_a_person);

    app.route('/contact')
        .get(controller.list_all_contacts)
        .post(controller.create_a_contact);

    app.route('/contact/:contactId')
        .get(controller.get_a_contact)
        .put(controller.update_a_contact)
        .delete(controller.delete_a_contact);        

    app.route('/person/:personId/contact')
        .get(controller.get_all_contacts_person)
        .post(controller.create_a_contact_to_person);

    app.route('/person/:personId/contact/:contactId')
        .get(controller.get_a_contact)
        .put(controller.update_a_contact)
        .delete(controller.delete_a_contact);      
};