class HomePage {

    constructor(userName,password,loginButton){
        this.userName = userName;
        this.password = password;
        this.loginButton = loginButton;
    }

    getUserNameTextbox(){
        return this.userName;
    }

    getPasswordTextbox(){
        return this.password;
    }

    getLoginButton(){
        return this.loginButton;
    }
}

let display = ()=> {console.log("Hello world")};

//passing construtor just for learning purpose, there is no reason to pass
//constructor in page object module
// module.exports = HomePage;
module.exports.display = display;
//const homePage = new HomePage("user","pass1234","test123");
// console.log(homePage.getLoginButton());