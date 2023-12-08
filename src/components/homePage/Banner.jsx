

const Banner = () => {
    return (
        <div className="h-100 w-100  position-relative mb-5">
            <img className="w-100 mx-auto object-fit-contain" src="/src/assets/banner.png" alt="Banner Photo" />
            <div className="h-100 w-100 position-absolute top-0 bg-black z-0 bg-opacity-50 ">
                <div className="fw-bold text-white position-absolute bottom-0 m-5 px-5">
                <h1 className="z-3 fs-1 ">Computer Engineering</h1>
                <h4 className="fs-5">142,765 Computer Engineers follow this</h4>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;