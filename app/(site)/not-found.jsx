export default function NotFound() {
    return (
        <div className="text-center py-16">
            <img src="/webImages/Capa.png" alt="404 page cartoon" className="mx-auto mb-9" />

                <h1 className="text-xl">
                    <span className="opacity-90">Oh dear! 404, the page does not exist.</span>
                    <a href="/" target="_self" className="js-hover-circle-animation inline-block text-malibu relative">
                        <span className="font-medium">Take me to the homepage.</span>
                        <span className="pl-2">
                            <svg className="inline-block" preserveAspectRatio="none" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true">
                                <use href="/webImages/icons.svg#arrow-right"></use>
                            </svg>
                        </span>
                    </a>
                </h1>
        </div>
    )
}