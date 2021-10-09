function GuestGreeting() {
  return <h1>Plz Sign up.</h1>;
}

function UserGreeting(props) {
  return (
    <h1>
      {props.name && props.name + ","} Welcome{" "}
      {props.count ? `It's ${props.count} times` : null}
    </h1>
  );
}

function Greeting(props) {
  return props.isLoggedIn ? (
    <UserGreeting count={0} name="훈" />
  ) : (
    <GuestGreeting />
  );
}

export default function Condition() {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
