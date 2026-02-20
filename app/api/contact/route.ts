import { NextResponse } from 'next/server'
import { z } from 'zod'
import { contactSchema } from '@/lib/schemas/contact'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    // TODO: Wire to email service (Resend, SendGrid) or database
    console.log('[Contact Form Submission]', JSON.stringify(data, null, 2))

    return NextResponse.json(
      { success: true, message: 'Your message has been received. We will get back to you soon!' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    console.error('[Contact Form Error]', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
