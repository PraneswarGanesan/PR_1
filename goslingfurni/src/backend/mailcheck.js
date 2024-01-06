// const nodemailer = require('nodemailer');

// let mailTransporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     type: 'OAuth2',
//     user: 'praneswarganesan@gmail.com',
//     clientId: '878941235559-gja0nmaod8ehdf2rjsukfsoa08l5nig6.apps.googleusercontent.com',
//     clientSecret: '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',
//     refreshToken: '1//04Rm_Sb78iD1TCgYIARAAGAQSNwF-L9IrVr3BH_AAZ0yr8eeeRJ2zwHQBM3SqQR3FGKOrRM28xY9siDurTNist3TzAAvGkVf-5uw'
//   }
// });
// mailTransporter.on('token', token => {
//   console.log('OAuth2 Tokens:', token);
// });

// let mailDetails = {
//   from: 'praneswarganesan@gmail.com',
//   to: '727822tucs155@skct.edu.in',
//   subject: 'Test mail',
//   text: 'Node.js testing mail for GoslingFurni'
// };

// mailTransporter.sendMail(mailDetails, function(err, data) {
//   if (err) {
//     console.error('Error Occurs:', err);
//   } else {
//     console.log('Email sent successfully');
//   }
// });









const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.visignal.com', // Use the SMTP host of the temporary email provider
  port: 587, // Check the documentation of the temporary email provider for the correct port
  secure: false, // Set to true if using a secure connection (TLS)
  auth: {
    type: 'login', // Authentication type, could be 'login' or 'oauth2'
    user: 'fagof46873@visignal.com', // Your temporary email address
    pass: '', // Password is usually not required for temporary email services
  },
});

let mailDetails = {
  from: 'fagof46873@visignal.com',
  to: '727822tucs155@skct.edu.in',
  subject: 'Test mail',
  text: 'Node.js testing mail for GoslingFurni',
};

transporter.sendMail(mailDetails, function(err, data) {
  if (err) {
    console.error('Error Occurs:', err);
  } else {
    console.log('Email sent successfully');
  }
});

