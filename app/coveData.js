'use strict';

angular.module('cove-data',[]).constant('$data', (function() {

    /*
     * Encapsulates the data retrieval components of the CoveAngular app.
     * Includes resources for user, pass, db, and other data/auth related material.
     */

    // How to get BottleBeer data:

    // Example FULL URL (Cloudant resource)
    // https://infiniteinnovations.cloudant.com/covebeta/_design/drink/_view/BottleBeer?include_docs=true&reduce=false

    // Example Short URL (dependent on factory):
    // drink/_view/BottleBeer

    var data = {
      user: 'commeelyinguederistroust',
      pass: '2imaJ47lISdfKTXV48oAKdXp',
      db_beg: 'https://infiniteinnovations.cloudant.com/covebeta/_design/',
      db_end: '?include_docs=true&reduce=false'
    };

    return {
        user: data.user,
        pass: data.pass,
        db_beg: data.db_beg,
        db_end: data.db_end
    }

})());