import styles from './App.module.css';

function App() {
  const name ="John";
  const nm = <h2>Ram</h2>
  const user = (
    <div>
      {name}
      {nm}
    </div>
  );
  return (
    <div className="App">
      <h1 className='name'>Inchana</h1>

      <div className= {styles.App}>
        <h2 className={styles.nm}>{name}</h2>
      </div>
      <h2>{name}</h2>
      {nm}
{user}
    </div>
  );
}

export default App;
