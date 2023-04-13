(function (window) {

  var helloSpeaker = {};
  helloSpeaker.name=name;

  var speakWord = "Hello";

  helloSpeaker.sayHello = function(helloSpeaker) {
    console.log(speakWord + " " + helloSpeaker);
  }

  window.helloSpeaker = helloSpeaker;
})(window);


