const display =(num) => {
    result.value+=num
}

const ac =() =>{
    result.value=''
}

const backspace = () =>{
    result.value=result.value.slice(0,-1)
    
}

const equal = () => {
    try {
        result.value=eval(result.value)
        
    } catch (error) {
        setTimeout(() => {
            result.value = 'ERROR'
            
        }, 100);
        
    }
}

const clock =() =>{
    const time=new Date()

    const hour = time.getHours()
    const min = time.getMinutes()
    const sec = time.getSeconds()

    timer.innerHTML = `${hour}:${min}:${sec} ${hour>12?'PM':'AM'}`
    setTimeout(() => {
        clock()
        
    }, 1000);

}

clock()