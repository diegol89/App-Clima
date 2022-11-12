

    let temperaturaValor = document.getElementById('temperatura-valor')  
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')  
    
    let ubicacion = document.getElementById('ubicacion')  
    let iconoAnimado = document.getElementById('icono-animado') 

    let vientoVelocidad = document.getElementById('viento-velocidad') 

    let temp1 = document.getElementById('temp1')
    const tiempoTranscurrido = Date.now(); // VARIABLE PARA LA FECHA
           //ubicación por ciudad
          // const url = `https://api.open-meteo.com/v1/forecast?latitude=-38.72&longitude=-62.27&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m&timezone=auto&start_date=2022-11-12&end_date=2022-11-18`
              const url = 'https://api.open-meteo.com/v1/forecast?latitude=-38.72&longitude=-62.27&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m&timezone=America%2FSao_Paulo&past_days=7'
           //console.log(url)

           fetch(url)
            .then( response => { return response.json()})
            .then( data => {
             // console.log(data)

             

               //DEVUELVE ARRAY DE TEMPERATURA TERMICA
               let temperaturarray = []
              let temparray = data.hourly.temperature_2m;
                for(item of temparray){
                  temperaturarray.push(item);
                                  }
                  
               // console.log(temperaturarray);
                temperaturaValor.textContent=temparray[15];

                
                let temperaturarraydom = []
                let temparraydom = data.hourly.temperature_2m;
                  for(item of temparraydom){
                    temperaturarraydom.push(item);
                                    }
                    
                //  console.log(temperaturarray);
                  tabletempdom.textContent=temparray[31];

                  let temperaturarraylunes = []
                let temparraylunes = data.hourly.temperature_2m;
                  for(item of temparraylunes){
                    temperaturarraylunes.push(item);
                                    }
                    
                 // console.log(temperaturarray);
                  tabletemplunes.textContent=temparray[46];

                  let temperaturarraymartes = []
                  let temparraymartes = data.hourly.temperature_2m;
                    for(item of temparraymartes){
                      temperaturarraymartes.push(item);
                                      }
                      
                   // console.log(temperaturarray);
                    tabletempmartes.textContent=temparray[61];

                    let temperaturarraymiercoles = []
                    let temparraymiercoles = data.hourly.temperature_2m;
                      for(item of temparraymiercoles){
                        temperaturarraymiercoles.push(item);
                                        }
                        
                     // console.log(temperaturarray);
                      tabletempmiercoles.textContent=temparray[76];

                      let temperaturarrayjueves = []
                      let temparrayjueves = data.hourly.temperature_2m;
                        for(item of temparrayjueves){
                          temperaturarrayjueves.push(item);
                                          }
                          
                       // console.log(temperaturarray);
                        tabletempjueves.textContent=temparray[91];

                        let temperaturarrayviernes = []
                        let temparrayviernes = data.hourly.temperature_2m;
                          for(item of temparrayviernes){
                            temperaturarrayviernes.push(item);
                                            }
                            
                        //  console.log(temperaturarray);
                          tabletempviernes.textContent=temparray[106];






                //DEVUELVE ARRAY DE SENSACION TERMICA
                let sensaciontermicarray = []
              let sencterarray = data.hourly.apparent_temperature;
                for(item of sencterarray){
                  sensaciontermicarray.push(item);
                                  }
              //  console.log(sensaciontermicarray);
                termica.textContent=sensaciontermicarray[0];

                let sensaciontermicarraydom = []
              let sencterarraydom = data.hourly.apparent_temperature;
                for(item of sencterarraydom){
                  sensaciontermicarraydom.push(item);
                                  }
               // console.log(sensaciontermicarray);
                tabletermicadom.textContent=sensaciontermicarray[15];

                let sensaciontermicarraylunes = []
              let sencterarraylunes = data.hourly.apparent_temperature;
                for(item of sencterarraylunes){
                  sensaciontermicarraylunes.push(item);
                                  }
               // console.log(sensaciontermicarray);
                tabletermicalunes.textContent=sensaciontermicarray[30];

                let sensaciontermicarraymartes = []
              let sencterarraymartes = data.hourly.apparent_temperature;
                for(item of sencterarraymartes){
                  sensaciontermicarraymartes.push(item);
                                  }
               // console.log(sensaciontermicarray);
                tabletermicamartes.textContent=sensaciontermicarray[45];

                let sensaciontermicarraymiercoles = []
              let sencterarraymiercoles = data.hourly.apparent_temperature;
                for(item of sencterarraymiercoles){
                  sensaciontermicarraymiercoles.push(item);
                                  }
               // console.log(sensaciontermicarray);
                tabletermicamiercoles.textContent=sensaciontermicarray[60];

                let sensaciontermicarrayjueves = []
                let sencterarrayjueves = data.hourly.apparent_temperature;
                  for(item of sencterarrayjueves){
                    sensaciontermicarrayjueves.push(item);
                                    }
                 // console.log(sensaciontermicarray);
                  tabletermicajueves.textContent=sensaciontermicarray[75];

                  let sensaciontermicarrayviernes = []
                let sencterarrayviernes = data.hourly.apparent_temperature;
                  for(item of sencterarrayviernes){
                    sensaciontermicarrayviernes.push(item);
                                    }
                 // console.log(sensaciontermicarray);
                  tabletermicaviernes.textContent=sensaciontermicarray[90];







                //DEVUELVE ARRAY DE PRECIPITACIONES
                let precipitacionarray = []
              let preciarray = data.hourly.precipitation;
                for(item of preciarray){
                  precipitacionarray.push(item);
                                  }
               // console.log(precipitacionarray);
                preci.textContent=precipitacionarray[0];

                let precipitacionarraydom = []
                let preciarraydom = data.hourly.precipitation;
                  for(item of preciarraydom){
                    precipitacionarraydom.push(item);
                                    }
               //   console.log(precipitacionarray);
                  tableprecidom.textContent=precipitacionarray[15];

                  let precipitacionarraylunes = []
                let preciarraylunes = data.hourly.precipitation;
                  for(item of preciarraylunes){
                    precipitacionarraylunes.push(item);
                                    }
              //    console.log(precipitacionarray);
                  tableprecilunes.textContent=precipitacionarray[30];

                  let precipitacionarraymartes = []
                  let preciarraymartes = data.hourly.precipitation;
                    for(item of preciarraymartes){
                      precipitacionarraymartes.push(item);
                                      }
               //     console.log(precipitacionarray);
                    tableprecimartes.textContent=precipitacionarray[45];

                    let precipitacionarraymiercoles = []
                  let preciarraymiercoles = data.hourly.precipitation;
                    for(item of preciarraymiercoles){
                      precipitacionarraymiercoles.push(item);
                                      }
               //     console.log(precipitacionarray);
                    tableprecimiercoles.textContent=precipitacionarray[60];

                    let precipitacionarrayjueves = []
                  let preciarrayjueves = data.hourly.precipitation;
                    for(item of preciarrayjueves){
                      precipitacionarrayjueves.push(item);
                                      }
               //     console.log(precipitacionarray);
                    tableprecijueves.textContent=precipitacionarray[75];

                    let precipitacionarrayviernes = []
                  let preciarrayviernes = data.hourly.precipitation;
                    for(item of preciarrayviernes){
                      precipitacionarrayviernes.push(item);
                                      }
                //    console.log(precipitacionarray);
                    tablepreciviernes.textContent=precipitacionarray[90];






                

                //DEVUELVE ARRAY DE VELOCIDAD DE EL VIENTO
                let velocidadvientoarray = []
              let velvienarray = data.hourly.windspeed_10m;
                for(item of velvienarray){
                  velocidadvientoarray.push(item);
                                  }
             //   console.log(velocidadvientoarray);
                vientovelocidad.textContent=velocidadvientoarray[0];

                let velocidadvientoarraydom = []
              let velvienarraydom = data.hourly.windspeed_10m;
                for(item of velvienarraydom){
                  velocidadvientoarraydom.push(item);
                                  }
            //    console.log(velocidadvientoarray);
                tablevientodom.textContent=velocidadvientoarray[15];

                let velocidadvientoarraylunes = []
                let velvienarraylunes = data.hourly.windspeed_10m;
                  for(item of velvienarraylunes){
                    velocidadvientoarraylunes.push(item);
                                    }
            //      console.log(velocidadvientoarray);
                  tablevientolunes.textContent=velocidadvientoarray[30];

                  let velocidadvientoarraymartes = []
                let velvienarraymartes = data.hourly.windspeed_10m;
                  for(item of velvienarraylunes){
                    velocidadvientoarraymartes.push(item);
                                    }
             //     console.log(velocidadvientoarray);
                  tablevientomartes.textContent=velocidadvientoarray[45];

                  let velocidadvientoarraymiercoles = []
                let velvienarraymiercoles = data.hourly.windspeed_10m;
                  for(item of velvienarraymiercoles){
                    velocidadvientoarraymiercoles.push(item);
                                    }
             //     console.log(velocidadvientoarray);
                  tablevientomiercoles.textContent=velocidadvientoarray[60];

                  let velocidadvientoarrayjueves = []
                  let velvienarrayjueves = data.hourly.windspeed_10m;
                    for(item of velvienarrayjueves){
                      velocidadvientoarrayjueves.push(item);
                                      }
               //     console.log(velocidadvientoarray);
                    tablevientojueves.textContent=velocidadvientoarray[75];

                    let velocidadvientoarrayviernes = []
                    let velvienarrayviernes = data.hourly.windspeed_10m;
                      for(item of velvienarrayviernes){
                        velocidadvientoarrayviernes.push(item);
                                        }
               //       console.log(velocidadvientoarray);
                      tablevientoviernes.textContent=velocidadvientoarray[90];







                //DEVUELVE ARRAY DE FECHA Y HORA
                let fechahoraarray = []
                let fechhsarray = data.hourly.time;
                for(item of fechhsarray){
                fechahoraarray.push(item);
                                  }
                

                //DEVUELVE LA FECHA ACTUAL EN EL FORMATO QUE SE ENCUENTRA EN EL ARRAY
                const hoy = new Date(tiempoTranscurrido);
                hoyiso = hoy.toISOString()
                hoyiso = hoyiso.substring(0, hoyiso.length - 14);
                console.log("dia de hoy segun la norma iso " +hoyiso);     
                
                
                //ESTE FOREACH SOLO DEJA EL AÑO EL MES Y EL DIA Y QUITA LA HORA
                let fechacorrectadeapi = '';
                var diaactual='';
                fechahoraarray.forEach(fecha => {
                fechacorrectadeapi = fechacorrectadeapi + fecha.substring(0, fecha.length - 6) + " "
                });
                //ESTA FUNCION SOLO DEJA RESULTADOS IDENTICOS Y LIMITA A 1 SOLO RESULTADO
                var uno = [];
                
                const findElement = (array, day) => {
                  for (let i = 0; i < array.length; i++) {
                    const element = array[i];
                    if (element == day) {
                      return element;
                    }
                  }
                  return -1;
                }
                console.log(findElement(fechacorrectadeapi, hoyiso));
                /*
                function eldiaes(filtrodecantidad){
                 // return filtrodecantidad.fecha = hoyiso
                 return filtrodecantidad.fecha == ' 2022-11-13 '
                  
                }*/
                //diaactual =eldiaes(fechacorrectadeapi);
                console.log("el dia es "+eldiaes(fechacorrectadeapi));
                
                ubicacion.textContent=diaactual;//MUESTRA EL DIA DE HOY EN EL HTML

                //MUESTRA EL NRO DEL INDICE DEL RESULTADO BUSCADO EN EL ARRAY
                var indice = fechacorrectadeapi.indexOf(diaactual);

                //dasdas = fechacorrectadeapi.findInde;

                //var indice = fechacorrectadeapi.indexOf('2022-11-15');
                console.log("Este es el indice de diaactual "+indice);
               // console.log("Este es la candidad en filtrodecantidad "+filtrodecantidad);
               // console.log("esta es la fechacorrectadeapi "+ fechacorrectadeapi);
              // console.log("Este es el fechahoraarray "+fechahoraarray);


              fechacorrectadeapi.forEach(fecha => {
                fecha = indice ? console.log('se encontro el dia') : console.log('no we')
              });

                console.log(fechacorrectadeapi.findIndex());

               

                let fechahoraarraydom = []
                let fechhsarraydom = data.hourly.time;
                  for(item of fechhsarraydom){
                    fechahoraarraydom.push(item);
                                    }
                //  console.log(fechahoraarraydom);
                  fechayhoradom.textContent=fechahoraarray[35];


                  let fechahoraarraylunes = []
                let fechhsarraylunes = data.hourly.time;
                  for(item of fechhsarraylunes){
                    fechahoraarraylunes.push(item);
                                    }
              //    console.log(fechahoraarraylunes);
                  fechayhoralunes.textContent=fechahoraarray[59];

                  let fechahoraarraymartes = []
                let fechhsarraymartes = data.hourly.time;
                  for(item of fechhsarraymartes){
                    fechahoraarraymartes.push(item);
                                    }
              //    console.log(fechahoraarraymartes);
                  fechayhoramartes.textContent=fechahoraarray[83];

                  let fechahoraarraymiercoles = []
                  let fechhsarraymiercoles = data.hourly.time;
                    for(item of fechhsarraymiercoles){
                      fechahoraarraymiercoles.push(item);
                                      }
                 //   console.log(fechahoraarraymiercoles);
                    fechayhoramiercoles.textContent=fechahoraarray[107];

                    let fechahoraarrayjueves = []
                    let fechhsarrayjueves = data.hourly.time;
                      for(item of fechhsarrayjueves){
                        fechahoraarrayjueves.push(item);
                                        }
                 //     console.log(fechahoraarrayjueves);
                      fechayhorajueves.textContent=fechahoraarray[131];

                      let fechahoraarrayviernes = []
                    let fechhsarrayviernes = data.hourly.time;
                      for(item of fechhsarrayviernes){
                        fechahoraarrayviernes.push(item);
                                        }
                 //     console.log(fechahoraarrayviernes);
                      fechayhoraviernes.textContent=fechahoraarray[155];
              
               

                //console.log(data.weather[0].description)
                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()
                ubicacion.textContent = data.name
                
                vientoVelocidad.textContent = `${data.wind.speed} m/s`
                

                //para iconos dinámicos
                console.log(data.weather[0].main)
                switch (data.weather[0].main) {
                    case 'Thunderstorm':
                      iconoAnimado.src='animated/thunder.svg'
                      console.log('TORMENTA');
                      break;
                    case 'Drizzle':
                      iconoAnimado.src='animated/rainy-2.svg'
                      console.log('LLOVIZNA');
                      break;
                    case 'Rain':
                      iconoAnimado.src='animated/rainy-7.svg'
                      console.log('LLUVIA');
                      break;
                    case 'Snow':
                      iconoAnimado.src='animated/snowy-6.svg'
                        console.log('NIEVE');
                      break;                        
                    case 'Clear':
                        iconoAnimado.src='animated/day.svg'
                        console.log('LIMPIO');
                      break;
                    case 'Atmosphere':
                      iconoAnimado.src='animated/weather.svg'
                        console.log('ATMOSFERA');
                        break;  
                    case 'Clouds':
                        iconoAnimado.src='animated/cloudy-day-1.svg'
                        console.log('NUBES');
                        break;  
                    default:
                      iconoAnimado.src='animated/cloudy-day-1.svg'
                      console.log('por defecto');
                  }

            })
            .catch( error => {
                console.log(error)
            })
       
          
    //}
//})
