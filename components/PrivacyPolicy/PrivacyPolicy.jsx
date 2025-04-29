import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 privacy-policy-txt">
            <h1 className="mb-4">Privacy Policy</h1>
            <p>
              <strong>Effective Date:</strong> June 15th, 2022
              <br />
              <strong>Last Updated:</strong> June 15th, 2022
            </p>

            <p>
              This Privacy Policy describes <strong>Itnnovator’s</strong>{" "}
              (“Itnnovator”, “us” or “we”) practices regarding personal
              information collected through
              <Link href="https://itnnovator.vercel.app/" target="_blank">
                https://itnnovator.vercel.app/
              </Link>{" "}
              (the “Website”). Itnnovator is committed to protecting your
              privacy and this Policy outlines how your data is handled.
            </p>

            <h2 className="mt-5">Information Collected</h2>
            <ul>
              <li>
                <strong>Identifiers:</strong> such as your IP address.
              </li>
              <li>
                <strong>Network Activity:</strong> OS version, browser type,
                PHP/database versions, cookies, browsing and platform usage
                data.
              </li>
              <li>
                <strong>Geolocation Data:</strong> based on IP, MAC address, or
                mobile device.
              </li>
            </ul>

            <h2 className="mt-4">How Information Is Collected</h2>
            <ul>
              <li>
                <strong>Information You Provide:</strong> Via forms or direct
                contact. Not shared without consent.
              </li>
              <li>
                <strong>Automatic Collection:</strong> Through cookies and
                tracking technologies. We do not respond to Do Not Track
                signals.
              </li>
              <li>
                <strong>Other Sources:</strong> We do not collect data from
                other sources.
              </li>
            </ul>

            <h2 className="mt-4">Use of Information</h2>
            <p>We may use your information to:</p>
            <ul>
              <li>Improve Website and service functionality</li>
              <li>Prevent fraud and protect the system</li>
              <li>Send you updates and respond to feedback</li>
              <li>Analyze and understand user behavior</li>
              <li>Comply with legal obligations and fulfill contracts</li>
            </ul>

            <h2 className="mt-4">Sharing of Information</h2>
            <p>
              We do <strong>not sell</strong> your personal data. Information
              may be shared only if:
            </p>
            <ul>
              <li>
                We are involved in a business transfer such as merger or
                acquisition
              </li>
              <li>Required by law, court order, or government request</li>
            </ul>

            <h2 className="mt-4">Storage of Information</h2>
            <p>We retain your information based on:</p>
            <ul>
              <li>Legal/regulatory obligations</li>
              <li>Protection against fraud</li>
              <li>Original purpose of collection</li>
              <li>Data relevance and age</li>
            </ul>

            <h2 className="mt-4">Third-Party Sites</h2>
            <p>
              Links to external websites are provided for convenience. We are
              not responsible for their content or data practices. Please review
              their policies separately.
            </p>

            <h2 className="mt-4">Data Security</h2>
            <p>
              We use reasonable security measures to protect your data. However,
              no method is completely secure, and all transmissions are at your
              own risk.
            </p>

            <h2 className="mt-4">Your Data Protection Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of data, where applicable</li>
            </ul>
            <p>
              To make a request, please email us at:
              <Link href="mailto:info@itnnovator.vercel.app">
                info@itnnovator.vercel.app
              </Link>
              .
            </p>

            <h2 className="mt-4">Children</h2>
            <p>
              This Website is not intended for users under 18 without parental
              consent. Parents must register and provide consent for minors.
            </p>

            <h2 className="mt-4">Modifications</h2>
            <p>
              We may revise this Privacy Policy occasionally. Changes will be
              posted here or otherwise communicated to you.
            </p>

            <h2 className="mt-4">Contact Us</h2>
            <p>
              If you have any questions, please contact us at:
              <Link href="mailto:info@itnnovator.vercel.app">
                info@itnnovator.vercel.app
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
