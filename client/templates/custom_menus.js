Telescope.modules.add("secondaryNav", [
  {
    template: 'custom_user_menu',
    order: 10
  }
]);

Telescope.modules.add("mobileNav", [
  {
    template: 'custom_user_menu',
    order: 20
  }
]);

Telescope.modules.remove("secondaryNav", "user_menu");


var userMenuItems = [
  {
    route: function () {
      var user = Meteor.user();
      return FlowRouter.path('userProfile', {_idOrSlug: user && user.telescope && user.telescope.slug});
    },
    label: 'profile'
    // description: 'view_your_profile'
  },
  {
    route: function () {
      var user = Meteor.user();
      return FlowRouter.path('userEdit', {_idOrSlug: user && user.telescope && user.telescope.slug});
    },
    label: 'edit'
    // description: 'edit_your_profile'
  },
  {
    route: 'adminSettings',
    label: 'settings',
    // description: 'settings',
    adminOnly: true
  },
  {
    route: 'signOut',
    label: 'logout'
    // description: 'sign_out'
  }
];

Telescope.menuItems.add("userMenu", Telescope.menuItems.internationalize(userMenuItems));

// array containing items in the admin menu
Telescope.menuItems.add("adminMenu", [
  {
    route: 'adminUsers',
    label: "users",
    description: "users_dashboard"
  }
]);
