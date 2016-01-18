Template.first_logo.helpers({
  logoUrl: function(){
    return Settings.get("logoUrl");
  }
});

Template.first_logo.onRendered(function  () {
  $(".side-nav .logo-text").quickfit({
    min: 16,
    max: 40,
    truncate: false
  });
});

Telescope.modules.add("hero", {
  template: 'first_logo',
  order:1
});


