import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const hasOpenAI = !!process.env.OPENAI_API_KEY;
    const hasAnthropic = !!process.env.ANTHROPIC_API_KEY;
    
    // No exponer las keys completas por seguridad
    const openAIKeyPreview = process.env.OPENAI_API_KEY 
      ? `${process.env.OPENAI_API_KEY.substring(0, 10)}...${process.env.OPENAI_API_KEY.slice(-4)}`
      : 'Not configured';
      
    const anthropicKeyPreview = process.env.ANTHROPIC_API_KEY
      ? `${process.env.ANTHROPIC_API_KEY.substring(0, 10)}...${process.env.ANTHROPIC_API_KEY.slice(-4)}`
      : 'Not configured';

    return NextResponse.json({
      status: 'OK',
      environment: process.env.NODE_ENV,
      apis: {
        openAI: {
          configured: hasOpenAI,
          keyPreview: openAIKeyPreview
        },
        anthropic: {
          configured: hasAnthropic,
          keyPreview: anthropicKeyPreview
        },
        wordpress: {
          url: process.env.NEXT_PUBLIC_API_URL || 'Not configured'
        }
      },
      server: {
        port: process.env.PORT || '3000',
        railway: !!process.env.RAILWAY_ENVIRONMENT
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Failed to check configuration', details: error.message },
      { status: 500 }
    );
  }
}
