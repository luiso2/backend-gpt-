import OpenAI from 'openai';

// Initialize OpenAI client (API key will be passed from component)
export const createOpenAIClient = (apiKey: string) => {
  return new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true // Only for demo - in production use API routes
  });
};

export const analyzeUserJourney = async (
  client: OpenAI,
  userProfile: any
) => {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: `Eres un experto Growth Partner analizando negocios. 
          Basándote en el perfil del usuario, genera:
          1. Estimación de pérdida de revenue mensual (número en USD)
          2. 3 soluciones específicas prioritarias
          3. Un diagnóstico personalizado de 2-3 líneas
          4. Lead score del 1-10
          Responde en JSON con las keys: revenue_loss, solutions, diagnosis, lead_score`
        },
        {
          role: "user",
          content: JSON.stringify(userProfile)
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 500
    });

    return JSON.parse(response.choices[0].message.content || '{}');
  } catch (error) {
    console.error('OpenAI Error:', error);
    return null;
  }
};

export const generatePersonalizedPitch = async (
  client: OpenAI,
  userProfile: any,
  diagnosis: any
) => {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: `Genera un pitch personalizado para MERKTOP como Growth Partner.
          Debe ser convincente, específico y orientado a resultados.
          Máximo 3 párrafos cortos. Incluye datos numéricos del diagnóstico.`
        },
        {
          role: "user",
          content: `Perfil: ${JSON.stringify(userProfile)}
          Diagnóstico: ${JSON.stringify(diagnosis)}`
        }
      ],
      temperature: 0.8,
      max_tokens: 300
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI Error:', error);
    return null;
  }
};