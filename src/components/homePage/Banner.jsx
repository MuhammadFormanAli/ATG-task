

const Banner = () => {
    return (
        <div className="h-100 w-100  position-relative mb-5">
            <img className="w-100 mx-auto object-fit-contain" src="banner.png" alt="Banner Photo" />
            <div className="h-100 w-100 position-absolute top-0 bg-black z-0 bg-opacity-50 ">
                <div className="fw-bold text-white position-absolute bottom-0 m-1 m-md-5 px-1 md-px-5">
                <p className="z-3 thirty-six-px ">Computer Engineering</p>
                <h4 className="eighteen-px">142,765 Computer Engineers follow this</h4>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;