import emailjs from '@emailjs/browser';
import {Heading, Button} from '@chakra-ui/react';

export default function Email() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ay5f0ve', 'template_apfxnfn', e.target, 'lhYBI77pjyDtEWny5');
        alert ("Your message send successful");
    }

    return (
        <div className='eamil'>
            <Heading size='lg'>Contact US</Heading>
            <form action="" className='contact_form' onSubmit={sendEmail}>
                <label htmlFor="emailFrom">Your email: </label>
                <input type="text" name="email_from" id="emailFrom" className='email_from' />
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" cols="30" rows="10" className='message_box'></textarea>
                <Button type="submit">
                    Send
                </Button>
            </form>
        </div>
    );
}