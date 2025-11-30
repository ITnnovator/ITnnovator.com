"use client";
import Link from "next/link";

export default function Price() {
  return (
    <section className="ul-pricing ul-section-spacing">
      <div className="ul-container">
        <div className="row ul-bs-row row-cols-lg-3 row-cols-sm-2 row-cols-1">
          {/* <!-- single plan --> */}
          <div className="col">
            <div className="ul-pricing-package">
              {/* <!-- heading --> */}
              <div className="ul-pricing-package-heading">
                <span className="ul-pricing-package-name">Basic</span>
                <div className="ul-pricing-package-heading-bottom">
                  <h3 className="ul-pricing-package-price">$19</h3>
                  <div className="right">
                    <span className="ul-pricing-package-duration">
                      <span className="divider">/</span>Month
                    </span>
                  </div>
                </div>
                <p className="ul-pricing-package-descr">
                  We care about their success. For us real We care about their
                  success. For us real relationship.
                </p>
              </div>

              {/* <!-- body --> */}
              <div className="ul-pricing-package-body">
                <ul className="ul-pricing-package-body-list">
                  <li>Providing solutions</li>
                  <li>Service that matters</li>
                  <li>Giving our best</li>
                  <li>24/7 Skilled Support</li>
                  <li>We serve differently</li>
                </ul>

                <Link href="#" className="ul-pricing-package-btn">
                  Choose a Plan
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- single plan --> */}
          <div className="col">
            <div className="ul-pricing-package">
              {/* <!-- heading --> */}
              <div className="ul-pricing-package-heading">
                <span className="ul-pricing-package-name">Standard</span>
                <div className="ul-pricing-package-heading-bottom">
                  <h3 className="ul-pricing-package-price">$59</h3>
                  <div className="right">
                    <span className="ul-pricing-package-duration">
                      <span className="divider">/</span>Month
                    </span>
                  </div>
                </div>
                <p className="ul-pricing-package-descr">
                  We care about their success. For us real We care about their
                  success. For us real relationship.
                </p>
              </div>

              {/* <!-- body --> */}
              <div className="ul-pricing-package-body">
                <ul className="ul-pricing-package-body-list">
                  <li>Providing solutions</li>
                  <li>Service that matters</li>
                  <li>Giving our best</li>
                  <li>24/7 Skilled Support</li>
                  <li>We serve differently</li>
                </ul>

                <Link href="#" className="ul-pricing-package-btn">
                  Choose a Plan
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- single plan --> */}
          <div className="col">
            <div className="ul-pricing-package">
              {/* <!-- heading --> */}
              <div className="ul-pricing-package-heading">
                <span className="ul-pricing-package-name">Premium</span>
                <div className="ul-pricing-package-heading-bottom">
                  <h3 className="ul-pricing-package-price">$110</h3>
                  <div className="right">
                    <span className="ul-pricing-package-duration">
                      <span className="divider">/</span>Month
                    </span>
                  </div>
                </div>
                <p className="ul-pricing-package-descr">
                  We care about their success. For us real We care about their
                  success. For us real relationship.
                </p>
              </div>

              {/* <!-- body --> */}
              <div className="ul-pricing-package-body">
                <ul className="ul-pricing-package-body-list">
                  <li>Providing solutions</li>
                  <li>Service that matters</li>
                  <li>Giving our best</li>
                  <li>24/7 Skilled Support</li>
                  <li>We serve differently</li>
                </ul>

                <Link href="#" className="ul-pricing-package-btn">
                  Choose a Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
