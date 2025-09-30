
export function Like(){
 const liked = () =>{
        alert('liked');
  } 
    const disliked = () =>{
        alert('disliked');
    } 
  return(
        <>
        <button onClick={liked}>👍</button>
       <button onClick={disliked}>👎</button>
        </>
    );
}