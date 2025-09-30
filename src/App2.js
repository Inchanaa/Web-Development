function App2(){
    const age = 19;
    if(age >= 18 ){
        return <h2>Over age</h2>;
    }
    return(
        <div className="App">Under age</div>
    );
}
export default App2;