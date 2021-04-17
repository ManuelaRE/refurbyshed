export const sendMail = (name, email) => {
  window.Email.send({
    Host: "smtp.gmail.com",
    Username: "refurbyshed@gmail.com",
    Password: "AthenaHack123",
    To: email,
    From: "refurbyshed@gmail.com",
    Subject: "Thank you for you order!",
    Body: `Dear ${name}, \n\n\n\n Thank you for your item purchase and for giving it a second chance at life!!\n\n We are processing your order and will conatact you shortly regarding where and when to collect your item from \n\n\n\n Thank you for helping preserve our planet, \n\n Refurbyshed`,
  }).then((message) => alert(message));
};
