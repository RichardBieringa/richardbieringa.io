import Image from "next/image";

interface Props {
  kind: string;
  href: string;
  size: string;
}

const SocialLink = ({ kind, href, size }: Props) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <Image src={`/social/${kind}.svg`} width={size} height={size} />
    </a>
  );
};

export default SocialLink;
