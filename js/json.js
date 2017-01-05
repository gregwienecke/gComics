{	"users": { 
		"Greg": {
			"name": "Greg", 
			"email": "gregwienencke@gmail.com", 
			"password": "test1"
		},
		"Test": {
			"name": "test", 
			"email": "test@gmail.com", 
			"password": "test2"
		},
		"Sara": {
			"name": "Sara",
			"email": "sarajean.mcdaniel@gmail.com",
			"password": "test3"
		}
	}
}


var json = {
	"users": {
		"Greg": {
			"username": "greg", 
			"email": "greg@test.com", 
			"pw": "test1"
		},
		
		"Test": {
			"username": "test", 
			"email": "test@test.com", 
			"pw": "test2"
		},

		"Sara": {
			"username": "sara", 
			"email": "sara@test.com", 
			"pw": "test3"
		}
	}
};


for(key in json.users){
	console.log(json.users[key].pw);
}





