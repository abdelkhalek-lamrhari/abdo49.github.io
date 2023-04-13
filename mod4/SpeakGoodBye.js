(function (window) {

  var byeSpeaker = {};
  byeSpeaker.name=name;

  var speakWord = "Good Bye";

  byeSpeaker.sayBye = function (byeSpeaker) {
    console.log(speakWord + " " + byeSpeaker);
  }

  window.byeSpeaker = byeSpeaker;
})(window);


