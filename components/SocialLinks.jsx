import { getSocialLinks } from "../utils/data";
import Image from "next/image";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import snapchat from "../images/snapchat.svg";
import twitter from "../images/twitter.svg";

const SocialLinks = () => {
  return (
    <div className="barge flex justify-between item-center mt-10">
      <Image src={snapchat} alt={"snapchat"} height="43.13" width="46" />
      <Image src={facebook} alt={"facebook"} height="46" width="24.44" />
      <Image src={instagram} alt={"instagram"} height="46" width="46" />
      <Image src={twitter} alt={"twitter"} height="37.37" width="45.52" />
    </div>
  );
};

export default SocialLinks;
