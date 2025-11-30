"use client";
import Link from "next/link";

export default function Error() {
  return (
    <section className="ul-404 ul-section-spacing text-center">
    <div className="ul-container">
        <div className="ul-404-img">
            <img src="/webImages/error-404.png" alt="Image"/>
        </div>
        <Link href="/" className="ul-btn"><span>Back to Home <i className="flaticon-top-right"></i></span></Link>
    </div>
</section>
  );
}
