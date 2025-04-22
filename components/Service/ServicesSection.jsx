"use client";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <div className="ul-section-spacing">
      <div className="ul-case-study-container">
        <div className="row ul-bs-row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-5">
          {/* <!-- single case study --> */}
          <div className="col">
            <div className="ul-case-study-item ul-inner-case-study-item">
              <div className="img">
                <img src="webImages/case-study-1.jpg" alt="Case Study Image" />
              </div>
              <div className="txt">
                <span className="ul-case-study-item-category">Mobile App</span>
                <h3 className="ul-case-study-item-title">Digital Banking App</h3>
              </div>
              <div className="ul-case-study-item-bottom">
                <span className="ul-case-study-item-index">01</span>
                <Link href="/" className="ul-case-study-item-btn">
                  <i className="flaticon-next-1"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- single case study --> */}
          <div className="col">
            <div className="ul-case-study-item ul-inner-case-study-item">
              <div className="img">
                <img src="webImages/case-study-2.jpg" alt="Case Study Image" />
              </div>
              <div className="txt">
                <span className="ul-case-study-item-category">Web App</span>
                <h3 className="ul-case-study-item-title">E-commerce Website</h3>
              </div>
              <div className="ul-case-study-item-bottom">
                <span className="ul-case-study-item-index">02</span>
                <Link href="/" className="ul-case-study-item-btn">
                  <i className="flaticon-next-1"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- single case study --> */}
          <div className="col">
            <div className="ul-case-study-item ul-inner-case-study-item">
              <div className="img">
                <img src="webImages/case-study-3.jpg" alt="Case Study Image" />
              </div>
              <div className="txt">
                <span className="ul-case-study-item-category">Technology</span>
                <h3 className="ul-case-study-item-title">Smart Home Automation</h3>
              </div>
              <div className="ul-case-study-item-bottom">
                <span className="ul-case-study-item-index">03</span>
                <Link href="/" className="ul-case-study-item-btn">
                  <i className="flaticon-next-1"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- single case study --> */}
          <div className="col">
            <div className="ul-case-study-item ul-inner-case-study-item">
              <div className="img">
                <img src="webImages/case-study-2.jpg" alt="Case Study Image" />
              </div>
              <div className="txt">
                <span className="ul-case-study-item-category">Mobile App</span>
                <h3 className="ul-case-study-item-title">Healthcare App</h3>
              </div>
              <div className="ul-case-study-item-bottom">
                <span className="ul-case-study-item-index">04</span>
                <Link href="/" className="ul-case-study-item-btn">
                  <i className="flaticon-next-1"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- single case study --> */}
          <div className="col">
            <div className="ul-case-study-item ul-inner-case-study-item">
              <div className="img">
                <img src="webImages/case-study-3.jpg" alt="Case Study Image" />
              </div>
              <div className="txt">
                <span className="ul-case-study-item-category">Web App</span>
                <h3 className="ul-case-study-item-title">ERM Software</h3>
              </div>
              <div className="ul-case-study-item-bottom">
                <span className="ul-case-study-item-index">05</span>
                <Link href="/" className="ul-case-study-item-btn">
                  <i className="flaticon-next-1"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- single case study --> */}
          <div className="col">
            <div className="ul-case-study-item ul-inner-case-study-item">
              <div className="img">
                <img src="webImages/case-study-1.jpg" alt="Case Study Image" />
              </div>
              <div className="txt">
                <span className="ul-case-study-item-category">Technology</span>
                <h3 className="ul-case-study-item-title">
                  Digital Banking Platform
                </h3>
              </div>
              <div className="ul-case-study-item-bottom">
                <span className="ul-case-study-item-index">06</span>
                <Link href="/" className="ul-case-study-item-btn">
                  <i className="flaticon-next-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
