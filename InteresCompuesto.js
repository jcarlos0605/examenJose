exports.InteresCompuesto = (capital, interes, periodo) => {
    let deposito = 0;
    let interesPeriodo = 0;
    const cuotas = [];
    interes = interes / 100;
  
    const resultados = {
      periodos: 1,
      depositos: capital,
      intereses: 0,
      saldo: capital,
    };
  
    cuotas.push(resultados);
  
    for (let i = 0; i < periodo; i++) {
      interesPeriodo = capital * interes;
      Number.parseFloat(interes);
      capital = Number.parseFloat(capital) + Number.parseFloat(interes);
  
      resultados = {
        periodos: i + 2,
        depositos: Number.parseFloat(deposito.toFixed(2)),
        intereses: Number.parseFloat(interesPeriodo.toFixed(2)),
        saldo: Number.parseFloat(capital.toFixed(2)),
      };
  
      cuotas.push(resultados);
    }
  
    return cuotas;
  };