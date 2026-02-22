/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface RecoveryEmailProps {
  siteName: string
  confirmationUrl: string
}

export const RecoveryEmail = ({
  siteName,
  confirmationUrl,
}: RecoveryEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Reset your BrightLaunchIQ password</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>BrightLaunchIQ</Text>
        <Heading style={h1}>Reset your password</Heading>
        <Text style={text}>
          We received a request to reset your password. Click the button below
          to choose a new one.
        </Text>
        <Button style={button} href={confirmationUrl}>
          Reset Password
        </Button>
        <Text style={footer}>
          If you didn't request a password reset, you can safely ignore this
          email. Your password will not be changed.
        </Text>
        <Text style={footerBrand}>
          BrightLaunchIQ · Sacramento, CA 95814
        </Text>
      </Container>
    </Body>
  </Html>
)

export default RecoveryEmail

const main = { backgroundColor: '#ffffff', fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }
const container = { padding: '40px 25px' }
const brand = { fontSize: '16px', fontWeight: 'bold' as const, color: 'hsl(212, 92%, 45%)', margin: '0 0 24px', letterSpacing: '-0.02em' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: 'hsl(216, 14%, 14%)', margin: '0 0 16px', letterSpacing: '-0.02em' }
const text = { fontSize: '15px', color: 'hsl(212, 8%, 43%)', lineHeight: '1.6', margin: '0 0 20px' }
const button = { backgroundColor: 'hsl(137, 63%, 33%)', color: '#ffffff', fontSize: '15px', fontWeight: '600' as const, borderRadius: '6px', padding: '12px 24px', textDecoration: 'none' }
const footer = { fontSize: '13px', color: '#999999', margin: '30px 0 8px' }
const footerBrand = { fontSize: '11px', color: '#aaaaaa', margin: '0' }
