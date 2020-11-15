//functiony classa ovurdi mug
function createUser (fName, lName, uName, eMail, pWord) {
    const user = {
      firstName: fName,
      lastName: lName,
      username: uName,
      email:  eMail,
      password: pWord,
    }
  
    return user;
  }
  
  class User {
    constructor(fName, lName, uName, eMail, pWord) {
      this.firstName = fName;
      this.lastName = lName;
      this.username = uName;
      this.email =  eMail;
      this.password = pWord;
    }
  }
  
  const john = new User('John', 'Doe', 'jdoe', 'jdoe@example.com','123');
  
  console.log(john.username)
  
  //men edenim
  class Student {
    constructor(fName, lName, uName, eMail, pWord) {
      this.firstName = fName;
      this.lastName = lName;
      this.username = uName;
      this.email =  eMail;
      this.age = '12';
    }
  }
  const maral = new Student('Maral', 'Doe', 'jdoe', 'jdoe@example.com','12');
  
  console.log(maral)
  //mug edeni
  class Student {
      constructor(fName, lName, uName, email, password,pName,pPhone,grade,tName){
           this.firstName =fName;
           this.lastName = lName;
           this.username = uName;
           this.emailAddress = email;
           this.password = password;
           this.parentName= pName;
           this.parentPhone=pPhone;
           this.grade= grade;
           this.teacherName=tName;
      }
  }
  const ali = new Student('Ali', 'Smith', 'jsmith', 'janesmith@example.com', '321', "Veli", "80648165", "5","John")
  


  class User {
    constructor(fName, lName, uName, eMail, pWord) {
      this.firstName = fName;
      this.lastName = lName;
      this.username = uName;
      this.email =  eMail;
      this._password = pWord;
    }
  
    get password () {
      return 'You are not able to see the password.';
    }
  
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  
  
  class Student {
    constructor(fName, lName, uName, eMail, pWord,pName,pPhone,grade,branch,tName){
      this.firstName = fName;
      this.lastName = lName;
      this.username = uName;
      this.emailAddress = eMail;
      this._password = pWord;
      this.parentName  = pName;
      this.parentPhone = pPhone;
      this.grade = grade;
      this.branch = branch;
      this.teacherName = tName;
    }
  
  get password () {
      return 'You are not able to see the password.';  
  }
  fullName() {
      return this.firstName + ' ' + this.lastName;
  }
  classroomName() {
      return this.grade + ' ' + this.branch;
  }
  }
