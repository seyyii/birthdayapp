export function verifyPassword(password) {
    let result = {}
    if (!password){
        result = {error:'Password is empty,please enter'}
        return result
    }
    if(password.length <=3){
        result={
            error:'Password too short'
        }
        return result;
    }
    return{
        error:false,
        value:password
    }

}
export function verifyName(name) {
    let result = {}
    if (!name){
        result = {error:'field is empty,please enter'}
        return result
    }
    if(name.length <=3){
        result={
            error:'too short,minimun of 3 words'
        }
        return result;
    }
    return{
        error:false,
        value:name
    }

}