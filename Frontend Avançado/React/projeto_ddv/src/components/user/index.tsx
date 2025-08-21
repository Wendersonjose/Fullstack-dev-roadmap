export type UserProps = {
  name: string;
  occupation: string;
  onClick?: () => void; 
};


export function User({ name, occupation, onClick }: UserProps): JSX.Element {
  return (
    <li onClick={onClick}>
      <strong>{name}</strong> — {occupation}
    </li>
  );
}
