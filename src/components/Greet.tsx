

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
}

export const Greet = (props: GreetProps) => {
  return (
    <>
    {
      props.isLoggedIn ? 'Welcome' : 'nie je login'
    }
      <div>{props.name}</div>
      <p>{props.messageCount}</p>
    </>
  );
}