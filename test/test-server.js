process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../api/server.js');

// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

const Contacts = require('../api/models/contactModel.js');
const Person = require('../api/models/personModel.js');

describe('Server', function () {
    it('should return 404 in erroneous PATH', function (done) {
        chai.request(server)
            .get('/test')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
});

describe('Person', function () {
    Person.collection.drop();

    beforeEach(function (done) {
        const newPerson = new Person({
            name: 'Vlad Vostok'
        });
        newPerson.save(function (err, data_person) {
            const newContacts = new Contacts({
                name: 'Vlad Vostok II',
                phone: '55-5555-5555',
                email: 'vlad@vlad.v',
                social: '@0unit',
                owner: data_person.id
            });
            newContacts.save(function () {
                done();
            });
        });

    });
    afterEach(function (done) {
        Person.collection.drop();
        done();
    });

    it('should list ALL persons on /person GET', function (done) {
        chai.request(server)
            .get('/person')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.should.be.a('object');
                res.body[0].should.have.property('_id');
                res.body[0].should.have.property('name');
                res.body[0].name.should.equal('Vlad Vostok');
                done();
            });
    });
    it('should list a SINGLE person on /person/<id> GET', function (done) {
        const newPerson = new Person({
            name: 'Umberto Quintero Quintero'
        });
        newPerson.save(function (err, data) {
            chai.request(server)
                .get('/person/' + data.id)
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('name');
                    res.body.name.should.equal('Umberto Quintero Quintero');
                    res.body._id.should.equal(data.id);
                    done();
                });
        });
    });
    it('should add a SINGLE person on /person POST', function (done) {
        chai.request(server)
            .post('/person')
            .send({
                'name': 'Vlad Vostok II'
            })
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('_id');
                res.body.name.should.equal('Vlad Vostok II');
                done();
            });
    });
    it('should update a SINGLE person on /person/<id> PUT', function (done) {
        chai.request(server)
            .get('/person')
            .end(function (err, res) {
                chai.request(server)
                    .put('/person/' + res.body[0]._id)
                    .send({
                        'name': 'Gery Mattier'
                    })
                    .end(function (error, response) {
                        response.should.have.status(200);
                        response.should.be.json;
                        response.body.should.be.a('object');
                        response.body.should.have.property('name');
                        response.body.should.have.property('_id');
                        response.body.name.should.equal('Gery Mattier');
                        done();
                    });
            });
    });
    it('should delete a SINGLE person on /person/<id> DELETE', function (done) {
        chai.request(server)
            .get('/person')
            .end(function (err, res) {
                chai.request(server)
                    .delete('/person/' + res.body[0]._id)
                    .end(function (error, response) {
                        response.should.have.status(200);
                        response.should.be.json;
                        response.body.should.be.a('object');
                        response.body.should.have.property('ok');
                        response.body.ok.should.equal(1);
                        done();
                    });
            });
    });
});

describe('Contacts', function () {
    Person.collection.drop();
    Contacts.collection.drop();

    beforeEach(function (done) {
        const newPerson = new Person({
            name: 'Alberto Quintero Quintero'
        });
        newPerson.save(function (err, data_person) {
            const newContacts = new Contacts({
                name: 'Vlad Vostok II',
                phone: '55-5555-5555',
                email: 'vlad@vlad.v',
                social: '@0unit',
                owner: data_person.id
            });
            newContacts.save(function () {
                done();
            });
        });
    });
    afterEach(function (done) {
        Person.collection.drop();
        Contacts.collection.drop();
        done();
    });

    it('should list ALL contact on /contact GET', function (done) {
        chai.request(server)
            .get('/contact')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.should.be.a('object');
                res.body[0].should.have.property('_id');
                res.body[0].should.have.property('name');
                res.body[0].should.have.property('phone');
                res.body[0].should.have.property('email');
                res.body[0].should.have.property('social');
                res.body[0].should.have.property('owner');
                res.body[0].name.should.equal('Vlad Vostok II');
                res.body[0].phone.should.equal('55-5555-5555');
                res.body[0].email.should.equal('vlad@vlad.v');
                res.body[0].social.should.equal('@0unit');
                done();
            });
    });
    it('should list a SINGLE contact on /contact/<id> GET', function (done) {
        const newPerson = new Person({
            name: 'Pablo Quintero Quintero'
        });
        newPerson.save(function (err, data_person) {
            const newContacts = new Contacts({
                name: 'Vlad Vostok II',
                phone: '55-5555-5555',
                email: 'vlad@vlad.v',
                social: '@0unit',
                owner: data_person.id
            });
            newContacts.save(function (err, data_contact) {
                chai.request(server)
                    .get('/contact/' + data_contact.id)
                    .end(function (err, res) {
                        res.should.have.status(200);
                        res.should.be.json;
                        res.body.should.have.property('_id');
                        res.body.should.have.property('name');
                        res.body.should.have.property('phone');
                        res.body.should.have.property('email');
                        res.body.should.have.property('social');
                        res.body.should.have.property('owner');
                        res.body._id.should.equal(data_contact.id);
                        res.body.name.should.equal('Vlad Vostok II');
                        res.body.phone.should.equal('55-5555-5555');
                        res.body.email.should.equal('vlad@vlad.v');
                        res.body.social.should.equal('@0unit');
                        res.body.owner.should.equal(data_person.id);
                        done();
                    });
            });
        });
    });
    it('should add a SINGLE contact on /contact POST', function (done) {
        const newPerson = new Person({
            name: 'Pablo Quintero Quintero'
        });
        newPerson.save(function (err, data_person) {
            chai.request(server)
                .post('/contact')
                .send({
                    name: 'Vlad Vostok II',
                    phone: '55-5555-5555',
                    email: 'vlad@vlad.v',
                    social: '@0unit',
                    owner: data_person.id
                })
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.should.have.property('_id');
                    res.body.name.should.equal('Vlad Vostok II');
                    res.body.phone.should.equal('55-5555-5555');
                    res.body.email.should.equal('vlad@vlad.v');
                    res.body.social.should.equal('@0unit');
                    res.body.owner.should.equal(data_person.id);
                    done();
                });
        });
    });
    it('should not add a SINGLE contact on /contact POST whitout a owner', function (done) {
        chai.request(server)
            .post('/contact')
            .send({
                name: 'Vlad Vostok II',
                phone: '55-5555-5555',
                email: 'vlad@vlad.v',
                social: '@0unit'
            })
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
    it('should update a SINGLE contact on /contact/<id> PUT', function (done) {
        chai.request(server)
            .get('/contact')
            .end(function (err, res) {
                chai.request(server)
                    .put('/contact/' + res.body[0]._id)
                    .send({
                        name: 'Vlad Vostok III',
                        phone: '59-9595-5959',
                        email: 'vladiii@vlad.v',
                        social: '@0unit',
                        owner: res.body[0].owner
                    })
                    .end(function (error, response) {
                        response.should.have.status(200);
                        response.should.be.json;
                        response.body.should.be.a('object');
                        response.body.should.have.property('name');
                        response.body.should.have.property('_id');
                        response.body.name.should.equal('Vlad Vostok III');
                        response.body.phone.should.equal('59-9595-5959');
                        response.body.email.should.equal('vladiii@vlad.v');
                        response.body.social.should.equal('@0unit');
                        done();
                    });
            });
    });
    it('should not update a SINGLE contact on /contact/<id> PUT without id owner', function (done) {
        chai.request(server)
            .get('/contact')
            .end(function (err, res) {
                chai.request(server)
                    .put('/contact/' + res.body[0]._id)
                    .send({
                        name: 'Vlad Vostok III',
                        phone: '59-9595-5959',
                        email: 'vladiii@vlad.v',
                        social: '@0unit'
                    })
                    .end(function (error, response) {
                        response.should.have.status(200);
                        response.should.be.json;
                        response.body.should.be.a('object');
                        response.body.should.have.property('message');
                        done();
                    });
            });
    });
    it('should delete a SINGLE contact on /contact/<id> DELETE', function (done) {
        chai.request(server)
            .get('/contact')
            .end(function (err, res) {
                chai.request(server)
                    .delete('/contact/' + res.body[0]._id)
                    .end(function (error, response) {
                        response.should.have.status(200);
                        response.should.be.json;
                        response.body.should.be.a('object');
                        response.body.name.should.equal('Vlad Vostok II');
                        response.body.phone.should.equal('55-5555-5555');
                        response.body.email.should.equal('vlad@vlad.v');
                        response.body.social.should.equal('@0unit');
                        done();
                    });
            });
    });
    it('should delete a SINGLE contact on /contact/<id> DELETE', function (done) {
        chai.request(server)
            .get('/contact')
            .end(function (err, res) {
                chai.request(server)
                    .delete('/contact/' + res.body[0]._id)
                    .end(function (error, response) {
                        response.should.have.status(200);
                        response.should.be.json;
                        response.body.should.be.a('object');
                        response.body.name.should.equal('Vlad Vostok II');
                        response.body.phone.should.equal('55-5555-5555');
                        response.body.email.should.equal('vlad@vlad.v');
                        response.body.social.should.equal('@0unit');
                        done();
                    });
            });
    });
});
