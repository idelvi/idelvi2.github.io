function calcularInteres() {
    const principal = parseFloat(document.getElementById('inversion').value);
    const tasaAnual = 11; // Tasa de interés anual del 11%
    const dias = 1.009; // Número de días para el cálculo diario
    const semanas = 6.9865; // Número de días para el cálculo semanal
    const meses = 30; // Número de días para el cálculo mensual
  
    const tasaDiaria = tasaAnual / (100 * meses);
    const interesDiario = principal * ((1 + tasaDiaria) ** dias - 1);
    const interesSemanal = principal * ((1 + tasaDiaria) ** semanas - 1);
    const interesMensual = principal * (tasaAnual / 1 / 100); // Tasa mensual
    const totalRecompeza = principal * 2.5;
    //-------------------------------------------------------------
    // Función para manejar el cambio en el tamaño de la pantalla
    function manejarTamañoPantalla() {
      // Obtener el ancho y alto de la ventana
      var anchoVentana = window.innerWidth;
      var altoVentana = window.innerHeight;

      // Realizar acciones basadas en el tamaño de la pantalla
      if (anchoVentana > 700) {
        const resultadosDiv = document.getElementById('resultados');
        resultadosDiv.innerHTML = `
         <p style="text-align: left; padding-left: 8px; border-top-left-radius: 10px; border-bottom-left-radius: 10px; color: black;">Interés Compuesto Diario: </p>
    
          <p style="text-align: right; padding-right: 8px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; color: #52b1ff;">$${interesDiario.toFixed(2)}</p>
    
          <p style="text-align: left; padding-left: 8px; border-top-left-radius: 10px; border-bottom-left-radius: 10px; color: black;">Interés Compuesto Semanal: </p>
    
          <p style="text-align: right; padding-right: 8px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; color: #52b1ff;">$${interesSemanal.toFixed(2)}</p>
    
          <p style="text-align: left; padding-left: 8px; border-top-left-radius: 10px; border-bottom-left-radius: 10px;color: black;">Interés Compuesto Mensual: </p>
    
          <p style="text-align: right; padding-right: 8px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; color: #52b1ff;">$${interesMensual.toFixed(2)}</p>
    
          <p style="text-align: left; padding-left: 8px; border-top-left-radius: 10px; border-bottom-left-radius: 10px; color: black;">Total Recompenza: </p>
    
          <p style="text-align: right; padding-right: 8px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; color: #52b1ff;">$${totalRecompeza.toFixed(2)}</p>
        `;
      } else {
        const resultadosDiv = document.getElementById('resultados');
        resultadosDiv.innerHTML = `
         <p style="text-align: left; padding-left: 8px; color: black;">Interés Compuesto Diario: </p>
    
          <p style="text-align: left; padding-right: 8px; color: #52b1ff;">$${interesDiario.toFixed(2)}</p>
    
          <p style="text-align: left; padding-left: 8px; color: black;">Interés Compuesto Semanal: </p>
    
          <p style="text-align: left; padding-right: 8px; color: #52b1ff;">$${interesSemanal.toFixed(2)}</p>
    
          <p style="text-align: left; padding-left: 8px; color: black;">Interés Compuesto Mensual: </p>
    
          <p style="text-align: left; padding-right: 8px; color: #52b1ff;">$${interesMensual.toFixed(2)}</p>
    
          <p style="text-align: left; padding-left: 8px; color: black;">Total Recompenza: </p>
    
          <p style="text-align: left; padding-right: 8px; color: #52b1ff;">$${totalRecompeza.toFixed(2)}</p>
        `;
      }
    }

    // Asignar la función para que se ejecute cuando cambie el tamaño de la pantalla
    window.addEventListener("resize", manejarTamañoPantalla);

    // Llamar a la función al cargar la página para manejar el tamaño inicial de la pantalla
    manejarTamañoPantalla();
   
    
  }
