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
    // /BottleBeer

    var devLocal = true;     // Set this to true in order to use Express server.js (Node)

    if (devLocal) {
        var data = {
            user: '',
            pass: '',
            db_beg: 'http://127.0.0.1:8080/',
            db_mid: '',
            db_end: ''
        };
    }
    else {
        var data = {
            user: 'commeelyinguederistroust',
            pass: '2imaJ47lISdfKTXV48oAKdXp',
            db_beg: 'https://infiniteinnovations.cloudant.com/covebeta/',
            db_mid: '_design/drink/_view',
            db_end: '?include_docs=true&reduce=false'
        };
    }

    return {
        user: data.user,
        pass: data.pass,
        db_beg: data.db_beg,
        db_mid: data.db_mid,
        db_end: data.db_end
    }

})());
