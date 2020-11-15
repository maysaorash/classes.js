//men edenim

class SchoolMember {
    constructor(fName, lName, uName, eMail, pWord){
        this.firstName = fName;
        this.lastName = lName;
        this.username = uName;
        this.emailAddress = eMail;
        this._password = pWord; 
    }
    }
    
    class Teacher extends SchoolMember {
    constructor(fName, lName, uName, eMail, pWord, experianceYears){
      super(fName, lName, uName, eMail, pWord)
    this.experiance = experianceYears;
    }
    }
    
    class Student extends SchoolMember {
    constructor(fName, lName, uName, eMail, pWord,pName,grade,branch,tName ){
      super(fName, lName, uName, eMail, pWord)
     this.parentName  = pName;
        this.grade = grade;
        this.branch = branch;
        this.teacherName = tName;
    }
    }
    
    const devid = new SchoolMember('Devid', 'Desidero', 'alides', 'alid@example.com', '321');
    
    const mark = new Teacher('Mark', 'Smith', 'alides', 'markd@example.com', '321', 10);
    
    const ali = new Student('Ali', 'Desidero', 'alides', 'alid@example.com', '321', 'Veli', 5, 'A', 'John');
    console.log(devid, mark, ali)

    //mug edeni
    
class SchoolMember {
    constructor(fName, lName, uName, eMail, pWord) {
      this.firstName = fName;
      this.lastName = lName;
      this.username = uName;
      this.emailAddress = eMail;
      this._password = pWord;
    }
  
    get password() {
      if(username === this.username && password === this._password){
        return this._password;
      }
      return 'You are not able to see the password'
    }
  }
  
  class Teacher extends SchoolMember {
    constructor(fName, lName, uName, eMail, pWord){
      super(fName, lName, uName, eMail, pWord);
    }
  }
  
  const veli = new Teacher('Veli', 'Doe', 'VeliDoe','vdoe@example.com', 'ab12yu45');
  
  class Student extends SchoolMember{
    constructor(fName, lName, uName, eMail, pWord,pName,pPhone,grade,branch,tName){
      super(fName, lName, uName, eMail, pWord);
      this.parentName  = pName;
      this.parentPhone = pPhone;
      this.grade = grade;
      this.branch = branch;
      this.teacherName = tName;
    }
  }
  
  const ali = new Student('Ali', 'Desidero', 'alides', 'alid@example.com', '321', 'Veli', '080648165', 5, 'A', 'John');
  
  
  
  const jack = new SchoolMember('Jack', 'Sparrow', 'jsp', 'jsp@example.com', 'yuf678dj!');
  
  // const username = prompt('Enter username');
  // const password = prompt('Enter password');