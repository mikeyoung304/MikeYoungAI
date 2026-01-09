import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Lazy initialization to avoid build-time errors when API key is missing
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  return new Resend(apiKey);
}

interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  projectType: string;
  description: string;
  timeline?: string;
  budget?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.projectType || !data.description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailContent = `
New project inquiry from mikeyoung.ai

Name: ${data.name}
Company: ${data.company || 'Not provided'}
Email: ${data.email}

Project Type: ${data.projectType}
Timeline: ${data.timeline || 'Not specified'}
Budget: ${data.budget || 'Not specified'}

Project Description:
${data.description}
    `.trim();

    // Send email via Resend
    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from: 'mikeyoung.ai <noreply@mikeyoung.ai>', // TODO: Update with verified domain
      to: process.env.CONTACT_EMAIL || 'hello@mikeyoung.ai',
      replyTo: data.email,
      subject: `New inquiry: ${data.projectType} from ${data.company || data.name}`,
      text: emailContent,
    });

    if (error) {
      console.error('[Contact] Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

    // TODO: Track successful form submission
    console.log('[Analytics] Contact form submitted successfully:', {
      projectType: data.projectType,
      timeline: data.timeline,
      budget: data.budget,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Contact] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
