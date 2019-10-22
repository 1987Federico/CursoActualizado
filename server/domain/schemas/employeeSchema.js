const employeeSchema = require('../models/employee');

const empSchema = () => {
  const scope = this;

  scope.add = async (emp) => {
    try {
      const newEmployee = new employeeSchema(emp);
      await newEmployee.save();
      return true;
    } catch (error) {
      return false;
    }
  };

  scope.getAll = async () => {
    try {
      const emp = await employeeSchema.find();
      return emp;
    } catch (error) {
      return null;
    }
  };

  scope.getOne = async (id) => {
    try {
      const data = await employeeSchema.findById(id);
      return data;
    } catch {
      return null;
    }
  };

  scope.update = async (emp) => {
    try {
      const empToUpdate = await employeeSchema.findByIdAndUpdate(emp.id);

      empToUpdate.name = emp.name;
      empToUpdate.position = emp.position;
      empToUpdate.office = emp.office;
      empToUpdate.salario=emp.salario

      await empToUpdate.save();
      return true;
    } catch (error) {
      return false;
    }
  };

  scope.delete = async (id) => {
    try {
      await employeeSchema.findByIdAndRemove(id)
      return true;
    } catch (error) {
      return false;
    }
  }

  return scope;

}

module.exports = empSchema();