//together with draggable


export default function DOM(){
    const resetContent=()=>{
        document.getElementById('board1').innerHTML=''
        document.getElementById('setup').innerHTML=''
        document.getElementById('board2').innerHTML=''
    }



    return {resetContent}
}