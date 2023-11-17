
//validar letras
export const validarLetra = (value) => {

  if (/^(?=.*[a-zA-Z])\s*[a-zA-Z\s]*$/
  .test(value)) {

    return true;

  } else return false;
};

//validar numeros
export const validarNumero = (value) => {

  if (/^\d+$/.test(value) && value.trim() !== '') {

    return true;

  } else return false;
};

export const validateEmail = (value) => {
  const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailregex.test(value)  && value.trim() !== '';
}

export const vad_alfanumerico = (value) => {
  const alphanumericregex = /^(?=.*[a-zA-Z0-9])[\w\s,()]*$/;
  return alphanumericregex.test(value);
}
