import Image from "next/image";

import light from "../../public/images/about/sun-01.svg";
import dark from "../../public/images/about/vector.svg";
import Link from "next/link";

const DarkSwitch = () => {
  return (
    <div id="my_switcher" className="my_switcher">
      <ul>
        <li>
          <Link
            href="https://web.whatsapp.com/send?phone=7871207631&text="
            target="_blank"
          >
            <i className="fab fa-whatsapp whatsapp-icon" data-toggle="tooltip" title="WhatsApp" style={{fontSize:"24px", color:"forestgreen"}}></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DarkSwitch;
