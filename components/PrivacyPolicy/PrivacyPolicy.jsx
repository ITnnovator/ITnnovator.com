import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 privacy-policy-txt">
            <h1 className="mb-4">Privacy Policy</h1>
            <p>
              <strong>Effective Date:</strong> May 1, 2025
              <br />
              <strong>Last Updated:</strong> May 1, 2025
            </p>

            <p>
              This Privacy Policy outlines how <strong>ITnnovator</strong> (“ITnnovator,” “we,” “our,” or “us”) collects, uses, and protects personal information through our website,
              <Link href="https://itnnovator.com" target="_blank"> https://itnnovator.com </Link>
              (the “Website”). ITnnovator is a digital solutions company specializing in website development, SEO, social media marketing, and AI-powered tools. We are committed to protecting your privacy and ensuring transparency in how your data is handled.
            </p>

            <h2 className="mt-5">Information We Collect</h2>
            <ul>
              <li><strong>Identifiers:</strong> such as name, email address, phone number, and IP address.</li>
              <li><strong>Technical Information:</strong> OS version, browser type, cookies, and usage data.</li>
              <li><strong>Geolocation Data:</strong> collected through IP or device data.</li>
              <li><strong>Communications:</strong> messages you send through our forms or email.</li>
            </ul>

            <h2 className="mt-4">How We Collect Information</h2>
            <ul>
              <li><strong>Directly:</strong> When you fill out forms, contact us, or subscribe to newsletters.</li>
              <li><strong>Automatically:</strong> Through cookies, analytics tools, and third-party services.</li>
              <li><strong>Third Parties:</strong> We do not collect data from external sources unless explicitly authorized.</li>
            </ul>

            <h2 className="mt-4">How We Use Your Information</h2>
            <ul>
              <li>To provide and improve our digital services and AI tools</li>
              <li>To communicate with you and respond to inquiries</li>
              <li>To analyze traffic and usage trends for optimization</li>
              <li>To prevent fraud and ensure platform security</li>
              <li>To comply with legal obligations and regulatory requirements</li>
            </ul>

            <h2 className="mt-4">Sharing Your Information</h2>
            <p>
              We do <strong>not sell</strong> your personal information. Your data may be shared:
            </p>
            <ul>
              <li>With service providers under strict confidentiality agreements</li>
              <li>If required by law, court order, or government request</li>
              <li>In the event of a business transfer such as a merger or acquisition</li>
            </ul>

            <h2 className="mt-4">Data Retention</h2>
            <ul>
              <li>We retain data as long as necessary for operational, legal, or security purposes</li>
              <li>Data no longer required will be securely deleted or anonymized</li>
            </ul>

            <h2 className="mt-4">External Links</h2>
            <p>
              Our Website may contain links to third-party sites. We are not responsible for the privacy practices of those websites. Please review their policies independently.
            </p>

            <h2 className="mt-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to safeguard your information. However, no internet transmission is 100% secure, and we encourage caution when sharing sensitive data online.
            </p>

            <h2 className="mt-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your data, subject to applicable laws</li>
            </ul>
            <p>
              To exercise these rights, email us at:
              <Link href="mailto:info@itnnovator.com"> info@itnnovator.com </Link>
            </p>

            <h2 className="mt-4">Children’s Privacy</h2>
            <p>
              Our services are intended for professionals and business users. We do not knowingly collect personal data from individuals under the age of 18. If we discover that we have inadvertently collected such data, we will take steps to delete it immediately.</p>
            <h2 className="mt-4">Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted here with an updated effective date. We encourage you to review it periodically.
            </p>

            <h2 className="mt-4">Contact</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
              <Link href="mailto:info@itnnovator.com"> info@itnnovator.com </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
