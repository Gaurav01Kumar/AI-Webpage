export function removeItem([...arr],item){
    const index=arr.indexOf(item)
    index> -1 && arr.splice(index,1)
    return arr;
}
export function closeItem(arr,item){
    const index=arr.indexOf(item);
    if(index=== -1){
        return arr[0]
    }else if(index===arr.length -1 ){
        return arr[arr.length-2]
    }else{
        return arr[index+1]
    }
}