import { Company } from "../models/company.model.js";

export const registerCompany = async(req,res) => {
    try{
        const {companyName, website, location} = req.body;
        if(!companyName){
            return res.status(400).json({
                message:"Company name is required.",
                success:false
            });
        }
        let company = await Company.findOne({name:companyName});
        if(company){
            return res.status(400).json({
                message:"You can't register same company",
                success:false
            })
        };
        company = await Company.create({
            name: companyName,
            website,
            location,
            userId: req.userId,
        });

        return res.status(201).json({
            message: "company registered successfully",
            company,
            success:true
        })
    } catch (error) {
        return res.status(500).json({
            message:error,
            success:false
        })
    }
}

export const getCompany = async(req,res) => {
    try{
        const userId = req.userId; //logged in userid companies should come
        const companies = await Company.find({ userId });
        if(!companies){
            return res.status(400).json({
                message:"Componies not found",
                success:false
            });
        }
        return res.status(200).json({
            companies,
            success: true
        })
    }
    catch(error){
        console.log(error);
    }
}
//get company by company id
export const getCompanyById = async(req,res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if(!company){
            return res.status(404).json({
                message:"comapny not fount",
                success:false
            })
        }
        return res.status(200).json({
            company,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}
export const updateCompany = async (req,res) => {
    try {
        const {name, description, website, location} =req.body;
        const file =req.file;
        //cloudinary comes here

        const updateData = {name, description, website, location};
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, {new: true});

        if(!company){
            return res.status(404).json({
                message:"company not found",
                success:false
            })
        }

        return res.status(200).json({
            message:"company information updtaes",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}