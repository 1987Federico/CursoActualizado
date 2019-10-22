const employeeBl={};

employeeBl.getSalary=async(data,salario)=>{
   console.log(salario);
   console.log(data);
   let emp=data.filter(element=>element.salario > salario)
   return emp; 
};



module.exports=employeeBl;

