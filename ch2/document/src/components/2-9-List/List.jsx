export default function List() {
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <ul>
        {numbers.map((item) => {
          return <li key={item.toString()}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
