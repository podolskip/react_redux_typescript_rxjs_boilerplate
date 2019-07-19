'use strinc';
module.exports = function(app) {
  var placesToSeeList = require('../controllers/boilerplateController');

  app.route('/api/places')
    .get(placesToSeeList.list_all_places)
    .post(placesToSeeList.create_a_place);

  app.route('/api/places/:placeId')
    .get(placesToSeeList.read_a_place)
    .put(placesToSeeList.update_a_place)
    .delete(placesToSeeList.delete_a_task);

  app.route('/')
    .get(placesToSeeList.welcome_message);
};
