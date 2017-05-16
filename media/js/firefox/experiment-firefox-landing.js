(function() {
    'use strict';

    var serpico = new Mozilla.TrafficCop({
        id: 'experiment-firefox-landing',
        cookieExpires: 0, // session only
        variations: {
            'v=a': 50,
            'v=b': 50
        }
    });

    serpico.init();
})();
