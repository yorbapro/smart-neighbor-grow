import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Accessibility = () => {
  useEffect(() => {
    document.title = "Accessibility Statement | BrightLaunchIQ";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20" id="main-content">
        <div className="container max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Accessibility Statement
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-lg">
              Last Updated: January 2026
            </p>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Commitment to Accessibility
              </h2>
              <p>
                BrightLaunchIQ is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying relevant 
                accessibility standards to ensure we provide equal access to all users.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Conformance Status
              </h2>
              <p>
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. 
                These guidelines explain how to make web content more accessible for people with disabilities 
                and more user-friendly for everyone.
              </p>
              <p>
                The guidelines have three levels of accessibility (A, AA, and AAA). We have chosen Level AA 
                as our target for the BrightLaunchIQ website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Accessibility Features
              </h2>
              <p>We have implemented the following accessibility features on our website:</p>
              
              <h3 className="font-semibold text-foreground text-xl mb-2 mt-6">Navigation & Structure</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Skip to Content:</strong> A "Skip to main content" link is available for keyboard users to bypass repetitive navigation</li>
                <li><strong>Semantic HTML:</strong> Proper heading hierarchy (H1-H6) and semantic elements (header, main, nav, footer) are used throughout</li>
                <li><strong>Consistent Navigation:</strong> Navigation menus appear in the same location on every page</li>
                <li><strong>Descriptive Links:</strong> Link text clearly describes the destination or purpose</li>
              </ul>

              <h3 className="font-semibold text-foreground text-xl mb-2 mt-6">Visual Design</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Color Contrast:</strong> Text and interactive elements maintain a minimum contrast ratio of 4.5:1 against backgrounds</li>
                <li><strong>Resizable Text:</strong> Text can be resized up to 200% without loss of content or functionality</li>
                <li><strong>Focus Indicators:</strong> Visible focus indicators are provided for all interactive elements</li>
                <li><strong>No Color-Only Cues:</strong> Information is not conveyed by color alone</li>
              </ul>

              <h3 className="font-semibold text-foreground text-xl mb-2 mt-6">Forms & Inputs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Form Labels:</strong> All form fields have associated labels</li>
                <li><strong>Error Identification:</strong> Form errors are clearly identified and described in text</li>
                <li><strong>Input Purpose:</strong> Input fields use appropriate autocomplete attributes where applicable</li>
                <li><strong>Required Fields:</strong> Required fields are clearly marked</li>
              </ul>

              <h3 className="font-semibold text-foreground text-xl mb-2 mt-6">Keyboard Accessibility</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Full Keyboard Access:</strong> All functionality is accessible via keyboard</li>
                <li><strong>No Keyboard Traps:</strong> Users can navigate away from any element using standard keyboard commands</li>
                <li><strong>Logical Tab Order:</strong> Interactive elements follow a logical tab sequence</li>
                <li><strong>Visible Focus:</strong> Focus is clearly visible when navigating with keyboard</li>
              </ul>

              <h3 className="font-semibold text-foreground text-xl mb-2 mt-6">Images & Media</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Alternative Text:</strong> Images include appropriate alternative text descriptions</li>
                <li><strong>Decorative Images:</strong> Purely decorative images are marked to be ignored by assistive technologies</li>
              </ul>

              <h3 className="font-semibold text-foreground text-xl mb-2 mt-6">Technology</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Responsive Design:</strong> The website is fully responsive and works on all device sizes</li>
                <li><strong>Screen Reader Compatible:</strong> Content is structured to work with screen readers</li>
                <li><strong>ARIA Labels:</strong> ARIA attributes are used where appropriate to enhance accessibility</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Browser & Assistive Technology Compatibility
              </h2>
              <p>The BrightLaunchIQ website is designed to be compatible with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Recent versions of popular web browsers (Chrome, Firefox, Safari, Edge)</li>
                <li>Screen readers including NVDA, JAWS, and VoiceOver</li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Known Limitations
              </h2>
              <p>
                While we strive for comprehensive accessibility, some content may have limitations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Third-Party Content:</strong> Some embedded third-party content (such as maps or payment forms) may not fully conform to WCAG 2.1 AA standards</li>
                <li><strong>PDF Documents:</strong> Older PDF documents may not be fully accessible; we are working to remediate these</li>
                <li><strong>Dynamic Content:</strong> Some dynamically loaded content may require additional screen reader navigation</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Feedback & Contact
              </h2>
              <p>
                We welcome your feedback on the accessibility of BrightLaunchIQ. Please let us know if 
                you encounter accessibility barriers:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> <a href="mailto:success@BrightLaunchIQ.com" className="text-primary hover:underline">success@BrightLaunchIQ.com</a></li>
                <li><strong>Phone:</strong> 1-800-LAUNCH-IQ</li>
                <li><strong>Business Hours:</strong> Monday–Friday, 8AM–6PM Pacific Time</li>
              </ul>
              <p className="mt-4">
                We try to respond to accessibility feedback within 2 business days and aim to resolve 
                issues within 10 business days.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Continuous Improvement
              </h2>
              <p>
                We are committed to ongoing accessibility improvements. Our efforts include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regular accessibility audits using automated tools and manual testing</li>
                <li>Training our team on accessibility best practices</li>
                <li>Incorporating accessibility into our development process</li>
                <li>Testing with assistive technologies during development</li>
                <li>Addressing reported accessibility issues promptly</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Additional Resources
              </h2>
              <p>For more information about web accessibility:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a 
                    href="https://www.w3.org/WAI/standards-guidelines/wcag/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Web Content Accessibility Guidelines (WCAG)
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.w3.org/WAI/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    W3C Web Accessibility Initiative (WAI)
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Accessibility;