
    const convertirFarenheitaCelsius=(tempFarenheit)=>{
        return new Promise ((resuelve, rechaza) =>{
            if(tempFarenheit<-200){
                let msjError = 'ERROR, VALOR NEGATIVO, ingrese valor sobre -200';
                resuelve(msjError)
            }else{
                setTimeout(()=>{
                    let tempCelsius = (5/9)*(tempFarenheit -32);
                    resuelve (tempCelsius.toFixed(2));
                },3000);
            }
        })

    };
    //funcion asincrona
const convertidorTemperatura = async ()=>{
    
    //ubicamos la caja de temperatura donde va ir la conversion
    let parrafoCelsius = document.getElementById('celsius');
    parrafoCelsius.innerText='Calculando Temperatura...';
    //recibimos farenheit
    let cajasFarenheit = document.getElementsByClassName('farenheit');
    let valorTempFarenheit = cajasFarenheit[0].value;
    let valorTempCelsius = await convertirFarenheitaCelsius(valorTempFarenheit);
    let respuesta = valorTempCelsius +' °C';
    parrafoCelsius.innerText = respuesta;
    
}

 const asignarEvento =()=>{
     let btnConvertir = document.getElementById('btnConvertir');
     btnConvertir.addEventListener('click', convertidorTemperatura);
 };