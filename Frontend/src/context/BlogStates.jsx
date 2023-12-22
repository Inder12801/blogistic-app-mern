import BlogContext from "./BlogContext";

const BlogStates = (props) => {
  const state = {
    name: "Inderjeet",
    age: 21,
  };
  return (
    <BlogContext.Provider value={state}>{props.children}</BlogContext.Provider>
  );
};
