var keystone = require('keystone');

module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'home';
	locals.data = {}

	let q = keystone.list('HomePageConfig').model.find({})
	q.exec()
		.then((data) => {
			locals.data.homePageConfig = data[0]
			console.log(data[0])
		})
		.catch((err) => {
			console.log(err)
		})

	view.render('index');
};
