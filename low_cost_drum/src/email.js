const nodemailer = require('nodemailer');

//step1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'projetobateria123@gmail.com',
        pass: 'senha123bateria'
    }
});

let mailOption = {
    from: 'projetobateria123@gmail.com',
    to: 'pedrohenriqueacardoso@hotmail.com',
    subject: 'Teste',
    text: 'Ttesteteatanatmsdlçfmalsdmfsalfaçlsd daçslkdças'
};

transporter.sendMail(mailOption, function(err, data){
    if(err){
        console.log('eerrroorr', err);
    }
    else{
        console.log('email sent!!!!');
    }
});