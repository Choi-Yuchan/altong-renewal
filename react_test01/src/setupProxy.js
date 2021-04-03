//const express = require('express');
const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy('/rest', 
        {
            target: 'http://docker-nginx',
            changeOrigin: true
        })
    );
};
