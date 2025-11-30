import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 privacy-policy-txt ul-service-details-txt">
            <h1 className="ul-service-details-title">Privacy Policy</h1>
            <p className="ul-service-details-descr" >
              <strong>Effective Date:</strong> May 1, 2025
              <br />
              <strong>Last Updated:</strong> May 1, 2025
            </p>

            <p className="ul-service-details-descr" >
              This Privacy Policy outlines how <strong>ITnnovator</strong> (“ITnnovator,” “we,” “our,” or “us”) collects, uses, and protects personal information through our website,
              <Link href="https://itnnovator.com" target="_blank"> https://itnnovator.com </Link>
              (the “Website”). ITnnovator is a digital solutions company specializing in website development, SEO, social media marketing, and AI-powered tools. We are committed to protecting your privacy and ensuring transparency in how your data is handled.
            </p>

            <h3 className="ul-service-details-inner-title">Information We Collect</h3>
            <ul>
              <li><strong>Identifiers:</strong> such as name, email address, phone number, and IP address.</li>
              <li><strong>Technical Information:</strong> OS version, browser type, cookies, and usage data.</li>
              <li><strong>Geolocation Data:</strong> collected through IP or device data.</li>
              <li><strong>Communications:</strong> messages you send through our forms or email.</li>
            </ul>

            <h3 className="ul-service-details-inner-title" >How We Collect Information</h3>
            <ul>
              <li><strong>Directly:</strong> When you fill out forms, contact us, or subscribe to newsletters.</li>
              <li><strong>Automatically:</strong> Through cookies, analytics tools, and third-party services.</li>
              <li><strong>Third Parties:</strong> We do not collect data from external sources unless explicitly authorized.</li>
            </ul>

            <h3 className="ul-service-details-inner-title" >How We Use Your Information</h3>
            <ul>
              <li>To provide and improve our digital services and AI tools</li>
              <li>To communicate with you and respond to inquiries</li>
              <li>To analyze traffic and usage trends for optimization</li>
              <li>To prevent fraud and ensure platform security</li>
              <li>To comply with legal obligations and regulatory requirements</li>
            </ul>

            <h3 className="ul-service-details-inner-title" >Sharing Your Information</h3>
            <p className="ul-service-details-descr" >
              We do <strong>not sell</strong> your personal information. Your data may be shared:
            </p>
            <ul>
              <li>With service providers under strict confidentiality agreements</li>
              <li>If required by law, court order, or government request</li>
              <li>In the event of a business transfer such as a merger or acquisition</li>
            </ul>

            <h3 className="ul-service-details-inner-title" >Data Retention</h3>
            <ul>
              <li>We retain data as long as necessary for operational, legal, or security purposes</li>
              <li>Data no longer required will be securely deleted or anonymized</li>
            </ul>

            <h3 className="ul-service-details-inner-title" >External Links</h3>
            <p className="ul-service-details-descr" >
              Our Website may contain links to third-party sites. We are not responsible for the privacy practices of those websites. Please review their policies independently.
            </p>

            <h3 className="ul-service-details-inner-title" >Data Security</h3>
            <p className="ul-service-details-descr" >
              We implement appropriate technical and organizational measures to safeguard your information. However, no internet transmission is 100% secure, and we encourage caution when sharing sensitive data online.
            </p>

            <h3 className="ul-service-details-inner-title" >Your Rights</h3>
            <p className="ul-service-details-descr" >You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your data, subject to applicable laws</li>
            </ul>
            <p className="ul-service-details-descr" >
              To exercise these rights, email us at:
              <Link href="mailto:info@itnnovator.com"> info@itnnovator.com </Link>
            </p>

            <h3 className="ul-service-details-inner-title" >Children’s Privacy</h3>
            <p className="ul-service-details-descr" >
              Our services are intended for professionals and business users. We do not knowingly collect personal data from individuals under the age of 18. If we discover that we have inadvertently collected such data, we will take steps to delete it immediately.</p>
            <h3 className="ul-service-details-inner-title" >Policy Updates</h3>
            <p className="ul-service-details-descr" >
              We may update this Privacy Policy from time to time. Changes will be posted here with an updated effective date. We encourage you to review it periodically.
            </p>

            <h3 className="ul-service-details-inner-title" >Contact</h3>
            <p className="ul-service-details-descr" >
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
              <Link href="mailto:info@itnnovator.com"> info@itnnovator.com </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
