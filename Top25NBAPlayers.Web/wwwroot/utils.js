export const server = 'https://localhost:44328/api';

export function deepCopy(obj) {
    //Loop through keys and recursively call function if property is an object.
    const keys = Object.keys(obj);
    //New object
    const newObj = {};

    for(let i = 0; i < keys.length; i++) {
        if(typeof obj[keys[i]] == 'object') 
            newObj[keys[i]] = deepCopy(obj[keys[i]]);
        
        newObj[keys[i]] = obj[keys[i]];
    }

    return newObj;
}