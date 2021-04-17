export const sendMail = (name, email) => {
  window.Email.send({
    Host: "smtp.gmail.com",
    Username: "refurbyshed@gmail.com",
    Password: "AthenaHack123",
    To: email,
    From: "refurbyshed@gmail.com",
    Subject: "Sending Email using javascript",
    Body: `Well that was easy ${name}!!`,
  }).then((message) => alert(message));
};
