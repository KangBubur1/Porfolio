const Footer = () => {
    return(
        <footer className="mb-10 px-4 text-center text-gray-500 mt-24">
            <small className="mb-2 block text-xs">
                &copy; 2024 Daniel. All rights reserved.
            </small>
            <p className="text-xs mb-2">
                <span className="font-semibold">About this websiteL</span> built with Next.js (App Router & Server Actions),
                TypeSript, TailwindCss, Framer Motion, React Email & Resend, Vercel hosting.
            </p>
            <div className="flex flex-col items-center p-2  text-gray-700">
                <p className="text-md mb-1">
                    Special thanks to <a href="https://www.youtube.com/watch?v=sUKptmUVIBM" className="text-blue-500 hover:underline">ByteGrad</a> for their tutorial,
                </p>
                <p className="text-md">
                    and to <a href="https://ui.aceternity.com/" className="text-blue-500 hover:underline">Manu Arora</a> for the UI components.
                </p>
            </div>

        </footer>
    )
}

export default Footer;