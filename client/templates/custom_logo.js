Template.custom_logo.helpers({
  logoUrl: function(){
    return Settings.get("logoUrl");
  }
});

Template.custom_logo.onRendered(function  () {
  $(".side-nav .logo-text").quickfit({
    min: 16,
    max: 40,
    truncate: false
  });
});

Telescope.modules.add("hero", {
  template: 'logo',
  order: 100
});
