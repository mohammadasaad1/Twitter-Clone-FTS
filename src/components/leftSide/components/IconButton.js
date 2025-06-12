export default function IconButton({ Icon, name }) {
  return (
    <li>
      <a href="#">
        {Icon && <Icon />}
        <span>{name}</span>
      </a>
    </li>
  );
}
