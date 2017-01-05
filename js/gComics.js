var stock = [
	{
		id: "bs",
		title: "Black Science",
		author: "Rick Remender",	
		photo: "images/blackscience.png",
		price: 4 
	},
	{
		id: "dc",
		title: "Deadly Class",
		author: "Rick Remender",		
		photo: "images/deadlyclass.png",
		price: 4 
	},
	{
		id: "ew",
		title: "East Of West",
		author: "Jonthan Hickman",
		photo: "images/eastofwest.png",
		price: 4 			
	},
	{
		id: "fa",
		title: "Fables",
		author: "Bill Willingham",
		photo: "images/fables.jpg",
		price: 4 			
	},
	{
		id: "hl",
		title: "Head Lopper",
		author: "Willingham",
		photo: "images/headlopper.png",
		price: 4 			
	},
	{
		id: "ir",
		title: "Invisible Republic",
		author: "Gabriel Hardman",
		photo: "images/irepub.png",
		price: 4 			
	},
	{
		id: "is",
		title: "Island",
		author: "Emma Rios",
		photo: "images/island.jpg",
		price: 4 			
	},
	{
		id: "lo",
		title: "Low",
		author: "Rick Remender",
		photo: "images/low.png",
		price: 4 			
	},
	{
		id: "od",
		title: "ODYC",
		author: "Matt Fraction",
		photo: "images/odyc.png",
		price: 4 			
	},
	{
		id: "pd",
		title: "Pretty Deadly",
		author: "Kelly DeConnick",
		photo: "images/pd.jpg",
		price: 4 			
	},
	{
		id: "se",
		title: "Seven To Eternity",
		author: "Rick Remender",
		photo: "images/seven.png",
		price: 4 			
	},
	{
		id: "tg",
		title: "Tokyo Ghost",
		author: "Rick Remender",
		photo: "images/tokyoghost.png",
		price: 4 			
	},
];

// SHOP
function shop(id){
	console.log('hello');
	$("#gallery").addClass('hidden');
	$("#shopDiv").removeClass('hidden');

	var comicPhoto = document.getElementById("comicPhoto");
	var comicTitle = document.getElementById("comicTitle");
	var comicAuthor = document.getElementById("comicAuthor");
	var comicPrice = document.getElementById("comicPrice");
	
	comicPhoto.innerHTML = ("<img src='../" + getPhoto(id) + "' style='width: 150px'>");
	comicTitle.innerHTML = ("<p><strong>Title</strong>   " + getTitle(id) + "</p>");
	comicAuthor.innerHTML = ("<p><strong>Author</strong>   " + getAuthor(id) + "</p>")
	comicPrice.innerHTML = ("<p><strong>Price</strong>   $" + getPrice(id) + "</p>")
};

function getTitle(id){
	for(var i = 0; i<stock.length; i += 1){
		if(stock[i].id == id){
			return stock[i].title;
		}
	};
};

function getAuthor(id){
	for(var i = 0; i<stock.length; i += 1){
		if(stock[i].id == id){
			return stock[i].author;
		};
	};	
};

function getPhoto(id){
	for(var i = 0; i<stock.length; i += 1){
		if(stock[i].id == id){
			return stock[i].photo;
		};
	};	
};

function getPrice(id){
	for(var i = 0; i<stock.length; i += 1){
		if(stock[i].id == id){
			return stock[i].price;
		};
	};	
};

// Users and Passwords
var users = {
	Greg: "hljk1were",
	Sara: "password", 
	Test: "123"
};


// LOG IN / REGISTER
function loginClicked(){
	var user = document.getElementById("username");
	var pass = document.getElementById("password");
	
	var usermatch = false;
	var passmatch = false;

	for(var name in users){
		if(name == user.value){
			usermatch = true;
		};
	};

	for(var key in users){
		if(users[key] == pass.value){
			passmatch = true;
		};
	};

	if(usermatch && passmatch){
		$("#signin").addClass('hidden');
		$("#welcome").removeClass('hidden');
		var welcome = document.getElementById("welcome");
		welcome.innerHTML = ("<h1>Welcome!</h1><h2>Signed in as " + user.value + "</h2>");
	} else {
		alert("Incorrect username or password");
	};
};

function registerClicked(){
	var user = document.getElementById("username");
	var pass = document.getElementById("password");

	var usermatch = false;

	for(var name in users){
		if(name == user.value){
			usermatch = true;
		};
	};

	if (user.value == "" || pass.value == ""){
		alert("Please fill all required fields");
	} else if (usermatch){
		alert("Username already exists");
	} else {
		$("#signin").addClass('hidden');
		$("#welcome").removeClass('hidden');
		var welcome = document.getElementById("welcome");
		welcome.innerHTML = ("<h1>Welcome!</h1><h2>Signed in as " + user.value + "</h2>");			
	}
};

// CONTACT FORM
function hide(){
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var message = document.getElementById("message");

	

	if (name.value == "" || email.value == "" || message.value == ""){
		alert("Please fill all required fields");
	} else {
		console.log(name.value);
		$("#contact").addClass('hidden');
		$("#thanks").removeClass('hidden');	
	};
};


// SEARCH
$("#search").keyup(function(event){
    if(event.keyCode == 13){
    	var search = document.getElementById("search");

    	var match = false;

    	for(var i = 0; i < stock.length; i += 1){
    		if(stock[i].title.toLowerCase() == search.value.toLowerCase() || stock[i].author.toLowerCase() == search.value.toLowerCase()){
    			shop(stock[i].id);
    			match = true;
    			break;
    		};
    	}; 

    	if(!match){
    		search.value = "No Results";
    	} else {
     		$("#gallery").addClass('hidden');
    		$("#shopDiv").removeClass('hidden');    		
    	};
    };
});






