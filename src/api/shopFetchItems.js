export const shopFetchItems = async () => {
    try{
        const res = await fetch('http://localhost:3000/clothes')
        return res.json()
    }catch(e){
        return console.error(e)
    }
}