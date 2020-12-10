// const nodemailer = require('nodemailer')

// const { EMAIL, PASSWORD } = process.env

// module.exports = {
//     email: async (req, res) => {
//       const { email } = req.body
//       console.log(email)
  
//       try {
//         let transporter = nodemailer.createTransport({
//           service: 'Yahoo',
//           auth: {
//             user: EMAIL,
//             pass: PASSWORD
//           }
//         });
//         let info = await transporter.sendMail({
//           from: EMAIL, 
//           to: `<${email}>`,
//           subject: "Welcome to The Melting Pot",
//           text: "Did it work?", 
//           html: "Did it work??" 
//         }, (err, res) => {
//           if (err) {
//             console.log('err', err)
//           } else {
//             console.log('res', res)
//             res.status(200).send(info)
//           }
//         })
//       } catch (err) {
//         console.log(err)
//         res.sendStatus(500)
//       }
//     }
  // }