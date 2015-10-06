import $ from 'jquery';
import Backbone from 'backbone';

import Home from './controllers/home';


export default Backbone.Router.extend({

    routes: {
        '': Home,
        'about': 'about'
    },

    initialize: () => {
        $('#content').append('<div id="js-app"></div>');
    },

    home: () => {

    },

    about: () => {
        var helloView = new HelloView({
            template: _.template('Im the about page')
        }).render();

        $('#js-app').empty().append(helloView.$el);
    }

});
