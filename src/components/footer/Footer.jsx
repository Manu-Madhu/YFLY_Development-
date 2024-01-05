import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto right-0 w-full pt-10">
      <div className="mt-20">
        <footer class="bg-primary_colors  shadow z-50">
          <div class="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:items-center md:justify-center">
            <span class="text-sm text-white sm:text-center ">
              © 2024{" "}
              <a href="#" class="hover:underline">
                YFLY International
              </a>
              . All Rights Reserved.
            </span>
            <span class="text-sm text-white sm:text-center ">
              Developed By
              <a
                href="https://qmarktechnolabs.com/"
                target="blank"
                class="hover:underline hover:text-purple-600"
              >
                {" "}
                Qmark Technolabs
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
