import { useEffect, useState } from "react";

export default function withLoading(Component) {
  return (props) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => {
        clearTimeout(timer);
      };
    }, []);

    return loading ? <p>loading...</p> : <Component {...props} />;
  };
}
