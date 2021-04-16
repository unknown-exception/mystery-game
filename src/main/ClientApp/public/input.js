  var players = [
	{ 
		username: "ctibor",
		password: "hello1"
	},
	{ 
		username: "",
		password: ""
	},
	{ 
		username: "",
		password: ""
	}

]

function namePass() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < players.length; i++) {
		
		if(username == players[i].username && password == players[i].password) {
			alert(username + " has logged in")
            return
		}
        else{
            alert("Incorrect username or password")
        }
	}
    
        
    
	
}