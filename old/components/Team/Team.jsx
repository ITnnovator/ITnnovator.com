
"use client";
import Link from "next/link";

export default function Team() {
  return (
    <div className="ul-container ul-section-spacing">
      <div className="row row-cols-md-4 row-cols-sm-3 row-cols-2 row-cols-xxs-1 ul-bs-row">
        {/* <!-- single team --> */}
        <div className="col">
          <div className="ul-team-member">
            <div className="ul-team-member-img">
              <img src="/webImages/team-1.png" alt="Team Member Image" />
            </div>
            <div className="ul-team-member-txt">
              <h3 className="ul-team-member-name">
                <Link href="/">Leslie Alexander</Link>
              </h3>
              <span className="ul-team-member-position">Web Designer</span>
            </div>
            <div className="ul-team-member-socials">
              <Link href="#">
                <i className="flaticon-facebook-app-symbol"></i>
              </Link>
              <Link href="#">
                <i className="flaticon-instagram"></i>
              </Link>
              <Link href="#">
                <i className="flaticon-linkedin-big-logo"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- single team --> */}
        <div className="col">
          <div className="ul-team-member">
            <div className="ul-team-member-img">
              <img src="/webImages/team-2.png" alt="Team Member Image" />
            </div>
            <div className="ul-team-member-txt">
              <h3 className="ul-team-member-name">
                <Link href="/">Leslie Alexander</Link>
              </h3>
              <span className="ul-team-member-position">Web Designer</span>
            </div>
            <div className="ul-team-member-socials">
              <Link href="#">
                <i className="flaticon-facebook-app-symbol"></i>
              </Link>
              <Link href="#">
                <i className="flaticon-instagram"></i>
              </Link>
              <Link href="#">
                <i className="flaticon-linkedin-big-logo"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- single team --> */}
        <div className="col">
          <div className="ul-team-member">
            <div className="ul-team-member-img">
              <img src="/webImages/team-3.png" alt="Team Member Image" />
            </div>
            <div className="ul-team-member-txt">
              <h3 className="ul-team-member-name">
                <Link href="/">Leslie Alexander</Link>
              </h3>
              <span className="ul-team-member-position">Web Designer</span>
            </div>
            <div className="ul-team-member-socials">
              <Link href="#">
                <i className="flaticon-facebook-app-symbol"></i>
              </Link>
              <Link href="#">
                <i className="flaticon-instagram"></i>
              </Link>
              <Link href="#">
                <i className="flaticon-linkedin-big-logo"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- single team --> */}
        <div className="col">
          <div className="ul-team-member">
            <div className="ul-team-member-img">
              <img src="/webImages/team-4.png" alt="Team Member Image" />
            </div>
            <div className="ul-team-member-txt">
              <h3 className="ul-team-member-name">
                <Link href="/">Leslie Alexander</Link>
              </h3>
              <span className="ul-team-member-position">Web Designer</span>
            </div>
            <div className="ul-team-member-socials">
              <Link href="#">
                <i className="flaticon-facebook-app-symbol"></i>
              </Link>
              <Link href="#">
                <i className="flaticon-instagram"></i>
              </Link>
              <Link href="#">
                <i className="flaticon-linkedin-big-logo"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
