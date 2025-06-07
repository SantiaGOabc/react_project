interface FormData {
  nombre: string;
  correo: string;
  mensaje: string;
}

export const submitForm = async (formData: FormData) => {
  try {
    const response = await fetch('http://localhost:3000/api/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Error al enviar el formulario');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};