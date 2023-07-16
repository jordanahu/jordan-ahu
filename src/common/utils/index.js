import emailjs from '@emailjs/browser';



async function sendEmail(templateParameter) {

    const { REACT_APP_SERVICE_ID: serviceID,
        REACT_APP_TEMPLATE_ID: templateID,
        REACT_APP_PUBLIC_KEY: publicKey,
    } = process.env;

    // await emailjs.send(serviceID,
    //     templateID,
    //     templateParameter,
    //     publicKey);
      
    console.group("api keys");
    console.log(process.env.REACT_APP_PUBLIC_KEY)
    console.log(templateID)
    console.log(publicKey)
    console.groupEnd()
}


export {
    sendEmail
}