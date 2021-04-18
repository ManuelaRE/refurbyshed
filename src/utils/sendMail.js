export const sendMail = (name, email, type) => {
  if (type === "order") {
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "refurbyshed@gmail.com",
      Password: "AthenaHack123",
      To: email,
      From: "refurbyshed@gmail.com",
      Subject: "Thank you for you order!",
      Body: `Dear ${name}, \n\n\n\n Thank you for your item purchase and for giving it a second chance at life!!\n\n We are processing your order and will conatact you shortly regarding where and when to collect your item from \n\n\n\n Thank you for helping preserve our planet, \n\n Refurbyshed`,
    });
  }

  if (type === "create") {
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "refurbyshed@gmail.com",
      Password: "AthenaHack123",
      To: email,
      From: "refurbyshed@gmail.com",
      Subject: "See you soon!",
      Body: `Dear ${name},Thank you for taking an interest in our worshop! Please let us know when would suit you best in order to book you in! Thank you for helping preserve our planet, \n\n Refurbyshed`,
    });
  }
};
