/**
 * Standardized email footer for all outbound BrightLaunchIQ email sequences.
 * Import and append to any customer-facing email (HTML or plain text).
 *
 * Usage:
 *   import { emailFooterHtml, emailFooterText } from "../_shared/email-footer.ts";
 *   // HTML emails: append emailFooterHtml() to your HTML body
 *   // Plain-text emails: append emailFooterText() to your text body
 */

const PRIVACY_UPDATED = "April 2026";

/**
 * Returns the standardised HTML email footer.
 * Drop this inside the outermost <div> of your email, after the main content.
 */
export function emailFooterHtml(): string {
  return `
<div style="margin-top:32px;padding-top:20px;border-top:1px solid #e5e7eb;font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#4b5563;">
  <p style="margin:0 0 6px;">
    <a href="mailto:results@brightlaunchiq.com?subject=unsubscribe" style="color:#4b5563;text-decoration:underline;">Unsubscribe</a>
    &nbsp;|&nbsp;
    <a href="https://brightlaunchiq.com/privacy" style="color:#4b5563;text-decoration:underline;">Privacy Policy (Updated ${PRIVACY_UPDATED})</a>
  </p>
  <p style="margin:0 0 6px;">BrightLaunchIQ &middot; Sacramento, CA</p>
  <p style="margin:0 0 6px;">Reach us at <a href="mailto:success@BrightLaunchIQ.com" style="color:#4b5563;text-decoration:none;">success@BrightLaunchIQ.com</a> or <a href="tel:1-877-879-5552" style="color:#4b5563;text-decoration:none;">1-877-879-5552</a></p>
  <p style="margin:0;">Monday\u2013Friday, 8AM\u20136PM PT</p>
</div>`;
}

/**
 * Returns the standardised plain-text email footer.
 * Append after a blank line at the end of your plain-text body.
 */
export function emailFooterText(): string {
  return `
---
Unsubscribe: reply "unsubscribe" | Privacy Policy (Updated ${PRIVACY_UPDATED}): https://brightlaunchiq.com/privacy
BrightLaunchIQ · Sacramento, CA
Reach us at success@BrightLaunchIQ.com or 1-877-879-5552
Monday–Friday, 8AM–6PM PT`;
}
