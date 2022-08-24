/*  Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color.
 Haz una función que devuelva una lista con todas las ovejas que sean de color 
 rojo y que además su nombre contenga tanto las letras n Y a, sin importar el
 orden, las mayúsculas o espacios. */


function contarOvejas(ovejas) {
    const regex1 = /[a]/gi;
    const regex2 = /[n]/gi;

    // aquí tu magia
    let newOvejas = []
    ovejas.map(oveja => {
        if(oveja.color === "rojo"&& regex1.test(oveja.name) && regex2.test(oveja.name)) {
            newOvejas.push(oveja)
        }
    });
    return newOvejas
    // return ovejas
  }
  
  const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
  
  contarOvejas(ovejas)