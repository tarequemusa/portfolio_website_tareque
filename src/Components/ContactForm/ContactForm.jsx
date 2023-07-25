import {FaEnvelope, FaFacebookMessenger, FaLocationArrow, FaWhatsapp} from 'react-icons/fa';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import {Slide} from 'react-awesome-reveal';
import {Link} from 'react-router-dom';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v9xrxhs', 'template_3pjhiek', form.current, 'H9JIxefJwKnHcjJf4')
            .then((result) => {
                console.log(result.text);
                console.log("Message Sent Successfully");
                form.current.reset();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Message Sent Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Slide direction='up'>
            <section className='shadow-2xl py-16 w-full' id='contact'>
                <h1 className="font-bold text-center my-12" style={{fontSize: '2em'}}>Contact Me</h1>

                <div className='mx-auto px-10'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
                        <form className='gap-6 flex flex-col' ref={form} onSubmit={sendEmail}>
                            <input type="text" placeholder="Your Name" name="user_name" className="input input-bordered input-info w-full py-8" required />
                            <input type="email" placeholder="Your Email" name="user_email" className="input input-bordered input-info w-full py-8" required />
                            <textarea className="textarea textarea-info" placeholder="Your Message" name="message" required></textarea>
                            <div>
                                <button className="btn btn-outline btn-info flex items-center justify-center mb-12 p-6 content-center max-w-xs shadow-[5px_5px_0px_0px_rgba(109,40,217)]"><input type="submit" value="Send Message" /></button>
                            </div>
                        </form>
                        <div className='grid sm:grid-cols-1 lg:grid-cols-2 content-start mx-auto gap-4'>
                            <div className='flex items-center justify-center border h-16 px-10 border-info gap-2 py-2 xs:grid-cols shadow-md hover:scale-105 duration-500 rounded-lg shadow-purple-500'>
                                <span className='text-info' style={{fontSize: '2em'}}><FaWhatsapp /></span> +8801635163483
                            </div>
                            <div className='flex items-center justify-center border h-16 px-4 border-info gap-2 py-2 xs:flex-row shadow-md hover:scale-105 duration-500 rounded-lg shadow-orange-500'>
                                <span className='text-info' style={{fontSize: '2em'}}><FaEnvelope /></span> tareque.web@gmail.com
                            </div>
                            <div className='flex items-center justify-center border h-16 px-10 border-info gap-2 py-2 xs:grid-cols-1 shadow-md hover:scale-105 duration-500 rounded-lg shadow-sky-500'>
                                <span className='text-info' style={{fontSize: '2em'}}><FaFacebookMessenger /></span><Link to="https://m.me/tareque.musa" target='_blank'>Messenger</Link>
                            </div>
                            <div className='flex items-center justify-center border h-16 px-10 border-info gap-2 py-2 xs:grid-cols-1 shadow-md hover:scale-105 duration-500 rounded-lg shadow-lime-500'>
                                <span className='text-info' style={{fontSize: '2em'}}><FaLocationArrow /></span> Dhaka, Bangladesh
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Slide>
    );
};

export default ContactForm;