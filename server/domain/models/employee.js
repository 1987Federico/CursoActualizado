const mongoose=require('mongoose');
const {Schema}= mongoose;


//creo un schema para la bd de mongo
const employeeSchema=new Schema({
    name: {type: String, required:true},
    position:{type: String, required:true},
    office:{type:String, required:true},
    salario:{type: Number, required:true}
});

//Asi se guarda en la bd y los exportos
module.exports=mongoose.model('Employee',employeeSchema);