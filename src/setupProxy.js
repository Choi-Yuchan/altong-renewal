//const express = require('express');
const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy('/rest', 
        {
            target: 'http://125.7.228.198:80',
            changeOrigin: true
         })
     );
};
