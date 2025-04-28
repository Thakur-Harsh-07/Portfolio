const Contact = require('../Model/Contact');
const mailSender = require('../Utils/mailSender');
exports.contactUs = async (req,res) => {

    try{
        const{name, email, message} = req.body;
        const find = await Contact.findOne({email});
        if(find){
            return res.status(400).json({
                success:false,
                message:"Email Already Exists",
            })
        }
        if(!name || !email || !message){
            return res.status({
                success:false,
                message:"All Entries Required",
            })
        }
        try{
            const adminEmail = process.env.MAIL_USER; // Using the same email as configured in .env
            const adminSubject = "New Portfolio Form Submitted";
            const adminMessage = `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `;
        
            await mailSender(
              adminEmail,
              adminSubject,
              adminMessage
            );
            const result = await Contact.create({name,email,message});
            console.log(result);
            return res.status(200).json({
            success:true,
            data:result,
            message:"Form Submitted"
        })
        
           
        }
        catch(e){
            console.error(e);
            return res.json({
                success:false,
                message:"something went wrong"
            })
        }
        
    }
   catch(e){
    console.log(err);
    return res.status(500).json({
        success:false,
        message:e.message,
    })

   }
    
}