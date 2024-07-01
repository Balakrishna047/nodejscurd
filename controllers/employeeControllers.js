
const Employee=require('../models/Employee');

const createEmployee = async (req, res) => {
    try{
        const {name,email,phone,city}=req.body;

        const newEmployee= new Employee({
            name,
            email,
            phone,
            city
        })
        await newEmployee.save();
        res.status(201).json(newEmployee)
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}
const getEmployee=async (req,res)=>{
    try{
        const employee=await  Employee.find()
        res.status(200).json(employee);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}

const singleEmployee=async (req,res)=>{
    try{
        const selectemployee=await  Employee.findById(req.params.id)
        if(!selectemployee) return res.status(404).json({message:"Employee is not found"})
        res.status(200).json(selectemployee);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}

const updateEmployee=async (req,res)=>{
    try{
        const {name,email,phone,city}=req.body;
        const updateemployee=await  Employee.findByIdAndUpdate(req.params.id,{name,email,phone,city})
        if(!updateemployee) return res.status(404).json({message:"Employee is not found"})
        res.status(200).json(updateemployee);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}

const deleteEmployee=async (req,res)=>{
    try{
        const deleteemployee=await  Employee.findByIdAndDelete(req.params.id)
        if(!deleteemployee) return res.status(404).json({message:"Employee is not found"})
        res.status(204).send("Deleted successfully")
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}


module.exports = {createEmployee,getEmployee,singleEmployee,updateEmployee,deleteEmployee}









/**********************************    ******************************************************************************  
 *   ***Bala*** writing own  type 11-04-2024          crud operations GET/POST/PUT/DELETE     
 * ******************************************************************* **********************************************/



// const Employee=require('../models/Employee');

// const createEmployee= async (req,res)=>{
//     try{
//             const {name,email,phone,city}=req.body;
//             const newEmployee= new Employee({
//                 name,email,phone,city
//             })
//             await newEmployee.save();
//             res.status(201).json(newEmployee);
//     }
//     catch (error){
//         console.log("Error is:",error)
//         res.status(500).json({message:"Server error"})
//     }
// }
// const allEmployes =async (req,res)=>{
//     try{
//         const employees = await Employee.find()
//         res.status(200).json(employees);
//     }
//     catch (error){
//         console.log("Error is:",error)
//         res.status(500).json({message:"Server error"})
//     }
// }
// const selectEmployes =async (req,res)=>{
//     try{
//         const singleemployees = await Employee.findById(req.params.id)

//         if(!singleemployees) return res.status(404).json({message:"Employees not found"});
//         res.status(200).json(singleemployees);
//     }
//     catch (error){
//         console.log("Error is:",error)
//         res.status(500).json({message:"Server error"})
//     }
// }
// const updateEmployes =async (req,res)=>{
//     try{
//         const {name,email,phone,city}=req.body;
//         const singleemployees = await Employee.findByIdAndUpdate(req.params.id,{
//             name,email,phone,city
//         })

//         if(!singleemployees) return res.status(404).json({message:"Employees not found"});
//         res.status(200).json(singleemployees);
//     }
//     catch (error){
//         console.log("Error is:",error)
//         res.status(500).json({message:"Server error"})
//     }
// }


// const deleteEmployes =async (req,res)=>{
//     try{
//         const singleemployees = await Employee.findByIdAndDelete(req.params.id)

//         if(!singleemployees) return res.status(404).json({message:"Employees not found"});
//         res.status(204).send("Employees deleted");
//     }
//     catch (error){
//         console.log("Error is:",error)
//         res.status(500).json({message:"Server error"})
//     }
// }


// module.exports={createEmployee,allEmployes,selectEmployes,updateEmployes,deleteEmployes}