import Link from "next/link";
import { MdEmail } from "react-icons/md";
import ContactCards from "../component/ContactCards";
import ContactForm from "../component/ContactForm";

const contact = () => {
  return (
    <>
      <h1 className="font-extrabold text-7xl text-center mt-4">Contact Us</h1>
      <ContactCards />
      <section className="text-center text-5xl font-extrabold mt-8 flex flex-col justify-center items-center">
        <h2 className="mb-7">
          We'd love to hear <span className="text-red-700 mx-4"> from you </span>
        </h2>
        <ContactForm />
      </section>
    </>
  );
};

export default contact;
