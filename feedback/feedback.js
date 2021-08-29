var database;
var submit;
var email;
var nomen;
var submitYes;
var feed;
var country;
var index = 0;
var gameState = 0;
// var response, responseJSON, dateTime, year, month, date, day, timezone, dayLightSavingTime;
var heading;
var p;
function setup(){
    database = firebase.database();
    submitBtn = select('#submit1');
    email = select('#email');
    nomen = select('#name');
    submitYes = select('#bool');
    feed = select('#feedback');
    country = select('#Country');
    heading=select('#heading');
}

function writeUserData(name, email, YN, nation, sentence, mth) {
  var userIndex = '/'+name+index+email;
  console.log(index);
  firebase.database().ref(userIndex).set({
    username: name,
    email: email,
    country: nation,
    bool : YN,
    feedback: sentence,
    data: mth
  });
}

function draw(){
  if(gameState===1){
    submitBtn.hide();
    email.hide();
    nomen.hide();
    country.hide();
    feed.hide();
    submitYes.hide();
    heading.hide();
  }
  else{
  }
}

function mousePressed(){
  submitBtn.mousePressed(()=>{
    writeUserData(nomen.value(), email.value(), submitYes.value(),country.value(),feed.value(), ["month "+month(), "year "+year(), "day "+day()]);
    index = email;
    gameState=1;
  })
}

function newWindow(){
  window.open("thanks.html");
  closeWindow();
  console.log("new window opened");
}

function closeWindow() {
  let new_window =
      open(location, '_self');

  // Close this window
  new_window.close();

  return false;
}
