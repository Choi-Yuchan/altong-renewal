//const express = require('express');
const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy('/rest', 
        {
            target: 'http://192.168.0.201:80',
            changeOrigin: true
        })
    );
};
