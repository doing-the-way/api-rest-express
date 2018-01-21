/* 
  API 
*/

const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');

/*
	Using router:

	-- File:  /routes/api.js --
	router.get('/', (req, res, next) => {
		res.render('index', {
			title:"API"
		});
	});

	-- File:  app.js --
	var api = require('./routes/api');
	app.use('/', api);

*/
/*
	Using "exports".
*/

// --- GET --- 
exports.getIndex = (req, res, next) => {
		res.render('index', {
				title:"Index"
		});
};

exports.getUsers = (req, res, next) => {
		User.find()
				.limit()
				.sort()
				.exec((err, data) => {
						res.render('users', {
								title : "Usuarios",
								data : data
						});
				});	
};

exports.getCreateUser = (req, res ,next) => {
		res.render('create', {
				title:"Crear personaje"
		});
};

exports.getUserDetails = (req, res, next) => {
		User.findById(req.params.id)
				.limit()
				.sort()
				.exec((err, data) => {
						res.render('user-details', {
								title : "Detalles",
								data : data
						});
				});
};

exports.getEditUser = (req, res, next) => {
		User.findById(req.params.id)
				.exec((err, data) => {
					res.render('edit', {
							title : "Editar personaje",
							data : data
					});
				});
};

exports.getJson = (req, res, next) => {
		User.find()
				.exec((err, data) => {
						res.json(data);
				});
};
//--- POST ---
exports.postCreateUser = (req, res, next) => {
		var user = new User({
				character: req.body.character,
				anime: req.body.anime,
				imageUrl: req.body.imageUrl
		});

		user.save();
		res.redirect("/users");
};

// --- PUT ---
exports.putEditUser = (req, res, next) => {
		User.findById(req.params.id)
				.limit()
				.sort()
				.exec((err, data) => {
						data.character = req.body.character;
						data.anime = req.body.anime;
						data.imageUrl = req.body.imageUrl;

						data.save();
						res.redirect('/user/' + req.params.id);
				});
};

// --- DELETE ---
exports.deleteUser = (req, res, next) => {
		User.findByIdAndRemove(req.params.id)
				.exec((err, data) => {
						res.redirect('/users');
				});
};
