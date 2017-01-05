
var config = {
	apiKey: "AIzaSyC4GWD0WMt8Aew6uxcFJ480MUAoAkqhRDk",
	authDomain: "gcomics-94af0.firebaseapp.com",
	databaseURL: "https://gcomics-94af0.firebaseio.com",
	storageBucket: "gcomics-94af0.appspot.com",
	messagingSenderId: "78650935110"
};

firebase.initializeApp(config);

var dbref = firebase.database().ref().child('users');
dbref.on("value", function(snapshot){
	console.log(snapshot.val());
	var myObj = snapshot.val();
	console.log(myObj.Greg.pw);
}); 	

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://gcomics-94af0.firebaseio.com", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);