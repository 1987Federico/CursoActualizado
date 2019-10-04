const Employee=require('../models/employee');
const employeeCtrl={};


employeeCtrl.getEmployees=async(req,res)=>{
    const emp = await Employee.find();
    res.json(emp);
        
};

employeeCtrl.createEmployees=async(req,res)=>{
    const employee=new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salario:req.body.salario
    });
    await employee.save();
    res.json({
            'status':'Empleado guardado'
        });
};

employeeCtrl.getIdEmployees=async(req,res)=>{
    console.log(req.params.id);
    const emp=await Employee.findById(req.params.id);
    res.json({
        emp
    });

};

employeeCtrl.editEmployees=async(req,res)=>{
    const{id}=req.params;
    const employee={
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salario:req.body.salario
    };
    console.log(id);
    await Employee.findByIdAndUpdate(id,{$set:employee},{new:true},(err,employeesDb)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            employee: employeesDb
        });
    });
        
};

employeeCtrl.deleteEmployees=async(req,res)=>{
    let id=req.params.id;
    await Employee.findByIdAndDelete(id);
    console.log(id);    
    res.json({status:'eliminado'});
};

module.exports=employeeCtrl;