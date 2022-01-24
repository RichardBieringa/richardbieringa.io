import SocialLink from "./SocialLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center mt-8">
      <div className="flex mb-3 space-x-4">
        <SocialLink
          kind="email"
          href="mailto:richardbieringa@gmail.com"
          size="30"
        />
        <SocialLink
          kind="github"
          href="https://github.com/RichardBieringa/"
          size="30"
        />
        <SocialLink
          kind="linkedin"
          href="https://www.linkedin.com/in/richardbieringa/"
          size="30"
        />
      </div>
      <span className="mb-8 text-sm text-gray-500">{`Richard Bieringa • © ${currentYear}`}</span>
    </footer>
  );
};

export default Footer;
