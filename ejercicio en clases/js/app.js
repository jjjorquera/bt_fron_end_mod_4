document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#form-empleado').addEventListener("submit", function(event) {
        event.preventDefault();

        const fechaInicio = document.querySelector("#date-input").value;
        const salarioMensual = parseFloat(document.querySelector("#input-salario").value);
        const fechaCumple = document.querySelector("#date-cumple").value;
      //   console.log(fechaInicio);
      //   console.log(salarioMensual);
      //   console.log(fechaCumple);
      let resultado = calcularInformacionEmpleado(fechaInicio, salarioMensual, fechaCumple);
  
      let parrafoResultado = document.querySelector('#resultado');
      parrafoResultado.innerHTML = resultado;
    })

    //* Invocamos la funcion


    function calcularInformacionEmpleado(fechaInicio, salarioMensual, fechaCumple, fechaActual = new Date()) {

         const inicio = new Date(fechaInicio);
         const cumple = new Date(fechaCumple);
         const hoy = fechaActual;       

         // console.log(fechaInicio);

        // Valida que fecha de inicio no sea futura
         if (inicio > hoy) {
            return "La fecha de inicio no puede ser en el futuro, el empleado debe tener antiguedad en la empresa"
         }

         //* CALCULO DE ANTIGUEDAD
         let años = hoy.getFullYear() - inicio.getFullYear();
         let mes = hoy.getMonth() - inicio.getMonth();

         console.log(mes);
         console.log(años);

         //  V   ||  F = V
         //  F   ||  V = V
         //  F   ||  F = F
         //  V   ||  V = V
         //* getDate() : Retorna el dia del mes (1 - 31)
         //* getMonth(): Retorna el mes del año (0 - 11), donde 0 es enero y 11 es diciembre
         //* getFullYear(): Retorna el año completo (2024)
         //*                 01 de abril del 2024 - 24 de abril 2024
         if( mes < 0 || (mes === 0 && hoy.getDate() < inicio.getDate())) {
         años = años - 1; // años--;
          }

         //* operador ternario
         //* -8
         mes = mes >= 0 ? mes: 12 + mes;

          // console.log("Años: " +  años + " y meses: " + mes);



         //* CALCULAR DIAS DE VACACIONES

         let diasVacaiones;

         if (años < 5)  {
            diasVacaiones = 14 ;
         } else if (años >= 5 && años <= 10) {
            diasVacaiones = 21;
         } else
            diasVacaiones = 28;

          //* - Por cada año completo de trabajo, el empleado recibe una bonificación equivalente al 2% de su salario mensual.
    let bono = (salarioMensual * 0.02) * años;

    let calificaDiaAdicional = false;
    //* 4. Establecer si el empleado califica para un día adicional de permiso en el año, si su cumpleaños cae en un día laboral.
    if(fechaCumpleaños.getDay() > 0 && fechaCumpleaños.getDay() < 6) {
      calificaDiaAdicional = true;
    }

    let mensaje = "El empleado tiene una antiguedad de: " + años + " años y " + mes + " meses, con derecho a:  " + diasVacaciones + " días de vacaciones y una bonificación de: " + bono;

    if(calificaDiaAdicional) {
      mensaje = mensaje + " Califica para un día de permiso adicional por su cumpleaños";
    } else {
      mensaje = mensaje + " No Califica para un día de permiso adicional por su cumpleaños";
    }

    return mensaje;
  
         
      
         

    }

         
})