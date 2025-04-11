const navbar = document.getElementById("navbar");

navbar.innerHTML = `
     <nav>
        <div class="max-w-7xl mx-auto flex justify-between items-center w-full p-5 md:py-8">
            <a href="./index.html" class="flex justify-center lg:justify-start">
                <img src="./Docs/Assets/logo.svg" class="h-[39px]" alt="logo">
            </a>
            <ul class="md:flex hidden items-center gap-10">
                <li><a href="./index.html" class="hover:text-[#ff8159] transition-all font-medium duration-500">Home</a>
                </li>
                <li><a href="./about.html"
                        class="hover:text-[#ff8159] transition-all font-medium duration-500">About</a></li>
                <li><a href="./services.html"
                        class="hover:text-[#ff8159] transition-all font-medium duration-500">Services</a></li>
                <li><a href="./blog.html" class="hover:text-[#ff8159] transition-all font-medium duration-500">Blog</a>
                </li>
                <li><a href="./contact.html"
                        class="hover:text-[#ff8159] transition-all font-medium duration-500">Contact</a></li>
            </ul>
            <a href=""
                class="bg-[#ff8159] text-white group px-4 font-semibold md:flex hidden overflow-hidden items-center gap-2 rounded-lg py-2.5 transition-all duration-500 relative">
                <span
                    class="bg-[#0c1524] w-0 h-full group-hover:w-full transition-all duration-500 absolute top-0 left-0"></span>
                <span class="z-10">
                    Book Now
                </span>
                <span
                    class="text-[#ff8159] w-[32px] h-[32px] flex items-center justify-center z-10 bg-white rounded-lg">
                    <i class="fa-solid fa-arrow-right -rotate-45"></i>
                </span>
            </a>

            <i id="mobileMenuBtn" class="fa-solid fa-bars md:hidden text-2xl cursor-pointer"></i>
        </div>
    </nav>

    <div id="mobileMenuBg"
        class="fixed cursor-crosshair transition-all duration-500 top-0 right-0 w-0 h-full bg-[#0d0d0c] opacity-50 z-40">
    </div>
    <div id="mobileMenu"
        class="fixed right-0 top-0 bg-white max-w-[30rem] w-0 overflow-hidden h-screen z-50 transition-all duration-500">
        <i id="mobileMenuCloseBtn"
            class="fa-solid fa-x z-50 relative flex items-end justify-end p-5 text-2xl cursor-pointer"></i>
        <ul class="flex relative z-50 flex-col p-10 gap-7">
            <li><a href="./index.html" class="hover:text-[#6c2313] transition-all font-medium duration-500">Home</a>
            </li>
            <li><a href="./about-us.html" class="hover:text-[#6c2313] transition-all font-medium duration-500">About
                    </a></li>
            <li><a href="./services.html"
                    class="hover:text-[#6c2313] transition-all font-medium duration-500">Services</a>
            <li><a href="./blog.html" class="hover:text-[#6c2313] transition-all font-medium duration-500">Blog
                    </a>
            <li><a href="./contact.html" class="hover:text-[#6c2313] transition-all font-medium duration-500">Contact
                    </a>
            </li>
        </ul>
    </div>
`


const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtn = document.getElementById("mobileMenuCloseBtn");
const mobileMenuBg = document.getElementById("mobileMenuBg");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
    mobileMenuBg.style.width = "100vw";
});

mobileMenuCloseBtn.addEventListener("click", () => {
    mobileMenu.style.width = "0";
    mobileMenuBg.style.width = "0";
});

mobileMenuBg.addEventListener("click", () => {
    mobileMenu.style.width = "0";
    mobileMenuBg.style.width = "0";
});