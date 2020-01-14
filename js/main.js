// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {

// mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      isAdmin: false,
      isLoggedIn: false,
      avatar: "basic_avi.png",
    },

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],

    videotitle: "video title goes here",
    videodescription: "video description goes here",
    videosource: "",

    showDetails: false
  },

  methods: {

    logInOut(){
      //test the login log out UI -> button should change colour
      //eventually we'll use routing and a login connection
      console.log('do login / logout on click');

      //? : is a ternary statemend, shorthand for is / else
      //evaluste the expression, if true then us value to the left of the colon
      //if false use valuse to the right of the colon.
      //this -> means THIS FRAMEWORK
      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
      this.user.isAdmin = (this.user.isAdmin) ? false : true;
    },

    setUserPrefs(){
      console.log('set user prefs via routing and probably a component');
    },

    //this is for the movie posters
    //this is ES6 data destructuring- pull the keys and values you need, not the whole project
    loadMovie({name, description, vidsource}) {
      console.log('show me the details');

      this.videotitle = name;
      this.videodescription = description;
      this.videosource = vidsource;

      this.showDetails = true;
    }

  }
});
