/**
 * 
 * @param {string} txt - input test to be slice
 * @param {number} [max=50] - the maximum length
 * @returns 
 */
export function txtSlicer(txt:string,max:number=50){
if (txt.length >= max)return `${txt.slice(0,max)}...`;
return txt;
}