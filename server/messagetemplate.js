const CONTACT_EMAIL_TEMPLATE = (name,email,subject,message) => {
  return `
  <p><strong>Subject:</strong> ${subject}</p>
  <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
  `;
};

module.exports = {
  CONTACT_EMAIL_TEMPLATE
};