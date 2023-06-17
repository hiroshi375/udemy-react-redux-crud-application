
// function App() {
//   const greeting = "Hi!!";
//   const dom = <h1 className="foo">{greeting}</h1>;
//   return dom;
// }

function calculateDaysBetweenDates(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = end.getTime() - start.getTime();
  const days = diff / (1000 * 60 * 60 * 24);
  return days;
}

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
        // プロパティをmap関数で渡す
        profiles.map((profile, index) => {
          return <User name={profile.name} sex={profile.sex} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}! My gender is {props.sex}.I'm {props.age} years old. 月初から{calculateDaysBetweenDates('2023/6/1','2023/06/17')} 日目です</div>
}

User.defaultProps = {
  sex: "male",
  age: 1
}

export default App;
