const student= {
   name: 'Helsinki',
   age: 23, 
   projects:{
    game:'Two player dice game using JavaScript'
   }
};

const {name,age,projects:{game}}= student;
console. log("Name is :"+ name);
console. log("Age is :"+age);
console. log("Project is :"+game);