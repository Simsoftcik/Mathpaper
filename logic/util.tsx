export function trimString(str: string): string{

    if(str.length < 50) return str

    const trimmedString = str.substring(0,50);
    const lastSpaceIndex = trimmedString.lastIndexOf(' ');
    const result = str.substring(0, lastSpaceIndex);
    if(result.endsWith('.') || result.endsWith(',')) {
        return result.slice(0, result.length-1)+'...'
    }
    else{
        return result+'...'
    }
    
}
