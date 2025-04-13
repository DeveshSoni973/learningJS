/* the start of class */

class UserId{
    constructor(username, email, password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

/* BEHIND THE SCENES 

ie what would happen in prototypic js instead of class for same implementation*/
function UserId2(username, email, password){
    this.username=username
    this.email=email
    this.password=password
}
UserId2.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

const nein=new UserId2('sam', 'sam@123', 'rash')
console.log(nein.encryptPassword());



const nemo=new UserId('Nemo', 'waifu@raiden.inazuma', 'raiden+=4')
console.log(nemo.encryptPassword());
console.log(nemo.changeUsername());



/* ---------------------------------------real shit starts here-------------------------  */

class User{
    constructor(username){
        this.username=username
    }
    login(){
        console.log(`${this.username} is logged in.`)
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}


const apoorvaMaam=new Teacher('Apoorva', 'a@1123', '1233')

apoorvaMaam.addCourse()


const devesh=new User('devesh', 'devBhaiOP', '1123')
devesh.login()
apoorvaMaam.login()

console.log(devesh===apoorvaMaam)// false
console.log(apoorvaMaam instanceof Teacher) //true
console.log(apoorvaMaam instanceof User) //true

console.log(apoorvaMaam) //Teacher { username: 'Apoorva', email: 'a@1123', password: '1233' }
console.log(Teacher) //[class Teacher extends User]




/* PROPerties of class in JS */

class User007{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(this.username, 'is logged in');        
    }

    static createId(){
        return '123'
    }
}

const hitesh=new User007('hitesh')
// console.log(hitesh.createId());


class Teacher007 extends User007{
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher007('iphone', 'i@phone')
iphone.logMe()