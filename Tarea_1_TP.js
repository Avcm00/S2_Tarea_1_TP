//1. Crea una función nombrada que sume dos números.
function addition(a, b) {
    return a + b;
}
console.log(addition(3, 5));
//2. Escribe una función nombrada que reste dos números.
function subtraction(a, b) {
    return a-b;
}
console.log(subtraction(8,2))
//3. Desarrolla una función nombrada que multiplique dos números.
function multiplication (a, b){
    return a*b;
}
console.log(multiplication(4,6));
//4. Implementa una función nombrada que divida dos números.
function division(a,b){
    return a/b;
}
console.log(division(10,2));
//5. Diseña una función nombrada que calcule el módulo de dos números
function module(a, b){
    return a%b;
}
console.log(module(6,3));
//6. Asigna una función anónima a una variable que eleve un número al cuadrado.
let square = function(x) {
    return x**2; 
}
console.log(square(7));
//7. Usa una función anónima para convertir grados Celsius a Fahrenheit.
let celsiusToFahrenheit= function(celsius) {
    return celsius*9/5+32;
}
console.log(celsiusToFahrenheit(32));
//8. Crea una función anónima que calcule el perímetro de un rectángulo.
let perimeterRectangle= function(length, width){
    return 2*length + 2*width;
}
console.log(perimeterRectangle(6, 4));
//9. Implementa una función anónima que determine si un número es par o impar.
let isPairOrImpair = function(num){
    return num % 2== 0
}
console.log(isPairOrImpair(8));
//10. Escribe una función anónima que devuelva el número mayor entre dos números
let maxNumber = function(a, b){
    return a>b ? a : b;
}
console.log(maxNumber(5, 8));
//11. Desarrolla una función flecha que calcule el área de un círculo.
let  areaCircle = (radius)=>{
    return Math.PI*radius**2
}
console.log(areaCircle(2))
//12. Crea una función flecha que convierta kilómetros a millas.
let  kmToMiles = (km)=>{
    return  km * 0.62137 +` miles`;
}
console.log(kmToMiles(4))
//13. Escribe una función flecha que retorne el nombre completo dado un nombre y apellido.
let fullName = (name, lastname)=> {
    return `${name} ${lastname}`
}
console.log(fullName("Ariel", "Cueva"));
//14. Implementa una función flecha que verifique si un texto contiene la letra 'a'.
let  hasLetterA = (text)=> {
    return text.includes('a')? true : false 
}
console.log(hasLetterA("hola"))
//15. Diseña una función flecha que cuente cuántos elementos en un array son números.
let elementHasArrayIsNumber= (array)=>{
    return array.filter(item => typeof item == 'number');
}
let list=[1,'a',2,'b',3,5]
console.log(elementHasArrayIsNumber(list))
//16. Escribe una función de orden superior que tome una función y la aplique a todos los elementos de un array.
let chain = ['Hello','world', 'How','Are', 'You'];
function addletter(array,ad){
   let add=[]
    for(let i = 0; i < array.length ; i++ ){
       add.push(ad(array[i],i))   
    }
    return add
}
function word_length(word){
     
    return word + ' ' + word.length
}
console.log(addletter(chain,word_length))

//17. Crea una función de orden superior que filtre elementos de un array basándose en una condición dada.
 function filterArray(array,filter){
     let  newArray = []
     for(let i = 0; i< array.length;i++){
         newArray.push(filter(array[i]))    
        }
        return newArray
    }
    function filter(word){
        word[0] == 'H'? word=' ':word
        return word
    }
console.log(filterArray(chain,filter))

//18. Desarrolla una función de orden superior que retorne una nueva función incrementadora.
function callIncrement(x){
    
    function increment(count){
      return count + x
    }
    return increment
}
let  incr = callIncrement(4)
console.log(incr(4))
//19. Implementa una función de orden superior que tome dos funciones como argumentos y elija una para ejecutar basada en una condición.
function selectFunction(number){
 return number %2==0 ? pair(number): impair(number);
}
function pair(n){
    return n+1
}
function impair(n){
    return n*2
}
console.log(selectFunction(5))
//20. Diseña una función de orden superior que modifique un objeto utilizando otra función proporcionada.
let persona_0 = {
    Nombre:'Juan',
    Apellido:'Perez',
    Edad: 31,
    Sexo: 'Quien Sabe',
    Nacionalidad: 'Ecuatoriana'
}
function Object(Sexo,Edad,object){
    objectModifited(Sexo,Edad,object)
    return object
}
function objectModifited(Sexo,Edad,object){
    object.Sexo=Sexo
    object.Edad=Edad
}
let persona_1= new Object('Masculino',31,persona_0)
console.log(persona_1)
//21. Define una función constructora para un objeto "Coche" que tenga propiedades como marca, modelo y año.
function coche(marca,modelo,año){
    this.Marca=marca;
    this.Modelo=modelo;
    this.Año=año;
}
let coche_1=new coche("chevrolet", "Cobalt", 2018)
console.log(coche_1)
//22. Crea una función constructora para un objeto "Libro" con propiedades de autor, título y año de publicación.
function Libreria(autor,titulo,año){
    this.Autor=autor;
    this.Titulo=titulo;
    this.Año=año;
}
let libro_1=new Libreria("Miguel de Cervantes", "Don Quijote de la Mancha", 1605)
console.log(libro_1)
//23. Implementa una función constructora que cree objetos "Usuario" con nombre, correo electrónico y contraseña.
function Usuario(nombre,mail,contraseña){
    this.Nombre=nombre;
    this.Mail=mail;
    this.Contraseña=contraseña;
}
let Usuario_1= new Usuario('Juan','juan@outlook.com','juan123')
console.log(Usuario_1)
//24. Escribe una función constructora para "Producto" con propiedades de nombre, precio y cantidad.
function Producto(nombre,precio,cantidad){
    this.Nombre=nombre;
    this.Precio=precio;
    this.Cantidad=cantidad;
}
let  producto_1 = new Producto ("Pan" , 0.12 , 10)
console.log(producto_1)
//25. Desarrolla una función constructora que inicialice objetos "Estudiante" con nombre, matrícula y carrera.
function Estudiante(nombre,matricula,carrera){
    this.Nombre= nombre;
    this.Matricula= matricula;
    this.Carrera= carrera;
}
let  estudiante_1= new Estudiante ('José Antonio' , 20230104, 'Ingeniería en Sistemas');
console.log (estudiante_1)
//26. Escribe una función recursiva para calcular el factorial de un número.
function Factorial(n){
    if (n==1){
        return 1
    }else{
        return n*Factorial(n-1)
    }
}
console.log(Factorial(3))
//27. Crea una función recursiva que sume todos los números hasta un número dado
function Sumatoria(x){
    if(x==0){
        return 0
    }else{
        return Sumatoria(x-1)+x
    }
}
console.log(Sumatoria(4))
//28. Implementa una función recursiva que encuentre el máximo común divisor (MCD) de dos números.
function MCD(num1,num2){
    if (num2 === 0){
        return  num1
    }else {
        return MCD(num2, num2 % num1)
    }

}
console.log(MCD(15,20))
//29. Diseña una función recursiva que genere la secuencia de Fibonacci hasta un número específico.
function fabonacci(n){
    if (n <= 1){
        return n
    }else{
        return fabonacci(n-1) + fabonacci(n-2)
    }
}
console.log(fabonacci(4))
//30. Desarrolla una función recursiva que invierta una cadena de texto.
function inverse(chain_1){
if (chain_1 == '' || chain_1.length==1){
    return chain_1
} 
return inverse(chain_1.substring(1))+chain_1[0]
}
console.log(inverse('hola'))
//31. Demuestra el uso de una variable global modificándola dentro de una función.
let saludo='Hello'
function global(){
    return  saludo+' World!'
}
console.log(global())
//32. Escribe un código donde una variable local oculte una variable global del mismo nombre.
let variable= 'global'
function ejemplo(){
    let variable = 'local'
    return console.log(variable)
}
console.log(variable)
ejemplo()
//33. Explica mediante un ejemplo cómo las variables locales pueden evitar conflictos de nombres
let variableGlobal= "Estoy en el ámbito global"
function miFuncion(){
    let variableLocal="Estoy en el ámbito local"
    return variableLocal
}
console.log(miFuncion())
console.log(variableGlobal)
//34. Implementa un contador utilizando una variable global.
let contador=0
function incrementarContador(x){
   while (contador<x){
    contador++
}
return contador
}
console.log(incrementarContador(5))
//35. Crea una función que intente modificar una variable local definida en otra función.

function modificarvariable(){
let variable='Inicial'
function modifi(){
    variable='Modificada'
    return variable
}
return modifi()
}
console.log(modificarvariable())
//36. Escribe una función que determine si un año es bisiesto.
function esBisiesto(anyo){
    return anyo % 4 == 0 ? "Es Bisiesto" : "No es Bisiesto";
}
console.log(esBisiesto(2024))
//37. Implementa una función que evalúe tres números y retorne el mayor.
function maximoDeTresNumeros(num1, num2, num3){
    if  (num1 > num2 && num1 > num3) {
        return 'El número uno es el máyor'
    }else if ( num2 > num1 && num2 > num3 ) {
        return 'El número dos es el máyor'
        } else if (num3>num1 && num3>num2) {
            return 'el  numero tres es el máyor'
        }else {
            return 'los numeros son iguales'
        }
}
console.log(maximoDeTresNumeros(1,2,4))
//38. Diseña una función que decida si un estudiante aprueba o reprueba basado en su nota.
function aprobarReprobar(nota){
    if (nota>=70) {
        return "Aprueba"
    }else{
        return "Reprueba"
    }
}
console.log(aprobarReprobar(90))
//39. Crea una función que clasifique una edad en categorías (niño, adolescente, adulto, anciano).
function  clasificarEdad(edad){
    if (edad < 1){
       return "Ingrese una edad real"
        }else if (edad>=1 && edad <= 12) {
            return "Niño"
        }else if (edad >12  && edad<=18) {
            return  "Adolescente"
        }else if (edad >=18 && edad  <=50) {
           return "Adulto"
        }else if(edad>50){
          return "Anciano"  
        }
}
console.log(clasificarEdad(12))
//40. Desarrolla una función que verifique si un usuario tiene acceso basado en su edad.
function validarAcceso(edad){
 return edad <1 ? "Ingrese una edad real":edad <18?"No tienes acceso al contenido":"Si puedes acceder";
}
console.log(validarAcceso(18))
//41. Escribe un bucle while que cuente de 1 a 100.
let contador_1=1;
while (contador<=100) { 
    console.log(contador);
    contador++;
}
//42. Implementa un bucle while que sume los primeros 50 números naturales.
let num = 0;
let suma=0
while(num<50){
    num = num+1;
    suma +=num;
}
console.log(suma)
//43. Crea un bucle while que repita un saludo hasta que el usuario decida parar.
 function parar(x){
    while(x == 'no'){
       let saludo = "hola"
       return saludo, parar(x) 
    }
}
console.log(parar("si"))
//44. Desarrolla un bucle while que encuentre el primer número divisible por 7 en un rango.
let rango= 1,rango_final=100,divisible=1;
while (rango<=rango_final) {
    rango % 7 == 0 ? divisible+=' '+ rango:null ;
     rango++
}
console.log(divisible)
//45. Diseña un bucle while que verifique la entrada del usuario hasta que sea válida.
let edad =true
while(edad == false){
    edad ==false ?console.log('Edad del usuario no valida'):console.log ('La edad es correcta');
}
//46. Escribe una función que use switch para asignar calificaciones (A, B, C, D, F) basado en puntos.
let cal= 88, resultado=''
switch (true){
    case (cal>0 && cal<59):
        resultado= 'F'
        break
    case (cal >=60 && cal <69):
        resultado= 'D'
        break
    case (cal >=70 && cal <79):
        resultado = "C"
        break
    case (cal >=80 && cal <89):
        resultado = 'B'
        break
    case (cal >=90 && cal <=100):
        resultado= 'A'
        break
    default:
        resultado= "Ingrese una Calificacion real"
        break
}
console.log(resultado)
//47. Implementa una función que use switch para responder a diferentes comandos de un chatbot.
 function chatbot(chat){
    let respuesta=''
    switch (chat){
        case "hola":
            respuesta= "hola como estas"
            break
        case "adios":
            respuesta="hasta luego"
            break
        case "ayuda":
            respuesta="En que te puedo ayudar"
        default:
            respuesta= "No te puedo brindar mas informacion"
    }
    return respuesta
 }
 console.log(chatbot("hola"))
 //48. Crea un switch para manejar diferentes tipos de métodos de pago (efectivo, tarjeta, cheque).
 function metodoPago(pago){
    let respuesta=''
    switch(pago){
        case  "Efectivo":
            respuesta="Metodo de Pago Efectivo"
            break;
        case "Tarjeta":
            respuesta="Metodo de Pago Tarjeta"
            break;
        case "Cheque":
            respuesta="Metodo de Pago Cheque"
            break;
        default:
           respuesta = `El Metodo ${pago} no es valido`  
           break  
    }
    return respuesta
}
console.log(metodoPago('Efectivo'))
//49. Desarrolla una función que utilice switch para realizar cálculos básicos (+, -, *, /).
function calculoBasico(num1, operador,num2) {
    let res=0
    switch(operador) {
        case "+":
            res = num1 + num2
            break;
        case "-":
            res = num1 - num2
            break;
        case "*":
            res = num1 * num2
            break;
        case "/":
            if (num2 == 0){
                res = 'No se puede dividir entre cero'
            }else{
               res = num1 / num2  
            }
            break;        
        default:
            res = `La operacion ${operador} no es valida`
            break
    }
            return res
}
console.log(calculoBasico(6,"*",5))
 //50. Diseña un switch para cambiar entre diferentes idiomas de un sitio web.
 function cambioIdioma(idiomaActual,idiomaNuevo) {
    let res=""
    switch (`${idiomaActual}-${idiomaNuevo}`) {
        case "es-en":
            res="Se ha cambiado el idioama de Español a Ingles"
            break;
        case "en-es":
            res= "Se ha cambiado el idioma de Ingles a Español"
            break;
        case  "es-fr":
            res= "Se ha cambiado el idioma de Español a Frances"
            break;
        case "fr-es":
             res= "Se ha cambiado el idioma de Francés a Español"
             break;
          default:
              res=`Los idiomas ${idiomaActual} y/o ${idiomaNuevo} no estan disponibles.`
              break
    }
     return res
 }
 console.log(cambioIdioma( "es","en"))
 //51. Implementa un bucle for que imprima todos los elementos de un array.
 function imprimirArray(arr){
    for (let i=0; i< arr.length ; i++){
     console.log(` ${i+1}  ${arr[i]}`);
    }
    return arr
 }
 console.log(imprimirArray(chain))
 //52. Escribe un bucle for que multiplique todos los elementos de un array.
 function multiplicarArray(arr){
    let mult=1
    for (let i = 0; i < arr.length; i++) {
        mult = mult * arr[i];
    }
    return mult
 }
let  c=[3,4,6]
console.log(multiplicarArray(c))
//53. Crea un bucle for para encontrar el menor número en un array.
function buscarMinimo(arr) {
    let min=arr[0];
    for(let i=0 ; i<arr.length ; i++ ){
        if(min>arr[i]){
           min=arr[i]
       }
    }
   return min
}
console.log(buscarMinimo([7,89,-56,23,]))
//54. Desarrolla un bucle for para verificar si un array contiene un elemento específico.
function contenerElemento(arr , elem ){
    let found=false
    for(let i=0 ; !found && i<arr.length ; i++ ){
        if(elem==arr[i]){
            return true
        }else{}
    }
}
console.log(contenerElemento(c,6))
//55. Diseña un bucle for que copie un array en otro.
function copiarArray(arr){
    let newArr=[];
    for ( let i=0 ; i<arr.length ; i++){
        newArr.push(arr[i]);
    }
    return newArr
}
console.log(copiarArray(c))
//56. Utiliza un bucle do-while para pedir al usuario que ingrese un número hasta que sea mayor que 10.
function  solicitarNumero(num){
let res=''
    do {
    return num<=10? res='Ingrese un numero Mayor que 10':num
} while(num<10)

}
  console.log(solicitarNumero(10)) 
//57. Implementa un for-in para mostrar todas las propiedades de un objeto.
for (clave in persona_0  ) {
    console.log(`${clave}: ${persona_0 [clave]}`)
}
//58. Usa un for-of para iterar sobre un array de nombres y saludar a cada uno.
for(word of chain){
    console.log(word)
}
//59. Crea un forEach para aplicar un descuento del 10% a precios en un array.
c.forEach(function(numero,indice){
    c[indice]=numero-numero*0.10
    console.log(c[indice])
})
//60. Escribe un código que use map para convertir todas las temperaturas de un array de Celsius a Fahrenheit.
let temperatura=[38,22,28,33,18]
let ctf= temperatura.map((t)=>t *9/5 +32);
console.log(ctf)