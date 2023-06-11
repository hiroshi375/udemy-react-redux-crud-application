
// function App() {
//   const greeting = "Hi!!";
//   const dom = <h1 className="foo">{greeting}</h1>;
//   return dom;
// }

const App = () => {
  const profiles = [
    { name: "Taro", sex: "male", age: 10},
    { name: "Jecika", sex: "female", age: 14},
    { name: "Takeshi", sex: "male", age: 16},
    { name: "Jack", sex: "male", age: 12},
    { name: "NoName"},
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} sex={profile.sex} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}! My gender is {props.sex}.I'm {props.age} years old.</div>
}

User.defaultProps = {
  sex: "male",
  age: 1
}

export default App;
