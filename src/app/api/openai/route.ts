import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Verificar si la API key está configurada
const isOpenAIConfigured = () => {
  const apiKey = process.env.OPENAI_API_KEY;
  return apiKey && apiKey.length > 0 && !apiKey.includes('your-api-key-here');
};

// Inicializar cliente solo si hay API key válida
const openai = isOpenAIConfigured() ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}) : null;

export async function POST(request: NextRequest) {
  try {
    // Verificar primero si OpenAI está configurado
    if (!isOpenAIConfigured() || !openai) {
      console.warn('OpenAI API key not configured or invalid');
      return NextResponse.json({
        success: false,
        error: 'OpenAI service is not configured. Please contact support.',
        fallback: true,
        response: 'I apologize, but the AI service is temporarily unavailable. As MERKTOP, we specialize in AI automation, n8n workflows, and custom software development. Please contact us directly for assistance with your project needs.'
      }, { status: 503 });
    }

    const { prompt, model = 'gpt-3.5-turbo', mode } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Create system message based on mode
    let systemMessage = 'You are a helpful AI assistant for MERKTOP, a company specializing in AI automation and business development.';
    
    if (mode === 'build') {
      systemMessage += ' Focus on helping with software architecture, technology selection, and development planning.';
    } else if (mode === 'automate') {
      systemMessage += ' Focus on designing automation workflows, integration strategies, and process optimization.';
    } else if (mode === 'analyze') {
      systemMessage += ' Focus on business analysis, strategic recommendations, and data insights.';
    }

    try {
      const completion = await openai.chat.completions.create({
        model,
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      });

      const response = completion.choices[0]?.message?.content || 'No response generated';

      return NextResponse.json({
        success: true,
        response,
        model,
        provider: 'openai'
      });
    } catch (apiError: any) {
      // Manejo específico de errores de API
      console.error('OpenAI API call failed:', apiError.message);
      
      // Si es un error 401, la API key es inválida
      if (apiError.status === 401) {
        return NextResponse.json({
          success: false,
          error: 'Authentication failed. The OpenAI service is temporarily unavailable.',
          fallback: true,
          response: 'Our AI service is currently being updated. In the meantime, let me help you directly! MERKTOP specializes in n8n automation, custom software development, and AI solutions. What can we help you build today?'
        }, { status: 503 });
      }
      
      // Si es un error 429, límite de rate excedido
      if (apiError.status === 429) {
        return NextResponse.json({
          success: false,
          error: 'Service is temporarily busy. Please try again in a moment.',
          fallback: true,
          response: 'Our AI service is experiencing high demand. Please try again shortly, or contact us directly for immediate assistance with your automation and development needs.'
        }, { status: 503 });
      }
      
      // Otros errores de API
      return NextResponse.json({
        success: false,
        error: 'AI service temporarily unavailable',
        fallback: true,
        response: 'I apologize for the inconvenience. Our AI assistant is temporarily offline. MERKTOP is here to help with your n8n automations, software development, and business solutions. Please feel free to contact us directly!'
      }, { status: 503 });
    }
  } catch (error: any) {
    // Error general del servidor
    console.error('Server error in OpenAI route:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        fallback: true,
        response: 'We apologize for the technical difficulty. Please refresh the page or contact MERKTOP directly for assistance with your project.'
      },
      { status: 500 }
    );
  }
}