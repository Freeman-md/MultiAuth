import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
              Tailored Access for Every Role
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-gray-500">
              From landlords overseeing properties to tenants managing their
              spaces, and maintenance staff handling work orders—our platform
              customizes the experience for everyone.
            </p>

            <a
              href="#"
              className="mt-8 btn btn-primary inline-block px-12 py-3 text-sm font-medium "
            >
              Get Started Today
            </a>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Cookies
                </a>
              </li>
            </ul>

            <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="https://www.linkedin.com/in/freeman-madudili-9864101a2/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Linkedin</span>

                  <IconBrandLinkedin stroke={2} />
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/freemancodz"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <IconBrandInstagram />
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/freemancodz"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">X</span>

                  <IconBrandX />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Freeman-md"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <IconBrandGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
