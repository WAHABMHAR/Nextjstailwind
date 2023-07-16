'use client';

import { useState } from "react";

const ContactForm = () => {

  const [user,setUser] = useState({
    username:"",
    email:"",
    phone:"",
    message:""
  });

  const [status ,setStatus] = useState(null);

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setUser(prevUser => ({ ...prevUser, [name]: value }));

  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
      try{
        const response = await fetch('/api/contact',{
          method :'POST',
          headers:{"Content_Type":"application/json"},
          body:JSON.stringify({
            username:user.username,
            email:user.email,
            phone:user.phone,
            message:user.message
          })
        })
        if(response.status === 200){
          setUser({
            username:"",
            email:"",
            phone:"",
            message:""
          })
          setStatus('success')
        }else{
          setStatus('error');
        }

      }catch(e){
          console.log(e)
      }
    

  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col shadow-lg w-[400px] h-fit justify-center items-center border-2 mb-8 p-6">
          <div className="p-4 w-full ">
            <label
              htmlFor="username"
              className="flex flex-col font-light text-sm text-left"
            >
              Enter Your Username
              <input
                type="text"
                name="username"
                placeholder="username"
                className="p-2 border-2 w-[100%]"
                onChange={handleChange}
                value={user.username}

                required
              />
            </label>
          </div>
          <div className="p-4 w-full">
            <label
              htmlFor="email"
              className="flex flex-col font-light text-sm text-left"
            >
              Enter Your Email
              <input
                type="text"
                name="email"
                placeholder="email"
                className="p-2 border-2 w-[100%]"
                onChange={handleChange}
                value={user.email}

                required
              />
            </label>
          </div>
          <div className="p-4 w-full">
            <label
              htmlFor="phone"
              className="flex flex-col font-light text-sm text-left"
            >
              Phone Number
              <input
                type="number"
                name="phone"
                placeholder="phone"
                className="p-2 border-2 w-[100%]"
                onChange={handleChange}
                value={user.phone}

                required
              />
            </label>
          </div>
          <div className="p-4 w-full">
            <label
              htmlFor="message"
              className="flex flex-col font-light text-sm text-left"
            >
              Message
              <textarea
                name="message"
                placeholder="message"
                className="p-2 border-2 w-[100%]"
                
                onChange={handleChange}
                value={user.message}

                rows={5}
              ></textarea>
            </label>
          </div>
          <div className="p-4 w-full">
            {status === 'success' && <p className="text-sm text-green-600">Thank You For Message</p>}
            {status === 'error' &&<p className="text-sm text-red-600">Server error: Please Try Again</p>}
            <button className="p-3  bg-black text-white text-xl rounded-full font-normal hover:bg-white hover:border hover:border-black hover:text-black ">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7057640.573277184!2d63.70848094257672!3d30.262345400241955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1689448060525!5m2!1sen!2s" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  );
};

export default ContactForm;
