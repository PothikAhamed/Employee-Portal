import React from 'react'

const Header = () => {
  return (
    <div
      className="
        w-full
        max-w-7xl
        mt-5
        mx-auto
        px-4
        md:px-10
        flex
        items-center
        justify-between
        gap-4
      "
    >

      <div>

        <h2 className="
          text-sm
          md:text-base
          text-gray-400
        ">
          Hello
        </h2>


        <h1 className="
          font-bold
          text-lg
          md:text-xl
          text-white
        ">
          Pothik Ahammed 👋🏻
        </h1>


      </div>



      <div
        className="
          bg-[#1e272e]
          shadow
          shadow-black
          px-4
          py-2
          rounded-lg
        "
      >

        <button
          className="
            text-white
            text-sm
            md:text-base
            hover:text-gray-300
            transition
          "
        >
          LogOut
        </button>


      </div>


    </div>
  )
}

export default Header