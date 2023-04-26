import { getLinksLinks } from "../utils/data";

const NonSocialLinks = () => {
  const link = getLinksLinks(1);

  return (
    <div className="mt-10">
      {link.map((link) => (
        <div
          className="barge flex justify-between item-center mt-5"
          key={link.id}
        >
          <a href={link.url} className="button">
            {link.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default NonSocialLinks;
