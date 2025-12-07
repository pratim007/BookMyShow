const nodemailer = require("nodemailer");

const sendEmail = (emails,subject,html)=>{
    

    const recipientEmailIds = emails.join(" ,");

    // Create a transporter object
    const transporter = nodemailer.createTransport({
       service:'gmail',
        auth: {
        user: 'pratimsen10@gmail.com',
        pass: 'kkpzdkpuhzkdpmgf',
        }
    });

    const mailDetails = {
        from: 'pratimsen10@gmail.com',
        to: recipientEmailIds,
        subject: subject,
        html:html
      };

      // Send the email
    transporter.sendMail(mailDetails, function(error, info){
        if (error) {
        console.log('Error:', error);
        } else {
        console.log(`Email sent successfully to email: ${recipientEmailIds}`);
        }
    });
        

}

module.exports = sendEmail;