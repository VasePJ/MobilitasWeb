$(document).ready(function() {
    
  // show and hide logged in user
  var token = $.cookie("token");
  if (Boolean(token) && token != "null") {
    $('#logIn').hide();
    $('#aboutUsLoggedInUser').show();
  } else {
    $('#logIn').show();
    $('#aboutUsLoggedInUser').hide();
  }

// progress
var bar = new ProgressBar.Circle(container, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#006622', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.55);  // Number from 0.0 to 1.0

// second tab animation
var secondAnimation = new ProgressBar.Circle("#container1", {
color: '#aaa',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 4,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
  autoStyleContainer: false
},
from: { color: '#aaa', width: 1 },
to: { color: '#006622', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
  circle.path.setAttribute('stroke', state.color);
  circle.path.setAttribute('stroke-width', state.width);

  var value = Math.round(circle.value() * 100);
  if (value === 0) {
    circle.setText('');
  } else {
    circle.setText(value);
  }
}});
  
secondAnimation.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
secondAnimation.text.style.fontSize = '2rem';
$("#bikeGreenestTranspprtOpt").click(function(){
    secondAnimation.animate(0.70);
});

// third animation
var thirdAnimation = new ProgressBar.Circle("#container2", {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#006622', width: 4 },
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
}});
  
thirdAnimation.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
thirdAnimation.text.style.fontSize = '2rem';
$("#cycleGreenestTranspprtOpt").click(function(){
    thirdAnimation.animate(0.97);
});

// fourth animation
var fourthAnimation = new ProgressBar.Circle("#container3", {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#006622', width: 4 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
}});

fourthAnimation.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
fourthAnimation.text.style.fontSize = '2rem';
$("#elCarGreenestTranspprtOpt").click(function(){
    fourthAnimation.animate(0.70);
});

    // sixt animation
    var sixtAnimation = new ProgressBar.Circle("#container5", {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 1 },
        to: { color: '#006622', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
      
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
        }})
      
        sixtAnimation.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        sixtAnimation.text.style.fontSize = '2rem';
        $("#taxiGreenestTranspprtOpt").click(function(){
            sixtAnimation.animate(0.70);
        });

    // seventh animation
    var seventhAnimation = new ProgressBar.Circle("#container6", {
        color: '#aaa',
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 1 },
        to: { color: '#006622', width: 4 },
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
      
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
        }})
      
        seventhAnimation.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        seventhAnimation.text.style.fontSize = '2rem';
        $("#carShareGreenestTranspprtOpt").click(function(){
            seventhAnimation.animate(0.70);
        });
    //  responsive animations
    // eight animation
    var eightAnimation = new ProgressBar.Circle("#containerResponsiveOne", {
        color: '#aaa',
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 1 },
        to: { color: '#006622', width: 4 },
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
      
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
        }})
      
        eightAnimation.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        eightAnimation.text.style.fontSize = '2rem';
        $("#headingOne").click(function(){
            eightAnimation.animate(0.70);
        });

    // ninth animation
    var ninthAnimation = new ProgressBar.Circle("#containerResponsiveTwo", {
        color: '#aaa',
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 1 },
        to: { color: '#006622', width: 4 },
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);     
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
        }})
      
        ninthAnimation.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        ninthAnimation.text.style.fontSize = '2rem';
        $("#headingTwo").click(function(){
            ninthAnimation.animate(0.70);
        });
        // tenth animation
        var tenthAnimation = new ProgressBar.Circle("#containerResponsiveThree", {
            color: '#aaa',
            strokeWidth: 4,
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 1400,
            text: {
              autoStyleContainer: false
            },
            from: { color: '#aaa', width: 1 },
            to: { color: '#006622', width: 4 },
            step: function(state, circle) {
              circle.path.setAttribute('stroke', state.color);
              circle.path.setAttribute('stroke-width', state.width);
          
              var value = Math.round(circle.value() * 100);
              if (value === 0) {
                circle.setText('');
              } else {
                circle.setText(value);
              }
            }})
          
            tenthAnimation.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            tenthAnimation.text.style.fontSize = '2rem';
            $("#headingThree").click(function(){
                tenthAnimation.animate(0.70);
            });
        // animation eleven
        var elevenAnimation = new ProgressBar.Circle("#containerResponsiveFour", {
            color: '#aaa',
            strokeWidth: 4,
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 1400,
            text: {
              autoStyleContainer: false
            },
            from: { color: '#aaa', width: 1 },
            to: { color: '#006622', width: 4 },
            step: function(state, circle) {
              circle.path.setAttribute('stroke', state.color);
              circle.path.setAttribute('stroke-width', state.width);
          
              var value = Math.round(circle.value() * 100);
              if (value === 0) {
                circle.setText('');
              } else {
                circle.setText(value);
              }
            }})
          
            elevenAnimation.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            elevenAnimation.text.style.fontSize = '2rem';
            $("#headingFour").click(function(){
                elevenAnimation.animate(0.70);
            });

        // animation twelve 
        var twelveAnimation = new ProgressBar.Circle("#containerResponsiveFive", {
            color: '#aaa',
            strokeWidth: 4,
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 1400,
            text: {
              autoStyleContainer: false
            },
            from: { color: '#aaa', width: 1 },
            to: { color: '#006622', width: 4 },
            step: function(state, circle) {
              circle.path.setAttribute('stroke', state.color);
              circle.path.setAttribute('stroke-width', state.width);
          
              var value = Math.round(circle.value() * 100);
              if (value === 0) {
                circle.setText('');
              } else {
                circle.setText(value);
              }
            }})
          
            twelveAnimation.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            twelveAnimation.text.style.fontSize = '2rem';
            $("#headingFive").click(function(){
                twelveAnimation.animate(0.70);
            });

        // animation thirteen

        var thirteenAnimation = new ProgressBar.Circle("#containerResponsiveSix", {
            color: '#aaa',
            strokeWidth: 4,
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 1400,
            text: {
              autoStyleContainer: false
            },
            from: { color: '#aaa', width: 1 },
            to: { color: '#006622', width: 4 },
            step: function(state, circle) {
              circle.path.setAttribute('stroke', state.color);
              circle.path.setAttribute('stroke-width', state.width);        
              var value = Math.round(circle.value() * 100);
              if (value === 0) {
                circle.setText('');
              } else {
                circle.setText(value);
              }
            }})
          
            thirteenAnimation.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            thirteenAnimation.text.style.fontSize = '2rem';
            $("#headingSix").click(function(){
                thirteenAnimation.animate(0.70);
            });

        // animation fourtheen

        var fourtheenAnimation = new ProgressBar.Circle("#containerResponsiveSeven", {
            color: '#aaa',
            strokeWidth: 4,
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 1400,
            text: {
              autoStyleContainer: false
            },
            from: { color: '#aaa', width: 1 },
            to: { color: '#006622', width: 4 },
            step: function(state, circle) {
              circle.path.setAttribute('stroke', state.color);
              circle.path.setAttribute('stroke-width', state.width);         
              var value = Math.round(circle.value() * 100);
              if (value === 0) {
                circle.setText('');
              } else {
                circle.setText(value);
              }
            }})
          
            fourtheenAnimation.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            fourtheenAnimation.text.style.fontSize = '2rem';
            $("#headingSeven").click(function(){
                fourtheenAnimation.animate(0.70);
            });

});