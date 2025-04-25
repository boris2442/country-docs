import React from 'react';

const Logo = () => {
    return (
        // les images importes depuis la balises img sont importes depuis le public
        <div clasName="w-[100%] fixed top-0 left-0" >
            <div className="md:w-full mx-auto flex items-center justify-center mt-5 shadow-2xl lg:w-[400px] rounded-4xl p-4 gap-2">
            <img src="boris-code-237.png" alt="logo-boris-code" className="h-[50px] w-[50px] object-cover rounded-full md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]" />
            <h2 className="md:text-[14px] text-green-500 font-bold lg:3xl uppercase ">Explorer les pays du monde</h2>
            </div>
        </div>
    );
};

export default Logo;