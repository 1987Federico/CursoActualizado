const empValidation=require('../../domain/validation/validationEmployee');
const empSchema=require('../../domain/schemas/employeeSchema');
const employeeBl=require('../../domain/BL/employeeBl');

const employeeCtrl={};


employeeCtrl.getEmployees=async(req,res)=>{
    
    const data = await empSchema.getAll();
    if (data){
        res.status(200).json(data);
    }else{
        res.status(404).json({
            "success":false,
            "msg":"No employee fouond"
        });
    }   
};

employeeCtrl.getEmployees=async(req,res)=>{
    const salario=req.params.salario;
    console.log(salario);
    const data = await empSchema.getAll();
    if (data){
        const emp=await employeeBl.getSalary(data,salario);
        
        if(emp)
        {
            res.status(200).json(emp);
        }else{
            res.status(500).json({
                "success":true,
                "msg":"No employee salary"
            })
        }
    }else{
        res.status(404).json({
            "success":false,
            "msg":"No employee fouond"
        });
    }   
};


employeeCtrl.getIdEmployees=async(req,res)=>{
    const data=await empSchema.getOne(req.params.id);
    if(data){
        res.status(200).json(data);
    }else{
      res.status(404).json({
          "success":false,
          "msg":"Employee not found"
      });  
    }
};


employeeCtrl.createEmployees=async(req,res)=>{
    const emp=req.body;

    const validation= await empValidation.validate(emp);
    if (validation.success){
        const result=await empSchema.add(emp);
        if(result){
            res.status(200).json({
                "success":result,
                "msg":"employee saved!",
                "date":moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
            });
        }else{
            res.status(500).json({
                "success":result,
                "msg":"No bemployee saved"
            });
        }
    }else{
        res.status(500).json({
            "success":validation.success,
            "msg":validation.messasge
        });
    }
};


employeeCtrl.updateEmployees=async(req,res)=>{
    const validation=empValidation.validate(req.body);
    if (validation.success){
        const emp={
            id:req.params.id,
            name:req.body.name,
            office:req.body.office,
            salary:req.body.salary
        }
        const result=await empSchema.update(emp);
        if (result){
            res.status(200).json({
                "success":result,
                "msg":"employee update",
                "date":moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
            })
        }else{
            res.status(500).json({
                "success":result,
                "msg":"No employee update"
            });
        }
    }else{
        res.status(400).json({
            "success":validation.ok,
            "msg":validation.messasge
        });
    }
};

employeeCtrl.deleteEmployees=async(req,res)=>{
    const result=await empSchema.delete(req.params.id);
    if(result){
        res.status(200).json({
            "success":result,
            "msg":"employee deleteado",
            "date":moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        })
    }else{
        res.status(404).json({
            "error":result,
            "msg":"employee not found"
        })
    } 
};

module.exports=employeeCtrl;