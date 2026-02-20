import { z } from 'zod'

export const citizenSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  topic: z.enum(['account', 'bug', 'feedback', 'other'], {
    required_error: 'Please select a topic',
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const partnerSchema = z.object({
  organization: z.string().min(2, 'Organization name must be at least 2 characters'),
  contactPerson: z.string().min(2, 'Contact person must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  proposal: z.string().min(10, 'Proposal must be at least 10 characters'),
})

export const contactSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('citizen') }).merge(citizenSchema),
  z.object({ type: z.literal('partner') }).merge(partnerSchema),
])

export type CitizenFormValues = z.infer<typeof citizenSchema>
export type PartnerFormValues = z.infer<typeof partnerSchema>
export type ContactPayload = z.infer<typeof contactSchema>
