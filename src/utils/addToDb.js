const getStoredReadList = ()=>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        return JSON.parse(storedListStr);
    }
    else{
        return [];
    }
}
const addToStoredReadList = id =>{
    const storedReadList = getStoredReadList();
    if(storedReadList.includes(id)){
        alert("Item already exists")
    }
    else{
        storedReadList.push(id);
        localStorage.setItem("read-list",JSON.stringify(storedReadList));
    }
}
const getStoredWishList = ()=>{
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        return JSON.parse(storedListStr);
    }
    else{
        return [];
    }
}
const addToStoredWishList = id =>{
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        alert("Item already exists")
    }
    else{
        storedWishList.push(id);
        localStorage.setItem("wish-list",JSON.stringify(storedWishList));
    }
}
export {addToStoredReadList,getStoredReadList,addToStoredWishList,getStoredWishList};