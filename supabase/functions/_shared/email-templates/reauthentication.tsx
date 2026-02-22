/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface ReauthenticationEmailProps {
  token: string
}

export const ReauthenticationEmail = ({ token }: ReauthenticationEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your BrightLaunchIQ verification code</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>BrightLaunchIQ</Text>
        <Heading style={h1}>Confirm your identity</Heading>
        <Text style={text}>Use the code below to verify it's you:</Text>
        <Text style={codeStyle}>{token}</Text>
        <Text style={footer}>
          This code will expire shortly. If you didn't request this, you can
          safely ignore this email.
        </Text>
        <Text style={footerBrand}>
          BrightLaunchIQ · Sacramento, CA 95814
        </Text>
      </Container>
    </Body>
  </Html>
)

export default ReauthenticationEmail

const main = { backgroundColor: '#ffffff', fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }
const container = { padding: '40px 25px' }
const brand = { fontSize: '16px', fontWeight: 'bold' as const, color: 'hsl(212, 92%, 45%)', margin: '0 0 24px', letterSpacing: '-0.02em' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: 'hsl(216, 14%, 14%)', margin: '0 0 16px', letterSpacing: '-0.02em' }
const text = { fontSize: '15px', color: 'hsl(212, 8%, 43%)', lineHeight: '1.6', margin: '0 0 20px' }
const codeStyle = { fontFamily: 'Courier, monospace', fontSize: '28px', fontWeight: 'bold' as const, color: 'hsl(216, 14%, 14%)', margin: '0 0 30px', letterSpacing: '4px' }
const footer = { fontSize: '13px', color: '#999999', margin: '30px 0 8px' }
const footerBrand = { fontSize: '11px', color: '#aaaaaa', margin: '0' }
