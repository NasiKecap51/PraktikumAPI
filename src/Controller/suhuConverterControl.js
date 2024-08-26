exports.celcius = (req, res) => {
    const value = Number(req.params.value);
  
    const reamure = (4 / 5) * value;
    const fahrenheit = (value * 9) / 5 + 32;
    const kelvin = value + 273;
  
  const response = {
      celcius: value,
      result: {
        reamure: reamure,
        fahrenheit: fahrenheit,
        kelvin: kelvin
      },
  }
  
      res.json(response);
  };
  
  
  
  
  exports.reamure = (req, res) => {
    const value = Number(req.params.value);
  
    const celcius = value * 5/4
    const fahrenheit = (value * 9/4) + 32 
    const kelvin = (value * 5/4) + 273
  
  const response = {
      reamure: value,
      result: {
        celcius: celcius,
        fahrenheit: fahrenheit,
        kelvin: kelvin
      },
  }
  
      res.json(response);
  };
  
  
  
  
  exports.kelvin = (req, res) => {
    const value = Number(req.params.value);
  
    const celcius = value - 273
    const fahrenheit = (value - 273) * 9/5 + 32
    const reamure = (value - 273) * 4/5
  
  const response = {
      kelvin: value,
      result: {
        celcius: celcius,
        fahrenheit: fahrenheit,
        reamure: reamure
      },
  }
  
      res.json(response);
  };
  
  
  
  
  exports.fahrenheit = (req, res) => {
    const value = Number(req.params.value);
  
    const celcius = 5/9 * (value - 32)
    const kelvin = 5/9 * (value - 32) + 273
    const reamure = 4/9 * (value - 32)
  
  const response = {
      fahrenheit: value,
      result: {
        celcius: celcius,
        kelvin: kelvin,
        reamure: reamure
      },
  }
  
      res.json(response);
  };