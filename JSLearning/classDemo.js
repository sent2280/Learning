class HomePage {

    URL = "http://example.com"
    path = "/samplePath"
    static pageName = "home page"

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

    static getPageName(){
        return this.pageName;
    }
}



class OrderPage extends HomePage {

    __result="";
    constructor(orderId,createdDate,paymentStatus,userName,password,login){
        super(userName,password,login);
        this.orderId = orderId;
        this.createdDate = createdDate;
        this.paymentStatus = paymentStatus;
    }

    get orderStatus(){
       return this.__result;
    }

    set orderStatus(status){
        this.__result = (status == 'success' ?  "success" : "failed");
    }
}

const homePage = new HomePage("Kumar","TestAbc","login");

console.log("homePage = ",homePage);
console.log("static prop = ",HomePage.pageName);
console.log("static function = ",HomePage.getPageName());

const orderPage = new OrderPage(101,"11-11-24","failed","user1","pass1","login1");
console.log("orderPage = ",orderPage);
orderPage.orderStatus = 'success';
console.log("orderStatus = ",orderPage.orderStatus);


let display = ()=> {console.log("Hello world")};

//passing construtor just for learning purpose, there is no reason to pass
//constructor in page object module
// module.exports = HomePage;
module.exports.display = display;
//const homePage = new HomePage("user","pass1234","test123");
// console.log(homePage.getLoginButton());