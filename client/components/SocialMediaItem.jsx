function SocialMediaItem({ link}) {
  return (
    <li>
    <a href={link.url} target="_blank" rel="noopener noreferrer">
      <img src={`../assets/icons/${link.img}`} alt="linkedin icon"></img>
    </a>
  </li>
  );
}

export default SocialMediaItem;
