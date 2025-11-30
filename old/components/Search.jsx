export default function Search() {
    return (
        // <!-- SEARCH MODAL SECTION START -->
        <div className="ul-search-form-wrapper flex-grow-1 flex-shrink-0">
            <button className="ul-search-closer"><i className="flaticon-close-1"></i></button>

            <form action="#" className="ul-search-form">
                <div className="ul-search-form-right">
                    <input type="search" name="search" id="ul-search" placeholder="Search Here" />
                    <button type="submit"><span className="icon"><i className="flaticon-search"></i></span></button>
                </div>
            </form>
        </div>
        // <!-- SEARCH MODAL SECTION END -->
    );
}
