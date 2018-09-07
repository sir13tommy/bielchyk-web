var keystone = require('keystone');
var Types = keystone.Field.Types;

var HomePageConfig = new keystone.List('HomePageConfig');

HomePageConfig.add({
	mastheadImage: {type: Types.CloudinaryImage},
	calloutImage: {type: Types.CloudinaryImage}
});

HomePageConfig.register();
