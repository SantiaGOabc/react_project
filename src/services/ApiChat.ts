
interface ChatResponse {
  response: string;
}

export const enviarPrompt = async (pregunta: string): Promise<string> => {
  try {
    const response = await fetch('http://localhost:3000/ollama-prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: pregunta }),
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data: ChatResponse = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error;
  }
};