const mongodb =require('mongoose');
const mongoose_unique_validation= require('mongoose-unique-validator')

const ApiUser =mongodb.Schema({
refrence_uuid:{type:string ,required:true},
content_type:{type:string,required:true},
key:{type:string,required:true},
});

ApiUserMondel.plugin(mongoose_unique_validation);

module.exports('ApiUser',ApiUserMondel);