var User = require('../models/user');

//1. create a new user 
module.exports.createNewUser= function(req, res){
        var newUser  = req.body;
        var email    = newUser.email;
        var username  = newUser.username;
        var password = newUser.password;
        var firstName= newUser.firstName;
        var lastName = newUser.lastName;

    //before saving check user if it exists
    //=====================================
  
  User.findOne({ email: email }, function(err, user) {   
    if (err) { return next(err); }
    if (user) {                                      
      console.log("error: "+ email + " already exists");     
      return res.json({message:email+" already exists"});;                
    } 
    //=====================================
    //if(email && username && password && firstName & lastName){ 
    var addUser = new User({email: email,
      username:username,
        password: password,
        firstName:firstName,
        lastName:lastName}); 

        addUser.save(function(err, user){
            if(err){
                return res.json({error: true});
            }
            res.json({error:false,
                      user: user});
    });
     });
  //}

   };


   //2. get list of all users
module.exports.getllAllUser= function(req, res){ 
    //before saving check user if it exists
    //===================================== 
  User.find({}, function(err, user) {   
        if (err) { 
          return next(err); }
         else{                                      
          console.log(user);     
          return res.json(user);                
         } 
    
     });
   }; 

  //3. get user by userId
module.exports.getUserById = function(req, res){ 
    console.log('Getting user by id:');
    User.findOne({ _id:req.params.userId}).exec(function(err,retrievedUser){
      if (err) { 
        res.send('Error has occurred\n Error:' +err);
      }
      else{
        console.log(retrievedUser);
        res.json(retrievedUser);
      }
});
};
//========================
//4. update user info

module.exports.updateUserInfo= function(req,res){
  var updateUser= req.body;
  var modifiedAt = new Date();
  User.findOneAndUpdate({_id:req.params.userId},
      {$set:{
        email     : updateUser.email,
        username  : updateUser.username,
        password  : updateUser.password,  
        modifiedAt: modifiedAt,
        firstName : updateUser.firstName,
        lastName  : updateUser.lastName 
        }
    },
    {upsert:true}, 

  function(err, updatedUser){
          if(err){
            console.log('Error occurred. Detail Error message: ' +err);
          }else{
            console.log(updatedUser);
            res.send(updatedUser);
            //res.status(204);//User succesfully updated
          }
         });
};

//5. find and delete a User

module.exports.deleteUserById= function(req,res){ 
  var UserId=req.params.userId;
  User.findOneAndRemove({_id:UserId},
         function(err, retrievedUser){
          if(err)  res.send('Error Deleteing');
           else  {res.send("No content found"); 
           //res.json(retrievedUser);
         }
         });

} 
 
//===================================================




