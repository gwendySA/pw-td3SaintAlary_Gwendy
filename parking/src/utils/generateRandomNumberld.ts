// @ts-ignore
export function generateRandomNumberId (): number{
 const aleatoire= Math.random();
 const id = Math.floor(aleatoire * 900000) + 100000;
 return id ;
}
