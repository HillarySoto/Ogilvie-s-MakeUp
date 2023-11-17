
//validar letras
export const validarLetra = (value) => {

  if (/^[A-Za-z]+$/.test(value) && value.trim() !== '') {

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
  const alphanumericregex = /^[a-zA-Z0-9]+$/;
  return alphanumericregex.test(value)  && value.trim() !== '';
}


   /*const validations = {
                                cedula: validarNumero(client.cedula),
                                telefono: validarNumero(client.telefono),
                                nombre: validarLetra(client.nombre),
                                email: validateEmail(client.email),
                                direccion: vad_alfanumerico(client.direccion),
                                contrasenia: vad_alfanumerico(client.contrasenia)
                            };

                            //evalua cada campo
                            const isValid = Object.values(validations).every((validation) => validation);

                            if (isValid) {
                            sendData();
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Entrada(s) invalida(s)',
                                    text: 'Hay campos vacíos o entradas inválidas, por favor verifique!',
                                    allowOutsideClick: false
                                });
                            } */
