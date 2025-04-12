const footer = document.getElementById("footer");

footer.innerHTML = `
    <footer class="md:p-8">
        <div class="max-w-[1485px] md:mt-20 mt-10 w-full mx-auto md:rounded-3xl bg-[#0c1524] md:p-10 p-5 pt-12">
    
            <div class="flex md:items-center justify-between md:flex-row flex-col gap-5">
                <a href="./index.html">
                    <img src="./Docs/Assets/footer-logo.svg" class="h-12" alt="">
                </a>
                <h2 class="text-white md:text-4xl text-2xl font-bold">Trusted by Businesses
                    Nationwide</h2>
            </div>
    
            <div class="flex md:mt-20 mt-10 md:items-center justify-between md:flex-row flex-col gap-5">
                <div class="max-w-sm w-full">
                    <h2 class="text-white md:text-2xl tracking-wide text-xl font-bold">Stay Updated</h2>
                    <p class="text-white mt-1 opacity-80">Sign up
                        for our newsletter to
                        receive expert insights,
                        industry updates, and
                        exclusive offers.</p>
                    <form action="" class="mt-4">
                        <input type="text" placeholder="Enter Mail"
                            class="w-full border-b border-[#3a414d] text-white py-3 bg-transparent">
                        <div class="flex mt-4">
                            <a href=""
                                class="bg-[#ff8159] text-white group px-4 font-semibold flex overflow-hidden items-center gap-2 rounded-lg py-2.5 transition-all duration-500 relative">
                                <span
                                    class="bg-[#fff] w-0 h-full group-hover:w-full transition-all duration-500 absolute top-0 left-0"></span>
                                <span class="z-10 group-hover:text-[#ff8159] transition-all duration-500">
                                    Subscribe No
                                </span>
                                <span
                                    class="text-[#ff8159] w-[32px] h-[32px] flex group-hover:bg-[#ff8159] group-hover:text-[#fff] transition-all duration-500 items-center justify-center z-10 bg-white rounded-lg">
                                    <i class="fa-solid fa-arrow-right -rotate-45"></i>
                                </span>
                            </a>
                        </div>
                    </form>
                </div>
                <div class="flex md:flex-row flex-col flex-wrap md:gap-20 gap-8 md:mt-0 mt-6">
    
                    <div class="">
                        <h2 class="text-white md:text-xl tracking-wide text-xl font-semibold">Support </h2>
                        <ul class="md:mt-6 mt-4 text-white opacity-80 space-y-2">
                            <li><a class="hover:text-[#ff8159] transition-all duration-500" href="">Book appointment</a>
                            </li>
                            <li><a class="hover:text-[#ff8159] transition-all duration-500" href="">Get help </a></li>
                            <li><a class="hover:text-[#ff8159] transition-all duration-500" href="">Text us</a></li>
                        </ul>
                    </div>
                    <div class="">
                        <h2 class="text-white md:text-xl tracking-wide text-xl font-semibold">Follow Us </h2>
                        <ul class="mt-6 text-white opacity-80 flex gap-2">
                            <li><a class="hover:text-[#ff8159] hover:bg-white transition-all text-white w-10 h-10 flex items-center justify-center rounded-full bg-[#ff8159]  duration-500"
                                    href="">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a></li>
                            <li><a class="hover:text-[#ff8159] hover:bg-white transition-all text-white w-10 h-10 flex items-center justify-center rounded-full bg-[#ff8159]  duration-500"
                                    href="">
                                    <i class="fa-brands fa-instagram text-lg"></i>
                                </a></li>
                            <li><a class="hover:text-[#ff8159] hover:bg-white transition-all text-white w-10 h-10 flex items-center justify-center rounded-full bg-[#ff8159]  duration-500"
                                    href="">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a></li>
                        </ul>
                    </div>
    
                </div>
            </div>
    
            <div class="border-t pt-5 text-center border-[#3a414d] mt-14">
                <p class="md:text-lg text-white">copyright © 2024 wexico. all rights reserved.</p>
            </div>
        </div>
    </footer>
`