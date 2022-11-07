//Here we will create actions that we want to perform
export const inc = () =>{
    return{
        type : "increment" // This will represent the name
    }
}

export const dec = () => {
    return{
        type : "decrement"
    }
}