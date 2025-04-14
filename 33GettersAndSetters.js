class User{
    constructor(email, password){
        this.email=email
        this.password=password
    }


    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }


    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password=value+'abc'
    }
}


kaivsh=new User('kav@ish.co', 'Kakku')

console.log(kaivsh);
console.log(kaivsh.password)//KAKKUABC
console.log(kaivsh.email)//KAV@ISH.CO


/* 
lemme explain what happens

when we used password, we set a set and get function of the same name password , 
referencin that whenever password is being 'set', do the following operations
and whenever password is getting called, 'get', do the following operations

password for Kavish is Kukku

by the use of set
the password stored in backend is Kakkuabc (setter doing the +abc)

and when it is called, the getter gives the upper
*/




//------------GET and SET using function----------------------




function User2(email, password){
    this._email = email;
    this._password = password;

    
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toLowerCase()
        },
        set: function(value){
            this._password = value+'ABC'
        }
    })
}

const raj = new User2("raj@bhai.op", "Khaman")

console.log(raj.email);
console.log(raj.password);
console.log(raj)

//having error in password setter 



//-------------------------Get and Set using Object--------------------------


const User3 = {
    _email: 'kartik@johnsena.com',
    _password: "nowUcME",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password= value+'Abc'
    }
}

const kartik = Object.create(User3)
console.log(kartik.email);
console.log(kartik.password)
//same error setter not working