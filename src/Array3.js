export function Array(){
    const names = ["vijay", "jake", "kate","dave"];

    return(
        <div >
            {names.map((name, key) =>{
                return <h1 >{key}.  {name}</h1>;
})}
        </div>
    );
}