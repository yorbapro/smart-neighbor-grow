/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface InviteEmailProps {
  siteName: string
  siteUrl: string
  confirmationUrl: string
}

export const InviteEmail = ({
  siteName,
  siteUrl,
  confirmationUrl,
}: InviteEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>You've been invited to join BrightLaunchIQ</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>BrightLaunchIQ</Text>
        <Heading style={h1}>You've been invited</Heading>
        <Text style={text}>
          You've been invited to join{' '}
          <Link href={siteUrl} style={link}>
            <strong>BrightLaunchIQ</strong>
          </Link>
          . Click the button below to accept and create your account.
        </Text>
        <Button style={button} href={confirmationUrl}>
          Accept Invitation
        </Button>
        <Text style={footer}>
          If you weren't expecting this invitation, you can safely ignore this
          email.
        </Text>
        <Text style={footerBrand}>
          BrightLaunchIQ · Sacramento, CA 95814
        </Text>
      </Container>
    </Body>
  </Html>
)

export default InviteEmail

const main = { backgroundColor: '#ffffff', fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }
const container = { padding: '40px 25px' }
const brand = { fontSize: '16px', fontWeight: 'bold' as const, color: 'hsl(212, 92%, 45%)', margin: '0 0 24px', letterSpacing: '-0.02em' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: 'hsl(216, 14%, 14%)', margin: '0 0 16px', letterSpacing: '-0.02em' }
const text = { fontSize: '15px', color: 'hsl(212, 8%, 43%)', lineHeight: '1.6', margin: '0 0 20px' }
const link = { color: 'hsl(212, 92%, 45%)', textDecoration: 'underline' }
const button = { backgroundColor: 'hsl(137, 63%, 33%)', color: '#ffffff', fontSize: '15px', fontWeight: '600' as const, borderRadius: '6px', padding: '12px 24px', textDecoration: 'none' }
const footer = { fontSize: '13px', color: '#999999', margin: '30px 0 8px' }
const footerBrand = { fontSize: '11px', color: '#aaaaaa', margin: '0' }
