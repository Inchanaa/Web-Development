export function Ternary(){
    const age = 19;
    const isGreen = true;
    return(
        <div className="ter">
        {age >= 18 ? <h2>over age</h2> : <h2>under age</h2>}
        <h1 style = {{color:  "red"}}>inline css</h1>
        <h2 style={{color: isGreen ? "green" : "yellow"}}>color checking</h2>
        {isGreen && <button>button</button>}
        </div>
    );
}