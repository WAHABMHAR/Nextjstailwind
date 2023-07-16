import Link from "next/link";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";

const ContactCards = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-3 mt-5">
        <div className="w-[350px] h-[200px] shadow-2xl place-content-center">
          <div className="flex flex-col h-full justify-center items-center">
            <i>
              <MdEmail className="text-red-700" />
            </i>
            <h2>Email</h2>
            <p>Monday to Friday Expected </p>
            <p>Response time : 72 Hours</p>
            <Link
              href={`mailto:wahabmhar@gmail.com`}
              className="font-bold text-red-700"
            >
              Send Email <span>&gt;</span>
            </Link>
          </div>
        </div>
        <div className="w-[400px] h-[200px] shadow-2xl place-content-center">
          <div className="flex flex-col h-full justify-center items-center">
            <i>
              <MdVoiceChat className="text-red-700" />
            </i>
            <h2>Live Chat</h2>
            <p>Weekdays: 9 AM — 6 PM ET </p>
            <p>Weekends: 9 AM — 5 PM ET</p>
            <Link
              href={`mailto:wahabmhar@gmail.com`}
              className="font-bold text-red-700"
            >
              Chat Now <span>-&gt;</span>
            </Link>
          </div>
        </div>
        <div className="w-[400px] h-[200px] shadow-2xl place-content-center">
          <div className="flex flex-col h-full justify-center items-center">
            <i>
              <MdForum className="text-red-700" />
            </i>
            <h2>Community Forum</h2>
            <p>Monday to Friday Expected </p>
            <p>Response time : 72 Hours</p>
            <Link
              href={`mailto:wahabmhar@gmail.com`}
              className="font-bold text-red-700"
            >
              Ask The Community <span>-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCards;
