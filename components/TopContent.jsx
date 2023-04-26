import { getCurrentUser } from "../utils/data";
import Image from "next/image";
const { name, email, avatar } = getCurrentUser();

const TopContent = () => {
  return (
    <div>
      <div className="barge flex justify-between item-center mt-10">
        <Image src={avatar} alt={"Bear"} height="165" width="165" />
      </div>
      <div className="h1 barge flex justify-between item-center ">{name}</div>
    </div>
  );
};

export default TopContent;
