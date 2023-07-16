import emailjs from '@emailjs/browser';



async function sendEmail(templateParameter) {

    const { REACT_APP_SERVICE_ID: serviceID,
        REACT_APP_TEMPLATE_ID: templateID,
        REACT_APP_PUBLIC_KEY: publicKey,
    } = process.env;

    await emailjs.send(serviceID,
        templateID,
        templateParameter,
        publicKey);

}


export {
    sendEmail
}