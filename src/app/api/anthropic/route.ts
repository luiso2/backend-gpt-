import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { prompt, model = 'claude-3-haiku-20240307', mode } = await request.json();

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

    const message = await anthropic.messages.create({
      model,
      max_tokens: 1000,
      temperature: 0.7,
      system: systemMessage,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    const response = message.content[0].type === 'text' 
      ? message.content[0].text 
      : 'No response generated';

    return NextResponse.json({
      success: true,
      response,
      model,
      provider: 'anthropic'
    });
  } catch (error: any) {
    console.error('Anthropic API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to get response from Anthropic' 
      },
      { status: 500 }
    );
  }
}