import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";

function Main() {
  const { isOpen: isOpen1, onOpen: onOpen1, onOpenChange: onOpenChange1 } = useDisclosure();
  const { isOpen: isOpen2, onOpen: onOpen2, onOpenChange: onOpenChange2 } = useDisclosure();

  return (<>
    <div className="justify-center items-center px-8">
      <section className="flex flex-col md:flex-col lg:flex-row h-full justify-center items-center gap-10">

        <div className="container uppercase font-semibold relative mx-auto p-4 leading-7 h-auto shadow border border-gray-900 bg-gray-900/50 backdrop-blur-[6px] text-lg text-white rounded-lg">
          <p className="flex flex-row items-center gap-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">Status:</span> <span className="text-sm px-2 bg-gradient-to-r from-green-300 to-green-600 rounded-full">Online</span></p>
          <p className="flex flex-row items-center gap-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">Player Online:</span> <span className="text-sm px-2  bg-gradient-to-r from-green-300 to-green-600 rounded-full  font-bold">32123312645</span></p>
          <p className="flex flex-row items-center gap-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">Coming soon:</span> <span className="text-sm px-2 bg-gradient-to-r from-[#FFA80F] to-[#FE8116] rounded-full">12/54/2023</span></p>
          <p className="flex flex-row items-center gap-4 mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">Word Type:</span> Retro-pvp</p>
          <div className="flex justify-center absolute -bottom-12 right-0 w-full p-6 gap-4" >
            <button onClick={onOpen1} className="flex flex-row items-center gap-4 text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md px-4 py-2 text-lg text-white font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" /></svg>
              Trailer
            </button>
            <a href="3" className="animate-bounce text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md w-full px-4 py-2">Play Now</a>
          </div>
          <div className="absolute right-2 top-2" >
            <span />
            <img src="/icons/option_server_pvp_type_optional.gif" alt="" />
          </div>
        </div>

        <div className="container uppercase font-semibold relative mx-auto p-4 leading-7 h-auto shadow border border-gray-900 bg-gray-900/50 backdrop-blur-[6px] text-lg text-white rounded-lg">
          <p className="flex flex-row items-center gap-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">Status:</span> <span className="text-sm px-2 bg-gradient-to-r from-green-300 to-green-600 rounded-full">Online</span></p>
          <p className="flex flex-row items-center gap-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">Player Online:</span> <span className="text-sm px-2  bg-gradient-to-r from-green-300 to-green-600 rounded-full  font-bold">32123312645</span></p>
          <p className="flex flex-row items-center gap-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">Coming soon:</span> <span className="text-sm px-2 bg-gradient-to-r from-[#FFA80F] to-[#FE8116] rounded-full">12/54/2023</span></p>
          <p className="flex flex-row items-center gap-4 mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">Word Type:</span> Retro-pvp</p>
          <div className="flex justify-center absolute -bottom-12 right-0 w-full p-6 gap-4" >
            <button onClick={onOpen2} className="flex flex-row items-center gap-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md px-4 py-2 text-lg text-white font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" /></svg>
              Trailer
            </button>
            <a href="3" className="animate-bounce text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md w-full px-4 py-2">Play Now</a>
          </div>
          <div className="absolute right-2 top-2" >
            <span />
            <img src="/icons/option_server_pvp_type_optional.gif" alt="" />
          </div>
        </div>

      </section>

    </div>

    <Modal isOpen={isOpen1} onOpenChange={onOpenChange1} size="3xl" backdrop="blur">
      <ModalContent className='w-auto'>
        {() => (
          <>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/OpAaLT_PTCU?si=pEFvEirQW9jMP_9w&amp;controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />

          </>
        )}
      </ModalContent>
    </Modal >

    <Modal isOpen={isOpen2} onOpenChange={onOpenChange2} size="3xl" backdrop="blur">
      <ModalContent className='w-auto'>
        {() => (
          <>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/OpAaLT_PTCU?si=pEFvEirQW9jMP_9w&amp;controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />

          </>
        )}
      </ModalContent>
    </Modal >

  </>)
}

export default Main