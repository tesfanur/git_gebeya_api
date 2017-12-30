var Profile = require('../models/Profile');

//1. create a new Profile 
module.exports.createNewProfile= function(req, res){
        var newProfile  = req.body;
        var profileImage    = newProfile.email;
        var user    = newProfile.user; 

    //before saving check Profile if it exists
    //===================================== 
  Profile.findOne({ user: user }, function(err, Profile) {   
    if (err) { return next(err); }
    if (Profile) {                                      
      console.log("error: "+ email + " already exists");     
      return res.json({message:email+" already exists"});;                
    } 
    //=====================================
    var addProfile = new Profile({profileImage: profileImage,
                                  user: user}); 

        addProfile.save(function(err, Profile){
            if(err){
                return res.json({error: true});
            }
            res.json({error:false,
                      Profile: Profile});
    });
     });
   };


   //2. get list of all Profiles
module.exports.getllAllProfile= function(req, res){ 
    //before saving check Profile if it exists
    //===================================== 
  Profile.find({}, function(err, Profile) {   
        if (err) { 
          return next(err); }
         else{                                      
          console.log(Profile);     
          return res.json(Profile);                
         } 
    
     });
   }; 

  //3. get Profile by ProfileId
module.exports.getProfileById = function(req, res){ 
    console.log('Getting Profile by id:');
    Profile.findOne({ _id:req.params.ProfileId}).exec(function(err,retrievedProfile){
      if (err) { 
        res.send('Error has occurred\n Error:' +err);
      }
      else{
        console.log(retrievedProfile);
        res.json(retrievedProfile);
      }
});
};
//========================
//4. update Profile info

module.exports.updateProfileInfo= function(req,res){
  var updateProfile= req.body;
  var modifiedAt = new Date();
  Profile.findOneAndUpdate({_id:req.params.ProfileId},
      {$set:{
        user          : updateProfile.user,
        profileImage  : updateProfile.profileImage,  
        modifiedAt    : modifiedAt 
        }
    },
    {upsert:true}, 

  function(err, updatedProfile){
          if(err){
            console.log('Error occurred. Detail Error message: ' +err);
          }else{
            console.log(updatedProfile);
            res.send(updatedProfile);
            //res.status(204);//Profile succesfully updated
          }
         });
};

//5. find and delete a Profile

module.exports.deleteProfileById= function(req,res){ 
  var ProfileId=req.params.ProfileId;
  Profile.findOneAndRemove({_id:ProfileId},
         function(err, retrievedProfile){
          if(err)  res.send('Error Deleteing');
           else  {res.send("No content found"); 
           //res.json(retrievedProfile);
         }
         });

} 
 