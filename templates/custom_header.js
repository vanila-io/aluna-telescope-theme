Template.custom_header.helpers({
	admin: function () {
		return Users.is.admin(Meteor.user());
	}
});
