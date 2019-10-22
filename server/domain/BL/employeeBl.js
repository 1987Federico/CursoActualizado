const employeeBl={};

employeeBl.getSalario=async(data,salario)=>{
   let emp=data.filter(element=>element.salario > salario)
   return emp; 
};



module.exports=employeeBl;

