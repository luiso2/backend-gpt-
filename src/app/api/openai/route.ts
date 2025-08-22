import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
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
  } catch (error: any) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to get response from OpenAI' 
      },
      { status: 500 }
    );
  }
}