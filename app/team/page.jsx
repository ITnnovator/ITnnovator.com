import Link from "next/link";
export default function team() {
  return (
    <>
      <main className="grow">
        <div className="max-w-7xl mx-auto px-6 xl:px-8">
          <div className="block md:text-lg mb-6">
            <span>
              <span>
                <a href="/"> Home </a>
              </span>
              /
              <span className="breadcrumb_last" aria-current="page">
                <strong> Our Team</strong>
              </span>
            </span>
          </div>
          <div className="max-w-[780px] prose-editor pt-10">
            <h1 className="mb-5 lg:mb-10 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
              Our Team
            </h1>

            <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit mb-12 lg:mb-16">
              <p>
                Here you will find our creative team who assists you with everything from
                branding and search engine optimization to development, integrations and digital growth.
              </p>
              <p>
                If you wish to contact us for a quote or support, you can reach us at:
                <br />
                Inquiries:
                <a href="mailto:info@itnnovator.com"> info@itnnovator.com</a>
                <br />
                Support:
                <a href="mailto:support@itnnovator.com"> support@itnnovator.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[94rem] mx-auto px-6 xl:px-8 pb-12 md:pb-16">
          <div className="group sm:flex sm:flex-wrap -mx-5 xl:-mx-5 pt-20">

            {/* <!-- TEAM MEMBER (Replace image and details with your actual team content when needed) --> */}
            <div className="sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 xl:px-5 mb-12 sm:mb-16 md:mb-20 lg:mb-40 xl:mb-48 [&:nth-child(4n-2)]:lg:-translate-y-11 [&:nth-child(4n-1)]:lg:translate-y-9">
              <div className="js-decoration-holder decoration-holder relative z-[1]">
                <div className="border border-[#303030] rounded-[1.25rem] overflow-hidden text-center">
                  <div className="relative z-[1]">
                    <img
                      width="329"
                      height="354"
                      src="/webImages/t1.jpg"
                      className="w-full h-auto"
                      alt="team-member"
                    />
                    <span className="absolute w-full bottom-0 h-[82px] left-0 bg-gradient-to-t from-black"></span>
                  </div>
                  <div className="relative z-10 pb-6 md:pb-7 lg:pb-8 xl:pb-10 px-2 -mt-[68px]">
                    <h2 className="mb-0.5 text-2xl font-bold text-white">M Saim Raza</h2>
                    <span className="text-lg xl:text-xl block mb-4 md:mb-6 lg:mb-8">CEO</span>
                    <span className="block text-lg">
                      <a href="mailto:saim@itnnovator.com" className="text-malibu">
                        saim@itnnovator.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Duplicate and modify blocks below for more team members --> */}
            <div className="sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 xl:px-5 mb-12 sm:mb-16 md:mb-20 lg:mb-40 xl:mb-48 [&:nth-child(4n-2)]:lg:-translate-y-11 [&:nth-child(4n-1)]:lg:translate-y-9">
              <div className="js-decoration-holder decoration-holder relative z-[1]">
                <div className="border border-[#303030] rounded-[1.25rem] overflow-hidden text-center">
                  <div className="relative z-[1]">
                    <img
                      width="329"
                      height="354"
                      src="/webImages/t2.jpg"
                      className="w-full h-auto"
                      alt="team-member"
                    />
                    <span className="absolute w-full bottom-0 h-[82px] left-0 bg-gradient-to-t from-black"></span>
                  </div>
                  <div className="relative z-10 pb-6 md:pb-7 lg:pb-8 xl:pb-10 px-2 -mt-[68px]">
                    <h2 className="mb-0.5 text-2xl font-bold text-white">Sanjay Andani</h2>
                    <span className="text-lg xl:text-xl block mb-4 md:mb-6 lg:mb-8">COO</span>
                    <span className="block text-lg">
                      <a href="mailto:sanjay@itnnovator.com" className="text-malibu">
                        sanjay@itnnovator.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Duplicate and modify blocks below for more team members --> */}
            <div className="sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 xl:px-5 mb-12 sm:mb-16 md:mb-20 lg:mb-40 xl:mb-48 [&:nth-child(4n-2)]:lg:-translate-y-11 [&:nth-child(4n-1)]:lg:translate-y-9">
              <div className="js-decoration-holder decoration-holder relative z-[1]">
                <div className="border border-[#303030] rounded-[1.25rem] overflow-hidden text-center">
                  <div className="relative z-[1]">
                    <img
                      width="329"
                      height="354"
                      src="/webImages/t3.jpg"
                      className="w-full h-auto"
                      alt="team-member"
                    />
                    <span className="absolute w-full bottom-0 h-[82px] left-0 bg-gradient-to-t from-black"></span>
                  </div>
                  <div className="relative z-10 pb-6 md:pb-7 lg:pb-8 xl:pb-10 px-2 -mt-[68px]">
                    <h2 className="mb-0.5 text-2xl font-bold text-white">Arish Ali</h2>
                    <span className="text-lg xl:text-xl block mb-4 md:mb-6 lg:mb-8">Managing Director</span>
                    <span className="block text-lg">
                      <a href="mailto:arish@itnnovator.com" className="text-malibu">
                        arish@itnnovator.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Duplicate and modify blocks below for more team members --> */}
            <div className="sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 xl:px-5 mb-12 sm:mb-16 md:mb-20 lg:mb-40 xl:mb-48 [&:nth-child(4n-2)]:lg:-translate-y-11 [&:nth-child(4n-1)]:lg:translate-y-9">
              <div className="js-decoration-holder decoration-holder relative z-[1]">
                <div className="border border-[#303030] rounded-[1.25rem] overflow-hidden text-center">
                  <div className="relative z-[1]">
                    <img
                      width="329"
                      height="354"
                      src="/webImages/t4.jpg"
                      className="w-full h-auto"
                      alt="team-member"
                    />
                    <span className="absolute w-full bottom-0 h-[82px] left-0 bg-gradient-to-t from-black"></span>
                  </div>
                  <div className="relative z-10 pb-6 md:pb-7 lg:pb-8 xl:pb-10 px-2 -mt-[68px]">
                    <h2 className="mb-0.5 text-2xl font-bold text-white">Muhammad Saif</h2>
                    <span className="text-lg xl:text-xl block mb-4 md:mb-6 lg:mb-8">Business Development Representative</span>
                    <span className="block text-lg">
                      <a href="mailto:saif@itnnovator.com" className="text-malibu">
                        saif@itnnovator.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </main>

    </>
  );
}
