var bddNumerica= [];
var contador = 0; 
var BtnIngresar = document.getElementById("BtnIngresar");
var BtnMostrar = document.getElementById("BtnMostrar");
var campoDatos = document.getElementById('datos'); 
var mensaje = document.getElementById('error');
var tabla = document.getElementById('tabla');
var mayorMenor = document.getElementById('mayorMenor');

BtnIngresar.addEventListener('click', GuardarNumeros);
BtnMostrar.addEventListener('click',ordenarNumeros);

function GuardarNumeros(){    
    if(bddNumerica.length < 5){
        if(campoDatos.value!=''){
                bddNumerica.push(campoDatos.value);
                contador++;
                console.log('dato #'+contador+' guardado exitosamente');
                campoDatos.value = '';
                mensaje.value ='';
        }else{
            mensaje.value ='usted aun no a ingresado un numero';
        }    
    }else{
        mensaje.value = 'usted ya no puede ingresar mas numeros :'   ;
        alert(bddNumerica);
        campoDatos.value = '';
    }      
}

function ordenarNumeros(){

        //PROBANDO EL CREATE CON UN FOR
        /*for(let i=arreglo.length; i<=0 ;i++){
            tabla.innerHTML +=  `<td class=\"MisItem\">${arreglo[i]}</td>`
        }*/
        alert('el arreglo resivido fue: '+bddNumerica)
        console.log('arreglo sin ordenar: ' + bddNumerica);
        var aux;

        //VARIACION EN METODO BURBUJA
        /*for(let i=0 ; i<arreglo.length ; i++){
            for(let j= i+1; j<=arreglo.length ; j++){
                if(arreglo[i]<arreglo[j]){
                    aux = arreglo[j];
                    arreglo[j] = arreglo[i];
                    arreglo[i] = aux;
                }  
                
            }
            console.log('arreglo en iteracion: '+i+'  '+bddNumerica);


        }*/
        for(let i=0 ;i<bddNumerica.length;i++){
            for(let j=bddNumerica.length-1 ; j>= i; j--){
                if(bddNumerica[j-1] > bddNumerica[j]){
                    aux = bddNumerica[j-1];
                    bddNumerica[j-1] = bddNumerica[j];
                    bddNumerica[j] = aux;
                }
            }
        }
            
        console.log('arreglo ordenado');
        for(let i = 0; i<bddNumerica.length ; i++){
                console.log(bddNumerica[i]);
        }
    
    //AGREGANDO EL ARREGLO A LA TABLA 
    /*for(let i =0; i <arreglo.length; i++){
        console.log('numero ' +arreglo[i]);
    }

    for(let i=arreglo.length; i<=0 ;i++){
        tabla.innerHTML +=  `<td class=\"MisItem\">${arreglo[i]}</td>`
    }
      arreglo.forEach(item => {
        tabla.innerHTML +=  `<td class=\"MisItem\">${item}</td>` 
    })

    `<li >el numero mayor es${arreglo[0]}</li>`
    mayorMenor.innerHTML+= `<li >el numero mayor es${arreglo[0]}</li>`;
    mayorMenor.innerHTML+= `<li >el numero menor es${arreglo[4]}</li>`;
    */
}






